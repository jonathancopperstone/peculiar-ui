(function() {
  'use strict';

  angular.module('peculiar.filter').controller('peculiar.filter.filterController', [
    '$scope',
    'peculiar.filter.filterService',
    function($scope, filterService) {

      $scope.filterService = filterService;

    }
  ]);

}());
