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

        var tmp = [{
          path: './assets/images/donau2015.jpg',
          name: '#donau2015',
          description: 'tag your instagram images with our hashtag'
        }];

        result.data.data.forEach(function (item) {

          tmp.push({
            path: item.images.standard_resolution.url,
            name: item.user.full_name,
            tags: item.tags
          });
        });
        
        $scope.instagrams = $scope.instagrams.concat(tmp);

        console.info($scope.instagrams);

        var loop_handle = setTimeout(function () {
          $state.go('instagram', {}, {reload: true});
          console.info('state reload');
        }, 600000, false);

      })
      .catch(function (result) {
        console.log('error');
      })

  }
})();
