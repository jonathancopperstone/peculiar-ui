(function() {

  describe('peculiar.section.messagingService', function() {

    var delimiterService;

    beforeEach(function() {
      module('peculiar.section');
    });

    beforeEach(inject(['peculiar.section.messagingService', function(_messagingService_) {
      messagingService = _messagingService_;
    }]));

    it('should return expected delimiter values', function() {
      expect(messagingService.noPreview).toBe('No preview available.');
    });

  });

}());
