(function() {

  describe('peculiar.section.codeDir', function() {

    var element,
        scope;

    beforeEach(function() {
      module('src/peculiar/section/tpls/code.tpl.html');
      module('peculiar.section');
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
        '<pu-code hljs>' +
          'my code snippet' +
        '</pu-code>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element).toHaveClass('pu-section-block');
      expect(element).toHaveClass('pu-section-code');
    });

  });

}());
