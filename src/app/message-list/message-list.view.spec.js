describe('Mailbox Message List', function () {
  beforeEach(function(){
    browser.get('http://localhost:3000/#/messages');
  });

  it('should list all messages on left panel', function () {
    var messages = $$('#message-list .message-summary-item');
    expect(messages.count()).toEqual(6);
  });

  it('should delete message', function () {
    var btnDelete = $$('#message-list .btn-delete').first();

    btnDelete.click();
    var messages = $$('#message-list .message-summary-item');

    expect(messages.count()).toEqual(5);
  });

  it('should mark message as read', function () {
    var unread = $$('#message-list .unread');

    expect(unread.count()).toEqual(6);
    expect($$('#message-list .read').count()).toEqual(0);

    unread.first().click().then(function(){
      expect($$('#message-list .read').count()).toEqual(1);
    });
  });
});
