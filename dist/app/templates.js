angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('mailbox/mailbox.html','<div class="row row-equal-height"> <section class="col-sm-3 sidebar"> <ul class="list-unstyled"> <li class="msg-summary-item" ng-repeat="message in $ctrl.messages"> <message-summary message="message"></message-summary> </li> </ul> </section> <section class="col-sm-9"> <message message="$ctrl.message" class="message-full"></message> </section> </div> ');
$templateCache.put('mailbox/message/message.html','<header> <h1>{{$ctrl.message.subject}}</h1> <dl> <dt>From:</dt> <dd>{{$ctrl.message.sender}}</dd> <dt>Date/Time:</dt> <dd>{{$ctrl.message.time_sent | date: \'EEE dd MMM, HH:mm\'}}</dd> </dl> </header> <article> {{$ctrl.message.message}} </article> ');
$templateCache.put('mailbox/message/summary.html','<div class="message-anchor"> <a href="#/messages/{{$ctrl.message.uid}}"> <h1 class="message-summary-subject">{{$ctrl.message.subject}}</h1> <footer class="clearfix message-summary-footer"> <div class="pull-left text-nowrap"> {{$ctrl.message.sender}} </div> <div class="pull-right text-nowrap text-right message-summary-datetime"> {{$ctrl.message.time_sent | date: \'EEE dd MMM, HH:mm\'}} </div> </footer> </a> </div>');}]);