(function() {

  describe('peculiar.filter.filterService', function() {

    var filterService,
        filterBy;

    beforeEach(function() {
      module('peculiar.filter');
    });

    beforeEach(inject(function ($injector) {
     filterService = $injector.get('peculiar.filter.filterService');
    }));

    it('should default with dev set to true', function() {
      expect(filterService.filterBy.dev).toBe(true);
      expect(filterService.filterBy.product).toBe(false);
    });

    it('should set product to true, and dev to false', function() {
      filterService.setFilter('product');
      expect(filterService.filterBy.dev).toBe(false);
      expect(filterService.filterBy.product).toBe(true);
    });

    it('should set product to false, and dev to true', function() {
      filterService.setFilter('dev');
      expect(filterService.filterBy.dev).toBe(true);
      expect(filterService.filterBy.product).toBe(false);
    });

  });

}());
