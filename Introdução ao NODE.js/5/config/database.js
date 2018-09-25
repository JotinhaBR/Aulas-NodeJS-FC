var mongoose = require('mongoose');
process.env.PORT = process.env.PORT || 27017;

var uri = process.env.MONGODB_URL || `mongodb://localhost:${process.env.PORT}/test`;
var connect = mongoose.connect(uri,  { useNewUrlParser: true } )
.then(app => app.listen(process.env.PORT , () => console.log(`Banco de dados ligado na porta: ${process.env.PORT }`)))
.catch(error => {
  console.error(error);
  process.exit(1);
});
