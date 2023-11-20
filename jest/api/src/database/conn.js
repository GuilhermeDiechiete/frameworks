const mongoose = require('mongoose');

async function connection() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/api_jest');

    //console.log('Connect Database');

  } catch (error) {
    console.error('Erro na conexão com o banco de dados');
  }
}

connection().catch((err) => console.error('Erro ao tentar se conectar com o banco de dados', err));

module.exports = mongoose;