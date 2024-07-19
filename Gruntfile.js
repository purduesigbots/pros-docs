module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      build: {
        src: "src/<%= pkg.name %>.js",
        dest: "build/<%= pkg.name %>.min.js",
      },
    },
    shell: {
      sphinx: {
        // Need to clean first because sphinx doesn't do incremental builds with
        // static files
        command: "ls -la && rm -rf ./build && sphinx-build ./home/ ./build/",
        options: {
          stdout: true,
        },
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ["build/_static/githubupdate.php"],
            dest: "build/",
          },
        ],
      },
    },
    watch: {
      home: {
        files: "home/**/*",
        tasks: ["shell:sphinx"],
        options: {
          spawn: false,
          debounceDelay: 500,
        },
      },
      livereload: {
        options: { livereload: true },
        files: ["build/**/*"],
      },
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: "./build",
          hostname: "0.0.0.0",
          protocol: "http",
          livereload: true,
          open: true,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  // Default task(s).
  grunt.registerTask("default", ["shell:sphinx"]);
  grunt.registerTask("serve", ["connect", "watch"]);
};
