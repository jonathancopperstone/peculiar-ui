module.exports = function(config){
    config.set({
      basePath: '../',
      autoWatch: false,
      files: [
        'bower_components/angular/angular.js',
        'src/peculiar/**/**/*.js',
        'tests/**/*.js'
      ]
    });
};
