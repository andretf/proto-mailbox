var module = angular.module('mailbox', ['templates', 'ui.router']);

module.config(function ($stateProvider, $urlRouterProvider) {
  var mailboxState = {
    name: 'mailbox',
    url: '/messages',
    template: '<mailbox></mailbox>'
  };
  var messageState = {
    name: 'message',
    url: '/messages/:id',
    template: '<mailbox></mailbox>'
  };

  $stateProvider.state(messageState);
  $stateProvider.state(mailboxState);

  $urlRouterProvider.otherwise('/messages');

  //$locationProvider.html5Mode({ enabled: true, requireBase: false});
});

module.component('mailbox', {
  templateUrl: "mailbox/mailbox.html",
  controller: function ($http) {
    var vm = this;
    $http.get('../data/mailbox.json').then(function (response) {
      vm.messages = response.data.messages;
    });
  }
});

module.component('messageSummary', {
  bindings: {
    message: "="
  },
  templateUrl: "mailbox/message/summary.html"
});

module.component('message', {
  bindings: {
    message: "="
  },
  templateUrl: "mailbox/message/message.html",
  controller: function ($http, $stateParams) {
    var vm = this;
    $http.get('../data/mailbox.json', {cache: true}).then(function (response) {
      vm.message = response.data.messages.find(function (msg) {
        return msg.uid == $stateParams.id;
      });
    });
  }
});

