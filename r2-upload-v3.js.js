/**
 * CLOUDFLARE R2 UPLOAD SCRIPT - AWS SDK v3 VERSION
 * Modern and working version
 */

require('dotenv').config();
const { S3Client, PutObjectCommand, HeadObjectCommand, ListBucketsCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

// ===== ENV VARIABLES =====
const ACCOUNT_ID = process.env.R2_ACCOUNT_ID?.trim();
const ACCESS_KEY = process.env.R2_ACCESS_KEY?.trim();
const SECRET_KEY = process.env.R2_SECRET_KEY?.trim();
const BUCKET = process.env.R2_BUCKET?.trim();

console.log("🚀 Cloudflare R2 Upload Script (AWS SDK v3)");
console.log("=".repeat(60));

// Check credentials
if (!ACCOUNT_ID || !ACCESS_KEY || !SECRET_KEY || !BUCKET) {
  console.error("❌ Missing R2 environment variables!");
  console.log("\nYour .env file should contain:");
  console.log(`
R2_ACCOUNT_ID=your_32_char_account_id
R2_ACCESS_KEY=your_access_key_here
R2_SECRET_KEY=your_secret_key_here
R2_BUCKET=your_bucket_name
  `);
  process.exit(1);
}

console.log("✅ Credentials loaded:");
console.log(`  Account ID: ${ACCOUNT_ID.substring(0, 8)}...`);
console.log(`  Access Key: ${ACCESS_KEY.substring(0, 8)}...`);
console.log(`  Secret Key: ${SECRET_KEY.substring(0, 8)}...`);
console.log(`  Bucket: ${BUCKET}`);

// ===== R2 CLIENT (AWS SDK v3) =====
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
  forcePathStyle: true, // Important for R2
});

const BASE_URL = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com/${BUCKET}`;

// ===== TEST CONNECTION =====
async function testConnection() {
  try {
    console.log("\n🔐 Testing R2 connection...");
    
    // First, try to list buckets to verify credentials
    const listCommand = new ListBucketsCommand({});
    const bucketsData = await s3Client.send(listCommand);
    
    console.log("✅ Successfully connected to R2!");
    console.log(`  Available buckets: ${bucketsData.Buckets.map(b => b.Name).join(', ')}`);
    
    // Check if our bucket exists
    const hasBucket = bucketsData.Buckets.some(b => b.Name === BUCKET);
    if (hasBucket) {
      console.log(`  ✅ Bucket "${BUCKET}" exists`);
      return true;
    } else {
      console.log(`  ❌ Bucket "${BUCKET}" not found!`);
      console.log("  Please create it in the Cloudflare R2 dashboard first.");
      return false;
    }
    
  } catch (error) {
    console.error("❌ Failed to connect to R2:", error.message);
    
    if (error.name === 'InvalidAccessKeyId' || error.name === 'SignatureDoesNotMatch') {
      console.log("\n🔐 Authentication Error!");
      console.log("Please check:");
      console.log("1. Your R2_ACCESS_KEY and R2_SECRET_KEY are correct");
      console.log("2. You've created an API token in R2 dashboard");
      console.log("3. The token has 'Edit' permissions for your bucket");
    } else if (error.name === 'NoSuchBucket') {
      console.log(`\n📦 Bucket "${BUCKET}" doesn't exist`);
      console.log("Please create it in the Cloudflare R2 dashboard");
    }
    
    return false;
  }
}

// ===== SIMPLE MIME TYPE DETECTION =====
function getMimeType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',
    '.wmv': 'video/x-ms-wmv',
    '.mkv': 'video/x-matroska',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.html': 'text/html',
    '.txt': 'text/plain',
  };
  
  return mimeTypes[ext] || 'application/octet-stream';
}

// ===== FIND MEDIA FILES =====
console.log("\n📁 Scanning for media files...");
const MEDIA_PATTERN = "**/*.{png,jpg,jpeg,gif,svg,webp,pdf,mp4,mov,avi,wmv,mkv,mp3,wav,ico,ttf,woff,woff2,eot,otf}";

