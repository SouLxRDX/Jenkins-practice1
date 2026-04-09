pipeline {
    agent any

    environment {
        APP_NAME = 'jenkins-practice'
        BUILD_DIR = 'build'
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Checking out branch: ${env.GIT_BRANCH}"
                echo "Build number: ${env.BUILD_NUMBER}"
                sh 'ls -la'
            }
        }

        stage('Build') {
            steps {
                echo 'Simulating build step...'
                sh '''
                    mkdir -p build
                    echo "Build artifact v${BUILD_NUMBER}" > build/output.txt
                    cat build/output.txt
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh '''
                    echo "Test 1: Checking build artifact exists..."
                    test -f build/output.txt && echo "PASS" || echo "FAIL"

                    echo "Test 2: Checking content..."
                    grep "Build artifact" build/output.txt && echo "PASS" || echo "FAIL"
                '''
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "SUCCESS: ${APP_NAME} build #${BUILD_NUMBER} passed all stages."
        }
        failure {
            echo "FAILURE: Build #${BUILD_NUMBER} failed. Check the logs above."
        }
        always {
            echo 'Pipeline complete. Cleaning up workspace...'
            cleanWs()
        }
    }
}
