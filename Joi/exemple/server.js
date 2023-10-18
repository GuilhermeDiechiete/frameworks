const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const server = express()
server.use(cors())
server.use(bodyParser.json())

// IMPORT SCHEMA DA ROTA DESEJADA
const Validator = require('./Schemas/exemple.schema1')

server.post('/register', (req, res) => {

    const { name, lastname, email, age, phone, password, confirmpassword, address, city, state, zipcode } = req.body

    const result = Validator.validate(req.body);

    // COMO CHAMAR OS ERROS 
      if (result.error) {
        res.status(400).json({ message: result.error.details[0].message })  
    }
    
})


server.listen(3000, () => console.log('Server Running - Teste JOI'))