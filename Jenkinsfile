pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Build') {
            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install yarn
                    yarn install
                    yarn run cy:run
                '''
            }
        }
    }
}