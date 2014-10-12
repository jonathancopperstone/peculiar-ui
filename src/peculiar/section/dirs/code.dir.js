(function(){
  'use strict'

  angular.module('peculiar.section').directive('puCode', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'src/peculiar/section/tpls/code.tpl.html'
    }
  });

}());
