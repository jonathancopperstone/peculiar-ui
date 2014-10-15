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
              'build/peculiar.css': 'src/styl/peculiar.styl'
            }
          }
        },

        html2js: {
          options: {
            module: 'peculiar.templates',
            singleModule: true
          },
          dist: {
            src: ['src/peculiar/**/**/*.tpl.html'],
            dest: 'src/tpls/templates.js'
          }
        },

        concat: {
          options: {
            sourceMap: true,
            sourceMapName: 'build/peculiar.source.map'
          },
          dist: {

            // Done manually for now as there
            // are no reliable grunt plugins
            // to manage angular dependencies,
            // and I do not want to manipulate
            // naming to reflect order

            src:  [
                    'src/tpls/templates.js',
                    'src/peculiar/parser/parser.js',
                    'src/peculiar/parser/svcs/delimiters.svc.js',
                    'src/peculiar/parser/svcs/parser.svc.js',
                    'src/peculiar/header/header.js',
                    'src/peculiar/header/dirs/header.dir.js',
                    'src/peculiar/section/section.js',
                    'src/peculiar/section/dirs/code.dir.js',
                    'src/peculiar/section/dirs/display.dir.js',
                    'src/peculiar/section/dirs/section.dir.js',
                    'src/peculiar/section/dirs/table.dir.js',
                    'src/peculiar/section/dirs/text.dir.js',
                    'src/peculiar/peculiar.js'
                  ]
            ,
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

        karma: {
          unit: {
            options: {
              basePath: '',
              frameworks: ['jasmine'],
              files: [

                'bower_components/angular/angular.min.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/lodash/dist/lodash.min.js',

                'src/peculiar/parser/parser.js',
                'src/peculiar/parser/svcs/delimiters.svc.js',
                'src/peculiar/parser/svcs/parser.svc.js',
                'src/peculiar/header/header.js',
                'src/peculiar/header/dirs/header.dir.js',
                'src/peculiar/section/section.js',
                'src/peculiar/section/dirs/code.dir.js',
                'src/peculiar/section/dirs/display.dir.js',
                'src/peculiar/section/dirs/section.dir.js',
                'src/peculiar/section/dirs/table.dir.js',
                'src/peculiar/section/dirs/text.dir.js',
                'src/peculiar/peculiar.js',

                'tests/**/*.js',

                'src/peculiar/**/*.html'
              ],
              preprocessors: {
                'src/peculiar/**/*.html': 'ng-html2js'
              },
              singleRun: true,
              reporters: ['progress'],
              browsers: ['PhantomJS']
            }
          }
        },

        jshint: {
          beforeconcat: ['src/peculiar/**/*.js'],
          afterconcat: ['build/peculiar.js']
        },

        watch: {
          stylus: {
            files: ['src/styl/*.styl', 'src/peculiar/**/**/**/*.styl'],
            tasks: ['stylus']
          },
          concat: {
            files: ['src/peculiar/**/**/*.js'],
            tasks: ['concat']
          }
        }

    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['stylus', 'html2js', 'karma', 'jshint:beforeconcat', 'concat', 'jshint:afterconcat', 'uglify']);
};
