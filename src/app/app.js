(function(){
  'use strict';

  var module = angular.module('mailbox', ['templates', 'ui.router']);

  module.config(function ($stateProvider, $urlRouterProvider) {
    var messageState = {
      name: 'message',
      url: '/messages/:id',
      template: '<message class="message-full" message="$ctrl.message"></message>'
    };

    $stateProvider.state(messageState);
    $urlRouterProvider.otherwise('/messages');
  });

})();
