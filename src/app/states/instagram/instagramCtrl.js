(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('InstagramCtrl', InstagramCtrl);

  /** @ngInject */
  function InstagramCtrl(InstagramService) {


    InstagramService.getRecentImages('donau2015')

      .then(function (result) {
        console.info(result.data);
      })
      .catch(function (result) {
        console.log('error');
      })

  }
})();
