const express = require("express");
const router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/contact', function (req, res) {
  res.render('contact');
});

router.get('/custom', function (req, res) {
  res.render('custom');
});

router.get('/ideas', function (req, res) {
  res.render('ideas');
});

router.get('/pricing', function (req, res) {
  res.render('pricing');
});

router.get('/ordering', function (req, res) {
  res.render('ordering');
});

module.exports = router;