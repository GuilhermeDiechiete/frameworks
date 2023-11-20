const express = require('express')
const server = express()


server.get('/', (req, res) => {
    res.json({success: true})
})


server.listen(4000, () => console.log('Server Running'))