(function(){
  'use strict';

  angular.module('peculiar.section').directive('puSection', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'src/peculiar/section/tpls/section.tpl.html',
      link: function(scope, elem, attrs) {

          var sectionTitle = angular.isDefined(attrs.title) ? attrs.title : false;

          if (sectionTitle) {
            elem.prepend('<h2 class="pu-section-block pu-section-title">' + sectionTitle + '</h2>');
          }

      }
    };
  });

}());
