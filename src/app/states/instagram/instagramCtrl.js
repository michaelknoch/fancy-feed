(function () {
  'use strict';

  angular
    .module('fancyFeed')
    .controller('InstagramCtrl', InstagramCtrl);

  /** @ngInject */
  function InstagramCtrl($timeout) {

    var feed = new Instafeed({
      get: 'tagged',
      tagName: 'donau2015',
      clientId: 'bc888d9b72154876aa0ace1a420a2991'
    });
    feed.run();
    console.info('yolo');

  }
})();
