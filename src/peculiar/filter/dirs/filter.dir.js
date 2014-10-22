(function(){
  'use strict';

  angular.module('peculiar.filter').directive('puFilter', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'src/peculiar/filter/tpls/filter.tpl.html',
      controller: 'peculiar.filter.filterController'
    };
  });

}());
