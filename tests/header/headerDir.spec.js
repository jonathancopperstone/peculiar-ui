(function() {

  describe('peculiar.header.headerDir', function() {

    var element,
        scope;

    beforeEach(function() {
      module('src/peculiar/header/tpls/header.tpl.html');
      module('peculiar.header');
      module('peculiar.parser');
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
        '<pu-header>' +
          'my header' +
        '</pu-header>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element).toHaveClass('pu-header');
    });

  });

}());
