(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .service('InstagramService', InstagramService);

  /** @ngInject */
  function InstagramService($http) {

    return {
      getRecentImages: function (tag) {
        if (!tag) {
          console.log('tag should be defined');
          return;
        }
        return $http.get('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=201907240.bc888d9.d5e3829a59c449deb4aa5620ac29bc70')
      }

    }

  }

})
();
