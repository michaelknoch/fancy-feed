(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('InstagramCtrl', InstagramCtrl);

  /** @ngInject */
  function InstagramCtrl(InstagramService, $scope) {

    $scope.instagrams = [];

    InstagramService.getRecentImages('donau2015')

      .then(function (result) {
        $scope.instagrams = result.data;

        var tmp = [];

        result.data.data.forEach(function (item) {

          tmp.push({
            path: item.images.standard_resolution.url,
            name: item.user.full_name
          });

        });

        $scope.instagrams = tmp;
        console.info($scope.instagrams);

      })
      .catch(function (result) {
        console.log('error');
      })

  }
})();
