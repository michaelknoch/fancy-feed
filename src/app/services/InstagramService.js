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
        return $http.get('http://api.donau2015.com/instagrams/' + tag);
      }

    }

  }

})
();
