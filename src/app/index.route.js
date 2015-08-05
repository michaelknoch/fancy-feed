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
        templateUrl: 'app/states/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('instagram', {
        url: '/instagram',
        templateUrl: 'app/states/main/main.html',
        controller: 'InstagramCtrl',
        controllerAs: 'ic'
      })
      .state('twitter', {
        url: '/twitter',
        templateUrl: 'app/states/instagram/instagram.html',
        controller: 'TwitterCtrl',
        controllerAs: 'tc'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
