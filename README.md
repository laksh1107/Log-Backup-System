# Log Backup System (DevOps + AWS + Terraform)

## Overview

The Log Backup System is a DevOps-focused application that demonstrates automated log management and cloud storage using AWS services and modern engineering practices.

The application provides a web-based dashboard to view logs, trigger backup operations, and upload log files to an AWS S3 bucket. Infrastructure provisioning is handled using Terraform, and the application is containerized using Docker with CI/CD support via Jenkins.

---

## Architecture

Client (Browser UI)
→ Node.js Express Server
→ Local Log Storage
→ AWS S3 (Cloud Storage)
→ Infrastructure Provisioned via Terraform
→ CI/CD Pipeline via Jenkins

---

## Features

* Web dashboard for monitoring system health
* View available log files
* Trigger manual backup via UI
* Upload logs to AWS S3
* Containerized deployment using Docker
* Infrastructure as Code using Terraform
* CI/CD pipeline using Jenkins

---

## Tech Stack

* Backend: Node.js (Express)
* Frontend: HTML, CSS, JavaScript
* Cloud: AWS S3
* Infrastructure: Terraform
* Containerization: Docker
* CI/CD: Jenkins

---

## Project Structure

log-backup-system/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── logs/
│   └── sample.log
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
│
├── server.js
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── README.md
└── .gitignore

---

## Setup Instructions

### 1. Clone Repository

git clone https://github.com/laksh1107/Log-Backup-System

cd log-backup-system

---

### 2. Install Dependencies

npm install

---

### 3. Run Application

npm start

Open in browser:
http://localhost:3000

---

## Docker Setup

### Build Image

docker build -t log-backup .

### Run Container

docker run -p 3000:3000 
-e AWS_ACCESS_KEY=<your-access-key> 
-e AWS_SECRET_KEY=<your-secret-key> 
-e S3_BUCKET=<your-s3-bucket-name> 
log-backup

---

## Environment Variables

AWS_ACCESS_KEY    Your AWS access key
AWS_SECRET_KEY    Your AWS secret key
S3_BUCKET         Existing S3 bucket name

---

## Terraform Setup (AWS S3)

### Initialize Terraform

cd terraform
terraform init

### Apply Configuration

terraform apply

This will create an S3 bucket that can be used by the application.

---

## Jenkins Pipeline

The included Jenkinsfile performs the following:

* Clone repository from GitHub
* Install dependencies
* Build Docker image
* Run containerized application

---

## API Endpoints

GET /health
Returns system status

GET /logs
Returns list of available log files

POST /backup
Triggers log upload to AWS S3

---

## Security Note

AWS credentials are not stored in the repository.
They must be provided via environment variables or IAM roles.

---

## Future Enhancements

* Automated scheduling using cron jobs
* Integration with AWS CloudWatch
* Deployment on AWS EC2 or ECS
* Secure secret management using IAM roles
* Blue-Green deployment strategy

---

## Author

Lakshya Jain

---

## License

This project is intended for educational and demonstration purposes.
