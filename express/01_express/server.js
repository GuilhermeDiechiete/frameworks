const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Bem Vindo ao NodeJS!')
})
app.listen(3333, ()=> console.log('Servidor Executando...'))