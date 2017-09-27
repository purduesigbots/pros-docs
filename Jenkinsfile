node('lin64') {
    stage('Tools') {
      sh '''
         wget -nv https://github.com/spf13/hugo/releases/download/v0.19/hugo_0.19-64bit.deb
         sudo dpkg -i hugo_0.19-64bit.deb
         sudo apt-get install -y -f
         '''
    }
    stage('Build') {
      checkout scm
      sh '''
         bash -ic "nvm install --lts; nvm exec --lts node ./indexer.js"
         hugo
         tar -czvf pros-website.tar.gz -C ./public .
         '''
      archiveArtifacts 'pros-website.tar.gz'
      dir('./public') {
          stash name: 'pros-website', includes: '**'
      }
      env.GH_REF = sh returnStdout: true, script: 'echo `git remote get-url origin | sed \'s/.*[\\/:]\\(.*\\/.*\\).git/\\1/\'`@`git rev-parse --short HEAD`'
    }
    stage('Deploy') {
        deleteDir()
        git credentialsId: '280afe18-e491-4424-8f05-05c45b48a154', url: 'git@github.com:Purdue-ACM/pros-website.git'
        sh 'rm -rf *'
        unstash 'pros-website'
        sshagent(['280afe18-e491-4424-8f05-05c45b48a154']) {
            sh """
                git add .
                git config user.name Jenkins
                git config user.email jenkins@pros.cs.purdue.edu
                git config push.default matching
                echo Auto build for "${env.GH_REF}" | git commit --file -
                git push -u origin master
                """
          }
    }
}
