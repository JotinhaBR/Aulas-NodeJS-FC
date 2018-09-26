var config = require('../config');

// fução para deletar um dado em uma collection
function deletar(cName, obj, database = config.mongodb.database){
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
      // insere um dado na collection
      dbo.collection(cName).deleteOne(obj, function(err, res) {
        if (err) throw reject(err);
        console.log("BANCO: Removido um dado na collection: "+cName);
        resolve(res);
        db.close();
      });
    });

  }); 
}

// exporta a função para poder ser usada em outros locais
module.exports = { deletar };