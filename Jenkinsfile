pipeline {
  agent any


  tools { nodejs 'nodejs' }
stages {


    stage('Code Quality Check via SonarQube') {
        steps {
            script {
          def scannerHome = tool 'sonar-scanner'
          withSonarQubeEnv('sonarqube') {
            sh "${tool('sonar-scanner')}/bin/sonar-scanner \
                   -Dsonar.projectKey=jenkins-sonarqube-node \
                   -Dsonar.sources=. \
                   -Dsonar.css.node=. \
                   -Dsonar.host.url=http://sonarqube:9000 \
                   -Dsonar.login=admin \
                   -Dsonar.password=admin"
          }
            }
        }
    }


    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}
