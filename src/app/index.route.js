(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('instagram', {
        url: '/',
        templateUrl: 'app/states/instagram/instagram.html',
        controller: 'InstagramCtrl',
        controllerAs: 'ic'
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  }

})();
