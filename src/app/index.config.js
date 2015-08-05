(function() {
  'use strict';

  angular
    .module('fancyFeed')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
