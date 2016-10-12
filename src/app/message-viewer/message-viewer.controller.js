(function () {
  'use strict';

  var module = angular.module('mailbox');

  module.component('message', {
    bindings: {
      message: "="
    },
    templateUrl: "message-viewer/message-viewer.html",
    controller: messageController
  });

  function messageController($stateParams, MailboxService) {
    var vm = this;

    MailboxService.get($stateParams.id, function (message) {
      vm.message = message;
    });
  }

})();