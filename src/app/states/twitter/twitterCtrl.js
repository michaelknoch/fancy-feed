(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('TwitterCtrl', TwitterCtrl);

  /** @ngInject */
  function TwitterCtrl(TwitterService) {

    TwitterService.getRecentPosts('donau2015')

      .then(function (result) {
        console.info(result.data);
      })
      .catch(function (result) {
        console.log('error');
      })

  }

})
();
