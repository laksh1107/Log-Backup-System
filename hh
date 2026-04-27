pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t log-backup .'
            }
        }

        stage('Run') {
            steps {
                sh '''
                docker run --rm \
                -e AWS_ACCESS_KEY=YOUR_KEY \
                -e AWS_SECRET_KEY=YOUR_SECRET \
                log-backup
                '''
            }
        }
    }
}