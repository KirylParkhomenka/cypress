pipeline {
    agent any
    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

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
                sh 'yarn cypress run'
            }
        }
    }
}