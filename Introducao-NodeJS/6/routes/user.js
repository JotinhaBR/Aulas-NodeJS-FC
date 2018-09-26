var express = require('express');
var router = express.Router();
var config = require('../config');
var dbInserir = require('../banco/inserir');
var dbBusca = require('../banco/buscar');
var dbDeletar = require('../banco/deletar');





// cria um novo usuario
router.post('/create', function(req, res, next) {

// sim exite os parametros
var inserir = dbInserir.inserir("usuarios", req.body);

inserir.then(function(value) {
  res.json(value); // Success!
}, function(reason) {
  res.json(reason); // Error!
});

});





// deletar um usuario
router.delete('/deletar', function(req, res, next) {

var deletar = dbDeletar.deletar("usuarios", req.body);

deletar.then(function(value) {
  res.json(value); // Success!
}, function(reason) {
  res.json(reason); // Error!
});

});





// pegar informações de um usuario
router.post('/buscar', function(req, res, next) {

// sim exite os parametros
var busca = dbBusca.buscar("usuarios", req.body);
busca.then(function(value) {
  res.json(value); // Success!
}, function(reason) {
  res.json(reason); // Error!
});

});







module.exports = router;
