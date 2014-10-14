angular.module('peculiar.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("peculiar/header/tpls/header.tpl.html",
    "<div class=\"pu-header\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/code.tpl.html",
    "<div class=\"pu-section-block pu-section-code\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/display.tpl.html",
    "<div class=\"pu-section-block pu-section-display\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/section.tpl.html",
    "<section class=\"pu-section\" data-ng-transclude>\n" +
    "</section>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/table.tpl.html",
    "<div class=\"pu-section-block pu-section-table\">\n" +
    "  <div style=\"display:none;\" data-ng-transclude></div>\n" +
    "  <table class=\"pu-table\" data-ng-if=\"data\">\n" +
    "    <tr class=\"pu-row\" data-ng-repeat=\"row in data\">\n" +
    "      <td class=\"pu-cell\" data-ng-repeat=\"cell in row\"> {{ cell }} </td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "</div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/text.tpl.html",
    "<div class=\"pu-section-block pu-section-text\" data-ng-transclude></div>\n" +
    "");
}]);

(function() {
  'use strict';

  angular.module('peculiar.parser', []);

}());

(function() {
  'use strict';

  angular.module('peculiar.parser').factory('peculiar.parser.delimiterService', function() {
      return {

        paragraph: '>>',
        row: 'purow:',
        cell: '//'

      };
  });

}());

(function() {
  'use strict';

  angular.module('peculiar.parser').service('peculiar.parser.parserService', [
    'peculiar.parser.delimiterService',
    function(delimiterService) {

        var thisService = this;

        // Given a text string,
        // this fn will parse the text
        // and create paragraphs using the delimiter
        // and return a string with the HTML
        // paragraphs within.

        this.parseParagraphs = function(text) {

          text = text.trim();

          // We parse the text and construct any
          // paragraphs delimited by the specified
          // delimiter

          var htmlWithParagraphs = "",
              paragraphs = text.split(delimiterService.paragraph);


          _.each(paragraphs, function(paragraph) {

            // Check we actually have
            // a valid paragraph, and if
            // so, append to elem.

            if (paragraph.trim()) {
              htmlWithParagraphs += '<p>' + paragraph.trim() + '</p>';
            }

          });

          return htmlWithParagraphs;
        };

        // Given the specified table markdown
        // and using the pre-defined delimiters
        // and return an multi-array representation
        // of the table

        this.parseTable = function(text) {

          text = text.trim();

          // Now we can parse the text
          // and construct the table rows

          var tableData = [],
              totalCellsInRow = 0,
              rows = text.split(delimiterService.row);

          _.each(rows, function(row, index) {

            // If we have a valid row value
            // we can now further parse this
            // and construct our cells

            if (row.trim()) {

              var cells = row.split(delimiterService.cell);

              // If it's the first row,
              // then we take that as the
              // definition for the number
              // of cells in a row

              if (index === 1) {
                totalCellsInRow = cells.length;
              }

              // Otherwise, make sure that all
              // following rows have the same
              // number of cells (add empty ones
              // if necessary)
              
              else {
                for (var i = 0; i < totalCellsInRow - cells.length; i++) {
                  cells.push('-');
                }
              }

              // We need to clean up each cell
              // text with a trim

              _.each(cells, function(cell, index) {
                cells[index] = cell.trim();
              });

              tableData.push(cells);
            }

          });

          // If only 1 row
          // or no valid data was provided
          // then return empty row.
          // The first row is assumed to
          // be the table header, so just
          // 1 row is an invalid table

          if (tableData.length < 2) {
            tableData = [];
          }

          return tableData;
        };

  }]);

}());

(function() {
  'use strict';

  angular.module('peculiar.header', []);

}());

(function(){
  'use strict'

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

(function() {
  'use strict';

  angular.module('peculiar.section', []);

}());

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

(function(){
  'use strict'

  angular.module('peculiar.section').directive('puDisplay', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'src/peculiar/section/tpls/display.tpl.html'
    }
  });

}());

(function(){
  'use strict'

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

(function(){
  'use strict'

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

(function() {
  'use strict';

  angular.module('peculiar', [

    // Peculiar modules

    'peculiar.templates',
    'peculiar.parser',
    'peculiar.header',
    'peculiar.section',

    // Third party modules

    'hljs'

  ]);

}());

//# sourceMappingURL=peculiar.source.map