pipeline {
  agent any

  environment {
    IMAGE_NAME = "demo-app"
    TAG = "${BUILD_NUMBER}"
  }

  stages {

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$TAG .'
      }
    }

    stage('Stop Old Container') {
      steps {
        sh 'docker rm -f demo-container || true'
      }
    }

    stage('Run Container') {
      steps {
        sh '''
        docker run -d -p 3000:3000 --name demo-container $IMAGE_NAME:$TAG
        '''
      }
    }

  }
}
