const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

const logDir = path.join(__dirname, "logs");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-south-1",
});

async function uploadFile(filePath, fileName) {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: process.env.S3_BUCKET || "my-log-backup-bucket",
    Key: fileName,
    Body: fileContent,
  };

  return s3.upload(params).promise();
}

async function backupLogs() {
  try {
    const files = fs.readdirSync(logDir);

    if (files.length === 0) {
      console.log("No logs found");
      return;
    }

    for (let file of files) {
      const filePath = path.join(logDir, file);
      console.log(`Uploading ${file}...`);

      await uploadFile(filePath, file);

      console.log(`${file} uploaded successfully`);
    }

    console.log("All logs backed up");
  } catch (err) {
    console.error("Backup error:", err.message);
  }
}

backupLogs();