(function(){
  'use strict';

  angular.module('peculiar.section').directive('puDisplay', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'src/peculiar/section/tpls/display.tpl.html',
      scope: {},
      link: function(scope, elem, attrs) {

        var displayLabel = angular.isDefined(attrs.label) ? attrs.label : false;

        if (displayLabel) {
          scope.displayLabel = displayLabel;
        }
      }
    };
  });

}());
