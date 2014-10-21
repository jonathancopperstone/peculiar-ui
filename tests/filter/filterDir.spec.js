(function() {

  describe('peculiar.filter.filterDir', function() {

    var element,
        scope;

    beforeEach(function() {
      module('src/peculiar/filter/tpls/filter.tpl.html');
      module('peculiar.filter');
    });

    beforeEach(function() {
      this.addMatchers({
        toHaveClass: function(className) {
          return this.actual.hasClass(className);
        }
      });
    });

    beforeEach(inject(['$rootScope','$compile', function($rootScope, $compile) {

      element = angular.element(
        '<pu-filter>' +
        '</pu-filter>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element).toHaveClass('pu-filter-toggle');
    });

  });

}());
