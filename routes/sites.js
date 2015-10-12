var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Sites = require('../models/sites.js');

/* GET /sites listing. */
router.get('/', function(req, res, next) {
  Sites.find(function (err, sites) {
    if (err) return next(err);
    res.json(sites);
  });
});

/* POST /sites */
router.post('/', function(req, res, next) {
  Sites.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /sites/id */
router.get('/:id', function(req, res, next) {
  Sites.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /sites/:id */
router.put('/:id', function(req, res, next) {
  Sites.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /sites/:id */
router.delete('/:id', function(req, res, next) {
  Sites.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;