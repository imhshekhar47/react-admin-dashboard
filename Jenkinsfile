pipeline {
    agent { label 'docker-jenkins-slave'}
    
    environment {
        IMAGE_NAME = 'imhshekhar47/admin-dashboard'
    }
    
    stages {
        stage("checkout") {
            steps {
                git branch: 'main', url: 'https://github.com/imhshekhar47/react-admin-dashboard.git'
            }
        }
        
        stage("image") {
            steps {
                container("dind") {
                    sh 'docker build -t "${IMAGE_NAME}:latest" .'
                }
            }
        }
        
        stage("deploy") {
            steps {
                script {
                    kubernetesDeploy(configs: "deployment.yaml", kubeconfigId: "kubeconfig")
                }
            }
        }
    }
}