const mediaFiles = glob.sync(MEDIA_PATTERN, {
  ignore: ["node_modules/**", ".git/**", "*.backup", "sync-*.js", "debug-*.js", "test-*.js"],
  nodir: true
});

console.log(`✅ Found ${mediaFiles.length} media files`);

// ===== UPLOAD MEDIA =====
async function uploadMedia() {
  let uploadedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  // Process in smaller batches to avoid memory issues
  const batchSize = 20;
  
  for (let i = 0; i < mediaFiles.length; i += batchSize) {
    const batch = mediaFiles.slice(i, Math.min(i + batchSize, mediaFiles.length));
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(mediaFiles.length / batchSize);
    
    console.log(`\n📦 Batch ${batchNum}/${totalBatches} (${batch.length} files)`);
    
    for (const file of batch) {
      try {
        const key = file.replace(/\\/g, "/"); // Windows paths → R2 paths
        
        // Check if file exists
        if (!fs.existsSync(file)) {
          console.log(`  ⚠️  File not found: ${file}`);
          continue;
        }
        
        const fileSize = fs.statSync(file).size;
        if (fileSize > 100 * 1024 * 1024) { // 100MB limit
          console.log(`  ⚠️  Skipping large file: ${file} (${(fileSize / (1024*1024)).toFixed(2)}MB)`);
          continue;
        }
        
        const body = fs.readFileSync(file);
        const contentType = getMimeType(file);
        
        // Check if file already exists (optional - can be slow for many files)
        /*
        try {
          await s3Client.send(new HeadObjectCommand({
            Bucket: BUCKET,
            Key: key,
          }));
          console.log(`  ⏭️  Already exists: ${key}`);
          skippedCount++;
          continue;
        } catch (headError) {
          // File doesn't exist, proceed with upload
        }
        */
        
        // Upload file
        const putCommand = new PutObjectCommand({
          Bucket: BUCKET,
          Key: key,
          Body: body,
          ContentType: contentType,
        });
        
        await s3Client.send(putCommand);
        uploadedCount++;
        
        if (uploadedCount % 10 === 0) {
          console.log(`  ✅ Uploaded ${uploadedCount}/${mediaFiles.length}: ${key.substring(0, 60)}...`);
        } else if (uploadedCount <= 10) {
          console.log(`  ✅ Uploaded: ${key}`);
        }
        
      } catch (error) {
        errorCount++;
        console.error(`  ❌ Error uploading ${file}:`, error.message);
        
        // Stop on authentication errors
        if (error.name === 'InvalidAccessKeyId' || error.name === 'SignatureDoesNotMatch') {
          throw error;
        }
      }
    }
    
    // Small delay between batches
    if (i + batchSize < mediaFiles.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  return { uploadedCount, skippedCount, errorCount };
}

// ===== UPDATE CODE FILES =====
async function updateCodeFiles() {
  console.log("\n📝 Scanning for code files to update...");
  
  const CODE_PATTERN = "**/*.{html,css,js,jsx,ts,tsx,php,json,xml,txt,md}";
  const codeFiles = glob.sync(CODE_PATTERN, {
    ignore: ["node_modules/**", ".git/**", "*.backup", "sync-*.js", "debug-*.js", "test-*.js"],
    nodir: true
  });
  
  console.log(`✅ Found ${codeFiles.length} code files`);
  
  let updatedCount = 0;
  
  // Function to create R2 URL
  function createR2Url(filePath) {
    // Remove leading ./ or ../
    let cleanPath = filePath.replace(/^(\.\.?\/)+/, '');
    // Remove leading slash
    cleanPath = cleanPath.replace(/^\//, '');
    return `${BASE_URL}/${cleanPath}`;
  }
  
  for (const file of codeFiles.slice(0, 1000)) { // Limit to first 1000 files for testing
    try {
      const content = fs.readFileSync(file, 'utf8');
      let newContent = content;
      
      // Replace various patterns
      newContent = newContent.replace(
        /(src=["'])(?!http)(?!data:)([^"']+\.(?:png|jpg|jpeg|gif|svg|webp|mp4|mov|avi|wmv|mkv|mp3|wav|pdf|ico))(["'])/gi,
        (match, prefix, filePath, suffix) => {
          return `${prefix}${createR2Url(filePath)}${suffix}`;
        }
      );
      
      newContent = newContent.replace(
        /(url\(["']?)(?!http)(?!data:)([^"')]+\.(?:png|jpg|jpeg|gif|svg|webp|ico|ttf|woff|woff2|eot|otf))(["']?\))/gi,
        (match, prefix, filePath, suffix) => {
          return `${prefix}${createR2Url(filePath)}${suffix}`;
        }
      );
      
      newContent = newContent.replace(
        /(href=["'])(?!http)(?!mailto)(?!tel)(?!javascript:)(?![/#])([^"']+\.(?:pdf|mp4|mov|avi|wmv|mkv|mp3|wav))(["'])/gi,
        (match, prefix, filePath, suffix) => {
          return `${prefix}${createR2Url(filePath)}${suffix}`;
        }
      );
      
      if (newContent !== content) {
        // Create backup
        const backupFile = `${file}.backup`;
        if (!fs.existsSync(backupFile)) {
          fs.writeFileSync(backupFile, content, 'utf8');
        }
        
        // Write updated content
        fs.writeFileSync(file, newContent, 'utf8');
        updatedCount++;
        
        if (updatedCount <= 10) {
          console.log(`  ✏️  Updated: ${file}`);
        }
      }
      
    } catch (error) {
      console.error(`  ❌ Error updating ${file}:`, error.message);
    }
  }
  
  return updatedCount;
}

// ===== MAIN FUNCTION =====
async function main() {
  try {
    // Test connection first
    const connected = await testConnection();
    if (!connected) {
      console.log("\n❌ Cannot proceed without successful connection");
      return;
    }
    
    // Upload media files
    console.log("\n" + "=".repeat(60));
    console.log("📤 Starting media upload...");
    console.log("=".repeat(60));
    
    const uploadResult = await uploadMedia();
    
    // Update code files
    console.log("\n" + "=".repeat(60));
    console.log("🔄 Updating code file paths...");
    console.log("=".repeat(60));
    
    const updatedCount = await updateCodeFiles();
    
    // Show summary
    console.log("\n" + "=".repeat(60));
    console.log("🎉 SYNC COMPLETE!");
    console.log("=".repeat(60));
    console.log("\n📊 SUMMARY:");
    console.log(`  Total media files found: ${mediaFiles.length}`);
    console.log(`  Successfully uploaded: ${uploadResult.uploadedCount}`);
    console.log(`  Skipped: ${uploadResult.skippedCount}`);
    console.log(`  Errors: ${uploadResult.errorCount}`);
    console.log(`  Code files updated: ${updatedCount}`);
    console.log(`\n🔗 Your files are available at: ${BASE_URL}/`);
    console.log("\n💡 Tip: To make files publicly accessible, you need to:");
    console.log("  1. Go to Cloudflare R2 dashboard");
    console.log(`  2. Select bucket "${BUCKET}"`);
    console.log("  3. Go to Settings → Public Access");
    console.log("  4. Enable public access");
    console.log("=".repeat(60));
    
  } catch (error) {
    console.error("\n❌ Fatal error:", error.message);
    console.log("\n💡 Troubleshooting:");
    console.log("1. Check your .env file credentials");
    console.log("2. Verify bucket exists in R2 dashboard");
    console.log("3. Create new R2 API token if needed");
    console.log("4. Make sure bucket is in the same account as the token");
  }
}

// Run the script
main();


