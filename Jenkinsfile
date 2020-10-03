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