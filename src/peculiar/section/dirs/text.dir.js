(function(){
  'use strict';

  angular.module('peculiar.section').directive('puText', [
    'peculiar.parser.parserService',
    function(parserService) {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/peculiar/section/tpls/text.tpl.html',
        link: function(scope, elem, attrs) {

          var parsedText = parserService.parseParagraphs(elem.text(), '>>');
          elem.html(parsedText);
        }
      };
  }]);

}());
