var express = require('express');
var router = express.Router();
var dbBusca = require('../banco/buscar');

/* GET home page. */
router.get('/', function(req, res, next) {

var busca = dbBusca.buscar("usuarios");
busca.then(function(value) {
  res.json(value); // Success!
}, function(reason) {
  res.json(reason); // Error!
});

});

module.exports = router;
