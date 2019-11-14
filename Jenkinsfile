pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Setup') {
            steps {
                dir ('results') {
                    deleteDir()
                }
            }
        }

        stage ('Test') {
            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install -g yarn
                    yarn install
                    yarn cypress run -b chrome
                '''
            }
        }
    }

    post {
        always {
            sh 'yarn run junit-merge'
            junit 'results/cypress-report.xml'
        }
    }
}