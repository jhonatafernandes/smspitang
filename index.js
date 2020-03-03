const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./repository/db.js')
app.db = db


consign()
    .include('./config/passport.js')
    .then('./config/auth.js')
    .then('./config/middlewares.js')
    .then('./models/validation.js')
    .then( './models')
    .then( './controllers')
    .then('./routes')
    .into(app)


app.listen(3000, () => {
    console.log("backend executando...!!!")
})

