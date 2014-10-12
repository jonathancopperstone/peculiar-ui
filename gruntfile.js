module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-angular-builder');

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        stylus: {
          compile: {
            files: {
              'build/peculiar.css': 'src/styl/peculiar.styl'
            }
          }
        },

        'angular-builder': {
          options: {
            mainModule: 'peculiar',
            externalModules: 'hljs'
          },
          app: {
            src:  'src/peculiar/**/**/*.js',
            dest: 'build/peculiar.js'
          }
        },

        uglify: {
          minimise: {
            files: {
              'build/peculiar.min.js':
              ['build/peculiar.js']
            }
          }
        },

        watch: {
          stylus: {
            files: ['src/styl/*.styl', 'src/peculiar/**/**/**/*.styl'],
            tasks: ['stylus']
          },
          'angular-builder': {
            files: ['src/peculiar/**/**/*.js'],
            tasks: ['angular-builder']
          }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylus', 'angular-builder', 'uglify']);
};
