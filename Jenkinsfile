pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Build') {

            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install -g yarn
                '''
            }
        }
        stage ('Test') {
            steps {
                sh 'export PATH=/usr/local/bin'
                sh 'yarn install'
                sh 'yarn cypress run'
            }
        }
    }
}