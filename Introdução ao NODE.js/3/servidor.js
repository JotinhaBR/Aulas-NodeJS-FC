var http = require('http');
var config = require('./configuracoes.js');

console.log(config.msg.server.iniciando);

var server = http.createServer( function (request, response) {
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write('<meta charset="UTF-8"><center><h1>'+config.msg.boasVindas+'<h1><p>'+config.msg.nomeProjeto+'</p></center>');
  console.log(config.msg.server.conexao);
  response.end();
});

server.getConnections(function(){
    console.log(config.msg.server.ligado);
});

server.listen(config.porta);