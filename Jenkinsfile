pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Build') {

            environment {
                // https://github.com/cypress-io/cypress/issues/2821#issuecomment-444109124
                HOME = "${pwd()}/cache"
                CYPRESS_CACHE_FOLDER = "${pwd()}/cache"
            }

            steps {
                sh '''
                    export PATH=/usr/local/bin
                    yarn install
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