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
                sh 'npm install'
                sh 'npx cypress run --browser chrome || true'
                sh 'npm run junit-merge'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}