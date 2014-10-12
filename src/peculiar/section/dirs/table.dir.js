(function(){
  'use strict'

  angular.module('peculiar.section').directive('puTable', [
    'peculiar.parser.parserService',
    function(parserService) {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/peculiar/section/tpls/table.tpl.html',
        scope: {},
        link: function(scope, elem) {

          scope.data = parserService.parseTable(elem.text());

        }
      }
  }]);
}());
