var config = require('../config');

// fução para buscar dados em uma collection
function buscar(cName, query, database = config.mongodb.database) { 
  return new Promise((resolve, reject)=>{

    var config = require('../config');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://"+config.mongodb.host+":"+config.mongodb.porta+"/"+database+"";
    var urlO = { useNewUrlParser: true } ;
    
    // conecta no banco
    MongoClient.connect(url, urlO, function(err, db) {
      if (err) throw reject(err);
      // modifica a database da padrão apra a seleciona na function
      var dbo = db.db(database);
      // buscar dados na collection
      dbo.collection(cName).find(query).toArray(function(err, res) {
        if (err) throw reject(err);
        console.log("BANCO: Buscou dados na collection: "+cName);
        resolve(res);
        db.close();
      });
    });

  }); 
}

// exporta a função para poder ser usada em outros locais
module.exports = { buscar };