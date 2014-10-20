(function() {
  'use strict';

  angular.module('peculiar-docs').run(['$state', function ($state) {
    $state.transitionTo('home');
  }]);

}());
