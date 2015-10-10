'use strict';
var tests = [];

//console.log(window.__karma__);

for (var file in window.__karma__.files) {

  console.log(file);
  //if(file.indexOf('browserify')){
  //  console.log('browserify' + file);
  //}

    //if ( window.__karma__.files.hasOwnProperty(file) ) {
    //       if (/test\.js$/.test(file)) {
    //                tests.push(file);
    //
    //        }
    //}

  //// убираем ошибку ERROR: 'There is no timestamp for ...!'
  //// смотри - [https://github.com/karma-runner/karma-requirejs/issues/6]
  //window.__karma__.files[file.replace(/^\//, '')] = window.__karma__.files[file];
}


//require.config({
//      baseUrl: 'base/src',
//      paths: {
//        Squire: '../bower_components/squire/src/Squire'
//      },
//      shim: {}
//      //,
//      //deps: tests
//      //,
//      //callback: window.__karma__.start
//
//    }
//);

//require(tests, window.__karma__.start);