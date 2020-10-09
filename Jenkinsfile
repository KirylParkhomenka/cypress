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
                sh 'export PATH=/usr/local/bin'
                sh 'npm install -g yarn'
                sh 'yarn installe'
                sh 'yarn cypress run -b chrome || true'
                sh 'yarn run junit-merge'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}