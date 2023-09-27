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
                sh 'mkdir -p www/my-app'
                sh 'rm -r www/my-app/devops/*'
                sh 'mv dist/* www/my-app'
            }
        }
    }
}
