(function() {
  'use strict';

  var module = angular.module('mailbox');

  module.component('messageList', {
    templateUrl: "message-list/message-list.html",
    controller: messageListController
  });

  function messageListController($location, $rootScope, MailboxService) {
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

      if (message.selected){
        updateState();
      }
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
      if (angular.isArray(vm.messages) && vm.messages.length) {
        var firstId = vm.messages[0].uid;
        $location.path('messages/' + firstId);
      }
      else {
        $location.path('messages');
      }
    }
  }

})();