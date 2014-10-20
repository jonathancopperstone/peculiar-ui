module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        stylus: {
          compile: {
            files: {
              'dist/peculiar-docs.css': 'src/styls/docs.styl'
            }
          }
        },

        concat: {
          options: {
            sourceMap: true,
            sourceMapName: 'dist/peculiar-docs.source.map'
          },
          dist: {

            // Done manually for now as there
            // are no reliable grunt plugins
            // to manage angular dependencies,
            // and I do not want to manipulate
            // naming to reflect order

            src:  [

                    'src/docs/docs.js',
                    'src/docs/config/docsConfig.js',
                    'src/docs/config/docsRun.js'
                  ]
            ,
            dest: 'dist/peculiar-docs.js'
          }
        },

        uglify: {
          minimise: {
            files: {
              'dist/peculiar-docs.min.js':
              ['dist/peculiar-docs.js']
            }
          }
        },

        jshint: {
          beforeconcat: ['src/docs/**/*.js'],
          afterconcat: ['dist/peculiar-docs.js']
        },

        watch: {
          stylus: {
            files: ['src/styls/*.styl'],
            tasks: ['stylus']
          },
          concat: {
            files: ['src/docs/**/*.js'],
            tasks: ['concat']
          }
        }

    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylus', 'jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify']);
};
