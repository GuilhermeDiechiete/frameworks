const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/api_jest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão:'));
db.once('open', function () {
  console.log('Conexão bem-sucedida.');
});

module.exports = mongoose;