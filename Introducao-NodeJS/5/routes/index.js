var express = require('express');
var database = require('../config/database');
var testDB = require('./testDB');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  database.testDB.find(function(erro, dbuser){
    res.render('index', { user: dbuser, error: erro });
  });
});

module.exports = router;
