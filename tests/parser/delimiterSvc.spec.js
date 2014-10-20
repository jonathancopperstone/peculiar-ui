(function() {

  describe('peculiar.parser.delimiterService', function() {

    var delimiterService;

    beforeEach(function() {
      module('peculiar.parser');
    });

    beforeEach(inject(['peculiar.parser.delimiterService', function(_delimiterService_) {
      delimiterService = _delimiterService_;
    }]));

    it('should return expected delimiter values', function() {
      expect(delimiterService.paragraph).toBe('>>');
      expect(delimiterService.row).toBe('purow:');
      expect(delimiterService.cell).toBe('//');
    });

  });

}());
