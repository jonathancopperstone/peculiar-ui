(function() {
  'use strict';

  angular.module('peculiar.parser').factory('peculiar.parser.delimiterService', function() {
      return {

        paragraph: '>>',
        row: 'purow:',
        cell: '//'

      };
  });

}());
