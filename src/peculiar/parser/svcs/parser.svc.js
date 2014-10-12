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
