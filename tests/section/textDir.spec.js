(function() {

  describe('peculiar.section.textDir', function() {

    var element,
        scope,
        parserService;

    beforeEach(function() {
      module('src/peculiar/section/tpls/text.tpl.html');
      module('peculiar.section');
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
        '<pu-text>' +
          'my text' +
        '</pu-text>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element).toHaveClass('pu-section-block');
      expect(element).toHaveClass('pu-section-text');
    });

  });

}());
