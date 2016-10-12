(function(){
  'use strict';

  var module = angular.module('mailbox');

  module.service('MailboxService', mailboxService);

  function mailboxService($http){
    function all(callback) {
      $http.get('../data/mailbox.json').then(function (response) {
        callback(response.data.messages);
      });
    }

    function get(id, callback) {
      $http.get('../data/mailbox.json').then(function (response) {
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
