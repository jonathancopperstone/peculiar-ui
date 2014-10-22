(function() {

  describe('peculiar.section.sectionDir', function() {

    var element,
        scope;

    beforeEach(function() {
      module('src/peculiar/section/tpls/section.tpl.html');
      module('peculiar.filter');
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
        '<pu-section>' +
          'my section' +
        '</pu-section>'
      );

      scope = $rootScope;
      $compile(element)(scope);
      scope.$digest();

    }]));

    it('should add correct classes', function() {
      expect(element[0]).not.toBeNull();
      expect(element[0].querySelectorAll('h2').length).toBe(0);
      expect(element).toHaveClass('pu-section');
    });

    describe('h2 attribute', function() {

      beforeEach(inject(['$rootScope','$compile', function($rootScope, $compile) {

        element = angular.element(
          '<pu-section title=\'section title\'>' +
            'my section' +
          '</pu-section>'
        );

        scope = $rootScope;
        $compile(element)(scope);
        scope.$digest();

      }]));

      it('should return html', function() {
        expect(element[0]).not.toBeNull();
      });

      it('should have added an h2 tag', function() {
        var title = element[0].querySelectorAll('h2');
        expect(title.length).toBe(1);
      });

      it('should have added an h2 tag with correct classes and text', function() {
        title = angular.element(element[0].querySelectorAll('h2')[0])
        expect(title).toHaveClass('pu-section-title');
        expect(title).toHaveClass('pu-section-block');
        expect(title.text()).toBe('section title');
      });
    });

  });

}());
