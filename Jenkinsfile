pipeline {
    agent any
    tools {nodejs "node"}

        stage ('Test') {
            steps {
                sh 'export PATH=/usr/local/bin'
                sh 'npm --version'
                sh 'npm install'
                sh 'npx cypress run --browser chrome || true'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}