const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home.html');
});

router.get('/about', function(req, res, next) {
  res.render('about.html');
});

router.get('/contact', function(req, res, next) {
  res.render('contact.html');
});

router.get('/login', function(req, res, next) {
  res.render('login.html');
});

router.get('/model', function(req, res, next) {
  res.render('model.html');
});

router.get('/admin', function(req, res, next) {
  res.render('index.html');
});


module.exports = router;
