stage('Build') {
  node('linux') {
    stage('Clean') {
      sh '''
         git init
         git clean -x -d -f
         '''
    }
    stage('Tools') {
      sh '''
         wget -nv https://github.com/spf13/hugo/releases/download/v0.19/hugo_0.19-64bit.deb
         sudo dpkg -i hugo_0.19-64bit.deb
         sudo apt-get install -y -f
         '''
      tool name: 'NodeJS-8', type: 'nodejs'
    }
    checkout scm
    sh '''
       node indexer.js
       hugo
       '''
    zip archive: true, dir: 'public', glob: '', zipFile: 'pros-website.zip'
    env.GH_REF = sh returnStdout: true, script: 'echo `git remote get-url origin | sed \'s/.*[\\/:]\\(.*\\/.*\\).git/\\1/\'`@`git rev-parse HEAD | grep -o "^......."`'
  }
}
doDeploy()
