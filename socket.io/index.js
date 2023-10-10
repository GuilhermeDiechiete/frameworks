const express = require('express')
const server = express()

const http = require('http').createServer(server)

const io = require('socket.io')(http)

server.set("view engine", "ejs")

server.get("/", (req, res) => {
    res.render("home")
})

// abrir evento de conexao ( quando o cliente se conecta a aplicação)
io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("Cliente desconectou" + socket.id)
    })

    // escutando o evento mensagemCliente
    socket.on("mensagemCliente", (data)=> {
        console.log("Cliente se conectou......")
        console.log(data)
    })
    // pegando input do front
    socket.on("name", (data) => {
        console.log(data)
        socket.emit("resultado", data + "- GUIA DE ESTUDOS")
    })
})

http.listen(4000, () => console.log("Server Running..."))