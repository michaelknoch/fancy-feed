(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('InstagramCtrl', InstagramCtrl);

  /** @ngInject */
  function InstagramCtrl(InstagramService, $scope, $state) {

    $scope.instagrams = [];

    InstagramService.getRecentImages('donau2015')

      .then(function (result) {
        var tmp = [];

        result.data.data.forEach(function (item) {

          tmp.push({
            path: item.images.standard_resolution.url,
            name: item.user.full_name,
            tags: item.tags
          });

        });


        $scope.instagrams = tmp;
        console.info($scope.instagrams);

        var loop_handle = setTimeout(function () {
          $state.go('instagram', {}, {reload: true});
        }, 600000);

      })
      .catch(function (result) {
        console.log('error');
      })

  }
})();
