(function () {
  'use strict';

  describe('Mailbox Service', function () {
    var MailboxService;

    beforeEach(angular.mock.module('mailbox'));

    beforeEach(inject(function (_MailboxService_) {
      MailboxService = _MailboxService_;
    }));

    it('should exist', function () {
      expect(MailboxService).toBeDefined();
    });

    describe('.all()', function () {
      it('should exist', function () {
        expect(MailboxService.all).toBeDefined();
      });

      it('should return array of messages', inject(function ($httpBackend) {
        var messages;
        var callback = jasmine.createSpy('callback');
        $httpBackend.when('GET', '../data/mailbox.json')
          .respond(one_message);
        MailboxService.all(callback);
        $httpBackend.flush();
        messages = callbackParam(callback, 0);

        expect(messages).toEqual(jasmine.any(Array));
      }));
    });

    describe('.get()', function () {
      it('should exist', function () {
        expect(MailboxService.get).toBeDefined();

        it('should return messages', inject(function ($httpBackend) {
          var message;
          var callback = jasmine.createSpy('callback');
          $httpBackend.when('GET', '../data/mailbox.json')
            .respond(one_message);
          MailboxService.get(21, callback);
          $httpBackend.flush();
          message = callbackParam(callback, 0);

          expect(message).toEqual(jasmine.any(Object));
        }));
      });
    });

  });

  // Helpers
  function callbackParam(callback, parameterIndex){
    return (callback.calls.mostRecent() || {args: []}).args[parameterIndex];
  }

  // Mock
  var one_message = JSON.stringify({
    "messages": [
      {
        "uid": "21",
        "sender": "Ernest Hemingway",
        "subject": "animals",
        "message": "This is a tale about nihilism. The story is about a combative nuclear engineer who hates animals. It starts in a ghost town on a world of forbidden magic. The story begins with a legal dispute and ends with a holiday celebration.",
        "time_sent": 1459239867
      },
      {
        "uid": "23",
        "sender": "Virgina Woolf",
        "subject": "debt",
        "message": "The story is about an obedient midwife and a graceful scuba diver who is in debt to a fence. It takes place in a magical part of our universe. The story ends with a funeral.",
        "time_sent": 1456767867
      }
    ]
  });
})
();
