const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')
app.db = db


consign()
    .then('./config/middlewares.js')
    .then( './models')
    .then('./config/routes.js')
    .into(app)


app.get('/users/estyvison', (req,res) => {
    res.json({ nome: 'estyvison'})
})

app.listen(3000, () => {
    console.log("backend executando...!!!")
})

