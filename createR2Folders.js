const AWS = require('aws-sdk');

// Replace these with your R2 credentials
const s3 = new AWS.S3({
    endpoint: 'https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com',
    accessKeyId: '4df404add3397684c4472ef85fe36ddc',
    secretAccessKey: '4aaec7239d034d1af002d8cd19dbf21358d200eb70de594ab602bbdd0b33414a',
    signatureVersion: 'v4',
});

// List all folders (you can edit this list to add/remove)
const folders = [
    'global/',
    'global/icons/',
    'header/',
    'header/languages/',
    'products/',
    'products/ip-products/',
    'products/ip-products/network-camera/',
    'products/ip-products/network-camera/banners/',
    'products/ip-products/network-camera/deepinview-series/',
    'products/ip-products/network-camera/deepinview-series/features/',
    'products/ip-products/network-camera/deepinview-series/downloads/',
    'products/ip-products/network-camera/deepinview-series/models/',
    'products/ip-products/network-camera/ptz-series/',
    'products/ip-products/network-camera/ultra-series/',
    'products/ip-products/network-camera/explosion-proof-series/',
    'products/ip-products/network-camera/value-series/',
    'products/ip-products/network-camera/application-scenarios/',
    'solutions/',
    'solutions/by-scenario/',
    'solutions/by-scenario/apartment/',
    'solutions/by-scenario/apartment/features/',
    'solutions/by-scenario/apartment/product-images/',
    'solutions/by-scenario/apartment/scenario-diagrams/',
    'solutions/by-scenario/apartment/downloads/',
    'solutions/by-industry/',
    'solutions/by-industry/education/',
    'solutions/by-industry/education/related-images/',
    'solutions/by-industry/education/downloads/',
    'solutions/by-function/',
    'solutions/by-function/ar-live-interaction/',
    'solutions/by-function/ar-live-interaction/downloads/',
    'solutions/smb/',
    'solutions/smb/small-offices/',
    'success-stories/',
    'downloads/',
    'downloads/brochures/',
    'downloads/flyers/',
    'downloads/leaflets/',
    'downloads/manuals/',
    'blog/'
];

// Function to create a folder (empty object)
async function createFolder(folder) {
    try {
        await s3.putObject({
            Bucket: 'tongfangbms-assets', // Your bucket name
            Key: folder,
            Body: '',
        }).promise();
        console.log(`✅ Created folder: ${folder}`);
    } catch (err) {
        console.error(`❌ Error creating folder ${folder}:`, err);
    }
}

// Loop through all folders
async function createAllFolders() {
    for (let folder of folders) {
        await createFolder(folder);
    }
    console.log('🎯 All folders created!');
}

createAllFolders();



