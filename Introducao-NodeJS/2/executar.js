
var fs = require("fs");

const espacamento = " \n==========================================================\n ";

fs.readFile('ler.txt', 'utf-8', function (err, data) {
  if (err) return console.error(err);
  console.log(espacamento);
  console.log(data.toString());
  console.log(espacamento);
});

console.log("Fim do programa.");