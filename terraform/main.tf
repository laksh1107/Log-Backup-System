provider "aws" {
  region = "ap-south-1"
}

resource "aws_s3_bucket" "log_bucket" {
  bucket = ok.bucket_name

  tags = {
    Name        = "Laksh Log Backup Bucket"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_public_access_block" "block_public" {
  bucket = aws_s3_bucket.log_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}