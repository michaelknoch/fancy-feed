(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .service('TwitterService', TwitterService);

  /** @ngInject */
  function TwitterService($http) {

    return {
      getRecentPosts: function (tag) {
        return $http.get('http://api.donau2015.com/tweets/' + tag);
      }

    }
  }

})
();
