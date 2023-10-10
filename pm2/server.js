const express = require("express")
const server = express()

// pm2 - usado para producao
    //instalacao -> npm i --save pm2
    // instalar globalmente -> npm i -g pm2
    // comando para rodar -> npm run production
    // script no package.json -> "production": "pm2 start server.js --name nomeDaAplicacao"
    // pm2 monit -> ver os processos em execução
    // pm2 status -> mostra as informações dos processos
    // pm2 restart nomeDaAplicacao -> reiniciar a aplicacao
    // pm2 stop 0 -> parar a aplicacao
    // pm2 kill -> parar a instancia da aplicação ( do pm2 )



server.listen(4000, ()=> { console.log("Server Running...")})