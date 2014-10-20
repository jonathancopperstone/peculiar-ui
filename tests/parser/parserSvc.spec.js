(function() {

  describe('peculiar.parser.parserService', function() {

    var parserService,
        parsedParagraphs,
        parsedTableData;

    beforeEach(function() {
      module('peculiar.parser');
    });

    beforeEach(inject(['peculiar.parser.parserService', function(_parserService_) {
      parserService = _parserService_;
    }]));


    describe('paragraph parser', function() {

      it('should parse text with delimiters, create paragraph(s) and return the HTML', function() {
        parsedParagraphs = parserService.parseParagraphs('>>1>>2');
        expect(parsedParagraphs).toBe('<p>1</p><p>2</p>');
      });

      it('should be able to parse text without delimiters, create paragraph(s) and return the HTML', function() {
        parsedParagraphs = parserService.parseParagraphs('just text');
        expect(parsedParagraphs).toBe('<p>just text</p>');
      });

      it('should be able to trim leading and trailing whitespace, create paragraph(s) and return the HTML', function() {
        parsedParagraphs = parserService.parseParagraphs('       just text    ');
        expect(parsedParagraphs).toBe('<p>just text</p>');
        parsedParagraphs = parserService.parseParagraphs('>>   1>>2    ');
        expect(parsedParagraphs).toBe('<p>1</p><p>2</p>');
      });

      it('should handle empty text by returning an empty string not an empty <p>', function() {
        parsedParagraphs = parserService.parseParagraphs('');
        expect(parsedParagraphs).toBe('');
      });

    });

    describe('table parser', function() {

      it('should parse text with delimiters, create multi-dimensional array representation of a table', function() {
        var tableText = 'purow:c1//c2//c3purow:c1//c2//c3';
        parsedTableData = parserService.parseTable(tableText);
        expect(parsedTableData.length).toBe(2);
        expect(parsedTableData[0].length).toBe(3);
        expect(parsedTableData[1].length).toBe(3);
      });

      it('should handle text without delimiters, returning []', function() {
        parsedTableData = parserService.parseTable('my text without any delimiters');
        expect(parsedTableData.length).toBe(0);
      });

      it('should return [] if only one row was found', function() {
        parsedTableData = parserService.parseTable('purow:c1//c2//c3');
        expect(parsedTableData.length).toBe(0);
      });

      it('should be able to trim leading and trailing whitespaces for cell data', function() {
        parsedTableData = parserService.parseTable('purow:c1//  c2//c3   purow:c1//c2//c3');
        expect(parsedTableData[0][1]).toBe('c2');
        expect(parsedTableData[0][2]).toBe('c3');
      });

      it('should make up the remaining cells if subsequent rows don\'t match up with the first row', function() {
        parsedTableData = parserService.parseTable('purow:c1//c2//c3purow://c1');
        expect(parsedTableData[1].length).toBe(3);
      });

    });

  });

}());
