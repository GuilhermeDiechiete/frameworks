const Koa = require('koa')
const app = new Koa()
const consign = require('consign')

consign()
    .then('./src/fragments/config/middlewares.js') // cors, body-parser
    .then('./src/routes') // carregar todos os arquivos de rota da pasta
    .into(app)



app.listen(4000, () => console.log('Server Running'))