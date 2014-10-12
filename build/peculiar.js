(function (module) {

  (function() {
    'use strict';

    }());

  (function() {
    'use strict';

    module.factory('peculiar.parser.delimiterService', function() {
        return {

          paragraph: '>>',
          row: 'purow:',
          cell: '//'

        };
    });

  }());

  (function() {
    'use strict';

    module.service('peculiar.parser.parserService', [
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
                htmlWithParagraphs += '<p>' + paragraph + '</p>';
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
                rows = text.split(delimiterService.row);

            _.each(rows, function(row) {

              // If we have a valid row value
              // we can now further parse this
              // and construct our cells

              if (row.trim()) {

                var cells = row.split(delimiterService.cell);

                // We need to clean up each cell
                // text with a trim

                _.each(cells, function(cell, index) {
                  cells[index] = cell.trim();
                });

                tableData.push(cells);
              }

            });

            return tableData;
          };

    }]);

  }());


}) (angular.module ('peculiar.parser', []));



(function (module) {

  (function() {
    'use strict';

    }());

  (function(){
    'use strict'

    module.directive('puHeader', [
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


}) (angular.module ('peculiar.header', []));



(function (module) {

  (function() {
    'use strict';

    }());

  (function(){
    'use strict'

    module.directive('puCode', function() {
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

    module.directive('puDisplay', function() {
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

    module.directive('puSection', function() {
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

    module.directive('puTable', [
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

    module.directive('puText', [
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


}) (angular.module ('peculiar.section', []));



(function (module) {

  (function() {
    'use strict';

    }());


}) (angular.module ('peculiar', ['peculiar.parser', 'peculiar.header', 'peculiar.section', 'hljs']));


