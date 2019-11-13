pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Build') {

            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install
                '''
            }
        }
        stage ('Test') {
            steps {
                sh 'npm run cy:run'
            }
        }
    }
}