(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('TwitterCtrl', TwitterCtrl);

  /** @ngInject */
  function TwitterCtrl(TwitterService, $scope) {

    $scope.tweets = [];

    TwitterService.getRecentPosts('boateng')

      .then(function (result) {
        
        var tmp = [];

        result.data.statuses.forEach(function (item) {

          tmp.push({
            text: item.text,
            name: item.user.name
          });

        });

        $scope.tweets = tmp;
        console.info($scope.tweets);

      })
      .catch(function (result) {
        console.log('error');
      })

  }

})
();
