pipeline {
    agent any

    environment {
        APP_NAME = "log-backup-app"
        CONTAINER_NAME = "log-backup-container"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/laksh1107/auto-qa-reporter'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f $CONTAINER_NAME || true'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name $CONTAINER_NAME \
                -p 3000:3000 \
                -e AWS_ACCESS_KEY=dummy \
                -e AWS_SECRET_KEY=dummy \
                -e S3_BUCKET=dummy-bucket \
                $APP_NAME
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}