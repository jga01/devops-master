/* Requires the Docker Pipeline plugin */
pipeline {
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'mv dist/* /var/www/my-app'
            }
        }
    }
}
