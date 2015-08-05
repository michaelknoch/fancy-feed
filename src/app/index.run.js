(function() {
  'use strict';

  angular
    .module('fancyFeed')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
