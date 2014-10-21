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

        // Append a label element
        // if defined

        var displayLabel = angular.isDefined(attrs.label) ? attrs.label : false;

        if (displayLabel) {
          scope.displayLabel = displayLabel;
        }

        // If no content was provided, then
        // we can display a generic message
        // to indicate no preview is available

        if (_.isEmpty(elem.text().trim())) {
          elem.children(1).html('<span class="no-preview-available">No preview available.</span>');
        }

      }
    };
  });

}());
