module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        stylus: {
          compile: {
            files: {
              'build/<%= pkg.name %>-<%= pkg.version %>.css': 'src/styl/peculiar.styl'
            }
          }
        },

        concat: {
          options: {
            sourceMap: true,
            sourceMapName: 'build/sourcemap.map'
          },
          dist: {
            src: ['src/peculiar/**/**/*.js'],
            dest: 'build/<%= pkg.name %>-<%= pkg.version %>.js'
          }
        },

        uglify: {
          minimise: {
            files: {
              'build/<%= pkg.name %>-<%= pkg.version %>.min.js':
              ['build/<%= pkg.name %>-<%= pkg.version %>.js']
            }
          }
        },

        watch: {
          stylus: {
            files: ['src/styl/*.styl', 'src/peculiar/**/**/*.styl'],
            tasks: ['stylus']
          },
          concat: {
            files: ['src/peculiar/**/**/*.js'],
            tasks: ['concat']
          }
        }
    });

    grunt.registerTask('default', ['watch']);
};
