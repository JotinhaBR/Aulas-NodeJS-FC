const mongoose = require('mongoose');
const dbOption = {
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

const dbPort = 27017;
const dbUrl = 'mongodb://localhost:'+dbPort+'/db';

mongoose.connect(dbUrl, dbOption).then(function(){
  console.log('Banco de dados ligado na porta: '+dbPort);
}, function(err) {
  console.error(err);
  process.exit(1);
});
