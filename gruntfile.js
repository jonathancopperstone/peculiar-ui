module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');

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
            // naming to reflect this order

            src:  [
                    'src/tpls/templates.js',
                    'src/parser/parser.js',
                    'src/parser/svcs/delimiters.svc.js',
                    'src/parser/svcs/parser.svc.js',
                    'src/header/header.js',
                    'src/header/dirs/header.dir.js',
                    'src/section/section.js',
                    'src/section/dirs/code.dir.js',
                    'src/section/dirs/display.dir.js',
                    'src/section/dirs/section.dir.js',
                    'src/section/dirs/table.dir.js',
                    'src/section/dirs/text.dir.js',
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
    grunt.registerTask('build', [
      'stylus',
      'html2js',
      'concat',
      'uglify'
    ]);
};
