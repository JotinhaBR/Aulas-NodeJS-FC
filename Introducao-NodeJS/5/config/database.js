const mongoose = require('mongoose');
const dbOption = {
    useNewUrlParser: true,
};

const dbPort = 27017;
const dbUrl = 'mongodb://localhost:'+dbPort+'/db';

mongoose.connect(dbUrl, dbOption).then(function(){
  console.log('Banco de dados conectado com: '+dbUrl);
}, function(err) {
  console.error(err);
  process.exit(1);
});

