pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 4200:4200' 
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install -g @angular/cli'
                sh 'ng build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'ng test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'ng serve'
            }
        }
    }
}
