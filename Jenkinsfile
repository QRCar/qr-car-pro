pipeline {
    agent {
        docker {
            image 'node:10' 
            args '-p 4200:4200' 
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm i @angular/cli'
                sh 'npm fund'
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
