pipeline{
    agent any

    stages{
        stage("build"){
            steps{
                echo 'Building....'
                sh 'docker-compose down -v'
                sh 'docker-compose up --build -d'
            }
        }
    }
}
