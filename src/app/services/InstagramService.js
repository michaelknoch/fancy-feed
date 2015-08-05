(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .Service('InstagramService', InstagramService);

  /** @ngInject */
  function InstagramService() {

    console.info('service call');

  }
})();
