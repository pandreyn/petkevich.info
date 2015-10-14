
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var sites = require('./routes/sites');

var debug = require('debug')('express');

var mongoose = require('mongoose');
var Sequelize = require('sequelize');
//var restful   = require('sequelize-restful');

//var sequelize = new Sequelize(process.env.MONGOLAB_MY_URI);
var sequelize = new Sequelize('postgres://qnvmqoqlrgsagj:JwwSpv3kTfhNOBV0BuBLoJEapi@ec2-54-83-10-210.compute-1.amazonaws.com:5432/delt4tdn4o2oqn');

var mongoConnectionString = process.env.MONGOLAB_MY_URI;
mongoose.connect(mongoConnectionString, function(err) {
  if(err) {
    debug('connection error', err);
  } else {
    debug('connection successful');
  }
});

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', routes);
app.use('/sites', sites);

//app.use(restful(sequelize));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});


module.exports = app;