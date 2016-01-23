module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: './build/',
      reactifyCopy: './build/src/'
    },
    copy: {
      main: {
        files: [
          /*{
            expand: true,
            dest: './build/',
            cwd: './src/',
            src: ['server.js']
          },*/
          {
            expand: true,
            dest: './build/app/lib/react/',
            cwd: './node_modules/react/dist/',
            src: ['*.js']
          },
          {
            expand: true,
            dest: './build/app/lib/react-dom/',
            cwd: './node_modules/react-dom/dist/',
            src: ['*.js']
          }
        ]
      },
      reactifyCopy: {
        files: [
          {
            expand: true,
            dest: './build/',
            cwd: './build/src/',
            src: '*.js'
          },
          {
            expand: true,
            dest: './build/app',
            cwd: './build/src/app',
            src: './js/**/*.js'
          }
        ]
      }
    },
    browserify: {
      dist: {
        options: {
          debug: true,
          transform: [
            ['babelify', {'presets': ['es2015', 'react']}, {'node': true}],
          ]
        },
        files: [
          {
            expand: true,
            cwd: './src/',
            src: ['./**/*.jsx', './**/*.js', './server.js'],
            dest: './build/'
          }
        ]
      }
    },
    reactify: {
      'build': ['./src/**/*.jsx', './src/**/*.js']
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: './build/server.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['./src/**/*.jsx', './src/**/*.js'],
        tasks: 'browserify'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-reactify');

  // Register tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['clean:all', 'copy:main', 'browserify']);
  grunt.registerTask('reactifyCopy', ['copy:reactifyCopy', 'clean:reactifyCopy']);


};