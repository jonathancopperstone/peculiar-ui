(function() {
  'use strict';

  angular.module('peculiar-docs', [
    'peculiar',
    'ui.router'
  ]);
}());

(function() {
  'use strict';

  angular.module('peculiar-docs').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

      //$locationProvider.html5Mode(true);

      //$urlRouterProvider.otherwise("/state1");
      $stateProvider

        .state('home', { url: "/", templateUrl: "src/views/home/home.tpl.html"})

        .state('docs', {
          url: "/docs",
          templateUrl: "src/views/docs/docs.tpl.html"
        })
        .state('docs.getting-started', {
          url: "/getting-started",
          templateUrl: "src/views/docs/getting-started.tpl.html"
        })
        .state('docs.how-it-works', {
          url: "/how-it-works",
          templateUrl: "src/views/docs/how-it-works.tpl.html"
        })
        .state('docs.changelog', {
          url: "/changelog",
          templateUrl: "src/views/docs/changelog.tpl.html"
        })
        .state('docs.scaffolding', {
          url: "/scaffolding",
          templateUrl: "src/views/docs/scaffolding.tpl.html"
        })
        .state('docs.navigation', {
          url: "/navigation",
          templateUrl: "src/views/docs/navigation.tpl.html"
        })
        .state('docs.filter', {
          url: "/filter",
          templateUrl: "src/views/docs/filter.tpl.html"
        })
        .state('docs.header', {
          url: "/header",
          templateUrl: "src/views/docs/header.tpl.html"
        })
        .state('docs.sections', {
          url: "/sections",
          templateUrl: "src/views/docs/sections.tpl.html"
        });

    }]);
}());

(function() {
  'use strict';

  angular.module('peculiar-docs').run(['$state', function ($state) {
    $state.transitionTo('home');
  }]);

}());

//# sourceMappingURL=peculiar-docs.source.map