const express = require('express')
const app = express()

const mongoose = require('mongoose')
const user = require('./database/entities/User')
const database = require('./database/conn')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const User = mongoose.Model('User', user)

app.get('/', (req, res) => {
    res.json({})
})
app.post('/user/register', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        res.json({ email: req.body.email })

    } catch (error) {
        res.sendStatus(500)
    }
    
})

module.exports = app