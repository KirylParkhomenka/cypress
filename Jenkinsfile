pipeline {
    agent any
    tools {nodejs "node"}

    stages {
        stage ('Test') {
            steps {
                sh '''
                    export PATH=/usr/local/bin
                    npm install -g yarn
                    yarn install
                    yarn cypress run --b chrome
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