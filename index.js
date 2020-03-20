const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./repository/db.js')
const multer = require('multer')
app.db = db

app.use(express.static('views'));



consign()
    .include('./config/passport.js')
    .then('./config/auth.js')
    .then('./config/middlewares.js')
    .then('./models')
    .then( './repository')
    .then( './controllers')
    .then('./config/storySchedule.js')
    .then('./routes')
    .into(app)
    

app.listen(3000, () => {
    console.log("backend executando...!!!")
    
})

