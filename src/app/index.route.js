(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('instagram', {
        url: '/instagram',
        templateUrl: 'app/main/main.html',
        controller: 'TwitterCtrl',
        controllerAs: 'tc'
      })
      .state('twitter', {
        url: '/twitter',
        templateUrl: 'app/instagram/instagram.html',
        controller: 'InstagramCtrl',
        controllerAs: 'ic'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
