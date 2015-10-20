'use strict';

var app = require('./server_app.js');
var debug = require('debug')('app');
var db      = require('./models');

//'browserPort'  : 3000,
//    'UIPort'       : 3001,
//    'serverPort'   : 3002,
var serverPort = 3002;

app.set('port', process.env.PORT || serverPort);

db.sequelize.sync().then(function() {
  var server = app.listen(app.get('port'), function (err) {
    if (err){
      console.log('start error: ', err);
    }
    console.log('Express server listening on port ' + server.address().port);
    debug('Express server listening on port ' + server.address().port);
  });
});

