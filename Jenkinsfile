pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Build') {
            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install -g yarn
                    yarn install
                '''
            }
        }

        stage ('Test') {
            steps {
                sh '''
                    yarn cypress run
                '''
            }
        }
    }
}