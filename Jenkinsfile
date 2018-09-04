node("linux") {
	stage('Dependencies') {
		checkout scm
		copyArtifacts filter: 'pros_cli_v5*.whl', fingerprintArtifacts: true, flatten: true, projectName: 'PROS/purduesigbots/pros-cli3/master'
		sh 'vex --python python3.6 -mr jenkins ./scripts/build.sh'
		archiveArtifacts 'pros-docs.tar.gz'
	}
}
