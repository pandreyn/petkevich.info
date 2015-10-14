'use strict';

var express = require('express');
var router = express.Router();
var restful   = require('sequelize-restful');

var models  = require('../models');

/* GET /sites listing. */
router.get('/', function(req, res, next) {
  models.Site.findAll().then(function(sites) {
    res.json(sites);
  }, function(err) {
    return next(err);
  });
});

/* POST /sites */
router.post('/', function(req, res, next) {
  models.Site.create({
    name: req.body.name,
    url: req.body.url,
    description: req.body.description
  }).then(function(post) {
    res.json(post);
  }, function(err) {
    return next(err);
  });
});

/* GET /sites/id */
router.get('/:id', function(req, res, next) {
  models.Site.findById(req.params.id).then(function(site) {
    res.json(site);
  }, function(err) {
    return next(err);
  });
});

/* PUT /sites/:id */
router.put('/:id', function(req, res, next) {
  models.Site.findById(req.params.id).then(function(site) {
    site.updateAttributes({
      name: req.body.name,
      url: req.body.url,
      description: req.body.description
    }).then(function(site) {
      res.json(site);
    });
  }, function(err) {
    return next(err);
  });
});

/* DELETE /sites/:id */
router.delete('/:id', function(req, res, next) {
  models.Site.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(post) {
    res.json(post);
  }, function(err) {
    return next(err);
  });
});

module.exports = router;