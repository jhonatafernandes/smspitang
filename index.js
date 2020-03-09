const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./repository/db.js')
const schedule = require('node-schedule')
app.db = db


consign()
    .include('./config/passport.js')
    .then('./config/auth.js')
    .then('./config/middlewares.js')
    .then('./models/validation.js')
    .then( './models')
    .then( './controllers')
    .then('./config/storySchedule.js')
    .then('./routes')
    .into(app)

    
    
let dia = schedule.scheduleJob('*1/ * * * *', async function() {
    console.log("to funcionando")
    const storys = app.db('storys')
        .whereNull('deletedAt')

    if(storys){
        console.log(storys)
        
    }
})


app.listen(3000, () => {
    console.log("backend executando...!!!")
    
})

