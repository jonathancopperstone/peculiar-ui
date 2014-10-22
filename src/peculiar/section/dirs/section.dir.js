(function(){
  'use strict';

  angular.module('peculiar.section').directive('puSection', [
    'peculiar.filter.filterService',
    function(filterService) {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/peculiar/section/tpls/section.tpl.html',
        link: function(scope, elem, attrs) {

            // Make the filter service
            // accessible to the template,
            // so if the filter directive
            // is added, everything is already
            // setup to handle filtering.
            scope.filterBy = filterService.filterBy;

            var sectionTitle = angular.isDefined(attrs.title) ? attrs.title : false;

            if (sectionTitle) {
              elem.prepend('<h2 class="pu-section-block pu-section-title">' + sectionTitle + '</h2>');
            }

        }
      };
    }
  ]);

}());
