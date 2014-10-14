(function() {

  describe('peculiar.section.tableDir', function() {

    var element,
        scope;

    beforeEach(function() {
      module('src/peculiar/section/tpls/table.tpl.html');
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
        '<pu-table>' +
          'my table' +
        '</pu-table>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element).toHaveClass('pu-section-block');
      expect(element).toHaveClass('pu-section-table');
    });

    it('should not have added a table (data = [])', function() {
      expect(element.isolateScope().data).toEqual([]);
    });

    it('should have added a table', function() {

      element = angular.element(
        '<pu-table>' +
          'purow:1//2purow:1//2' +
        '</pu-table>'
      );

      inject(['$compile', function($compile) {
        $compile(element)(scope);
        scope.$digest();
      }]);

      expect(element.isolateScope().data.length).toBe(2);
      
    });

  });

}());
