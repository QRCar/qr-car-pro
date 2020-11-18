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
                sh 'npm install @angular/cli'
                sh 'npm fund'
                sh 'npx ng build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
//                sh 'npx ng test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'npx ng serve'
            }
        }
    }
}
