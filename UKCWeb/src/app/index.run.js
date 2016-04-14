(function() {
  'use strict';

  angular
    .module('ukcweb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
