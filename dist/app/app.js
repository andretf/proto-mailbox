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

(function() {
  'use strict';

  var module = angular.module('mailbox');

  module.component('messageList', {
    templateUrl: "message-list/message-list.html",
    controller: messageListController
  });

  function messageListController($location, $stateParams, $rootScope, MailboxService) {
    var vm = this;
    vm.deleteMessage = deleteMessage;
    vm.messages = [];

    MailboxService.all(function(messages){
      messages.map(function(msg){
        msg.read = false;
        msg.selected = false;

        return msg;
      });
      vm.messages = messages;

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams){
          var message = vm.messages.find(function(msg){
            return msg.uid == toParams.id;
          });

          if (message) {
            selectMessage(message);
          }
          else {
            updateState();
          }
        });
    });

    // private

    function deleteMessage(message){
      // temporarily compatibility way without have to use
      // vendor lib, babel or polyfill to Array.findIndex.
      // It creates new array without current deleted message
      vm.messages = vm.messages.filter(function(msg){
        return msg.uid !== message.uid;
      });
      updateState();
    }

    function selectMessage(message) {
      if (!message) return;

      vm.messages.forEach(function(msg){
        msg.selected = false;
      });

      message.read = true;
      message.selected = true;
    }

    function updateState(){
      if (angular.isArray(vm.messages)) {
        var firstId = vm.messages[0].uid;
        $location.path('#/messages/' + firstId);
      }
      else {
        $location.path('#/messages');
      }
    }
  }

})();
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
(function(){
  'use strict';

  var module = angular.module('mailbox');

  module.service('MailboxService', mailboxService);

  function mailboxService($http){
    function all(callback) {
      $http.get('data/mailbox.json').then(function (response) {
        callback(response.data.messages);
      });
    }

    function get(id, callback) {
      $http.get('data/mailbox.json').then(function (response) {
        var message = response.data.messages.find(function (msg) {
          return msg.uid == id;
        });
        callback(message);
      });
    }

    return {
      all: all,
      get: get
    };
  }
})();
