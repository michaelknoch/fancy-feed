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

        var tmp = [];

        result.data.data.forEach(function (item) {

          tmp.push({
            path: item.images.standard_resolution.url,
            name: item.user.full_name
          });

        });

        $scope.instagrams = tmp;

      })
      .catch(function (result) {
        console.log('error');
      })

  }
})();
