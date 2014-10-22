(function() {
  'use strict';

  angular.module('peculiar.filter').factory('peculiar.filter.filterService', [
    function() {

      var filterBy = {
        dev: true,
        product: false
      };

      return {

        // Bind object back,
        // so you can just use
        // this obj in the view

        filterBy: filterBy,

        // Set states accordingly

        setFilter: function(filterType) {
          if (filterType === 'dev') {
            filterBy.dev = true;
            filterBy.product = false;
          }
          else if (filterType === 'product') {
            filterBy.product = true;
            filterBy.dev = false;
          }
        }

      };

    }
  ]);

}());
