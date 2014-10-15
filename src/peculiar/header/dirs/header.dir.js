(function(){
  'use strict';

  angular.module('peculiar.header').directive('puHeader', [
    'peculiar.parser.parserService',
    function(parserService) {
      return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'src/peculiar/header/tpls/header.tpl.html',
        link: function(scope, elem, attrs) {

            var parsedHTML = "",
                headerTitle = angular.isDefined(attrs.title) ? attrs.title : false;

            if (headerTitle) {
              parsedHTML = '<h2 class="pu-header-title">' + headerTitle + '</h2>';
            }

            parsedHTML += parserService.parseParagraphs(elem.text());
            elem.html(parsedHTML);

        }
    };
  }]);

}());
