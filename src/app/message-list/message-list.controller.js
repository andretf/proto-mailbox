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
        msg.deleted = false;

        return msg;
      });
      vm.messages = messages;

      var message = vm.messages.find(function(msg){
        return msg.uid == $stateParams.id;
      });
      selectMessage(message);

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