'use strict';

var config = require('./gulp/config');
var app = require('./server_app.js');
var debug = require('debug')('app');
var db      = require('./models');

app.set('port', process.env.PORT || config.serverPort);

db.sequelize.sync().then(function() {
  var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
    debug('Express server listening on port ' + server.address().port);
  });
});

