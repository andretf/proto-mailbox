(function () {
  'use strict';

  var module = angular.module('mailbox', ['templates', 'ui.router']);

  module.config(function ($stateProvider, $urlRouterProvider) {
    var messageState = {
      name: 'message',
      url: '/messages/:id',
      template: '<message class="message-full" message="$ctrl.message" ng-show="$ctrl.message"></message>'
    };
    var messagesState = {
      name: 'messages',
      url: '/messages',
      template: '<message class="message-full" message="$ctrl.message" ng-show="$ctrl.message"></message>'
    };

    $stateProvider.state(messageState);
    $stateProvider.state(messagesState);
    $urlRouterProvider.otherwise('/messages');
  });

})();
