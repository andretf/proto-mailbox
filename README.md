# proto-mailbox
Mailbox prototype written in Angular

## Run

    $ npm install
    $ gulp

or start web-server on `dist` folder:

    ../proto-mailbox/dist $ python -m SimpleHTTPServer 3000

This is need because we get data from JSON file: current browsers are quiting request on `file` protocol. 

## Test

Run Karma and Protractor tests. Requires running app on local 3000 port.

    $ npm test
