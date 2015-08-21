(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

      .state('instagram', {
        url: '/instagram',
        templateUrl: 'app/states/instagram/instagram.html',
        controller: 'InstagramCtrl',
        controllerAs: 'ic'
      })
      .state('twitter', {
        url: '/twitter',
        templateUrl: 'app/states/twitter/twitter.html',
        controller: 'TwitterCtrl',
        controllerAs: 'tc'
      });

    $urlRouterProvider.otherwise('/instagram');
    $locationProvider.html5Mode(true);

  }

})();
