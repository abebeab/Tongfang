# -----------------------------
# CONFIGURATION
# -----------------------------
$R2Profile = "r2"
$R2Bucket = "your-r2-bucket-name"

# Folders to upload
$folders = @(
    "C:\Users\Admin\Documents\Website\Tongfangbms\tongfangbms\content\dam\hikvision",
    "C:\Users\Admin\Documents\Website\Tongfangbms\tongfangbms\etc\clientlibs\it\resources\images",
    "C:\Users\Admin\Documents\Website\Tongfangbms\tongfangbms\etc\clientlibs\it\resources\icons"
)

# Allowed file types
$extensions = @("*.png","*.jpg","*.jpeg","*.mp4","*.pdf")

# -----------------------------
# UPLOAD LOOP
# -----------------------------
foreach ($folder in $folders) {
    foreach ($ext in $extensions) {
        Write-Host "Uploading $ext from $folder ..."
        aws s3 sync $folder s3://$R2Bucket/$(Split-Path $folder -Leaf) --exclude "*" --include $ext --profile $R2Profile
    }
}

Write-Host "All media files uploaded to R2 successfully!"
