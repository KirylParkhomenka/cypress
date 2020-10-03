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
                    npm install yarn
                    yarn install
                    yarn cypress run -b chrome || true
                    yarn run junit-merge
                '''
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}