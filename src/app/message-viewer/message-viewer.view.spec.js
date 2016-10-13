describe('Mailbox Message Viewer', function () {
  it('should show message content on the right panel', function () {
    browser.get('http://localhost:3000/#/messages/');
    var message = $$('#message-list .message-summary-item').first();

    message.click().then(function(){
      var leftSubject = message.element(by.tagName('h1')).getText();
      var rightSubject = $$('.message-full header h1').first().getText();
      expect(leftSubject).toEqual(rightSubject);

      expect($$('.message-full article').count()).toEqual(1);
    });
  });

});
