'use strict';

var config = require('./gulp/config');
var debug = require('debug')('appServer');
var app = require('./server_app.js');

app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
