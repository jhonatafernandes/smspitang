const schedule = require('node-schedule')

module.exports = app => {

    schedule.scheduleJob('*1/ * * * *', async function() {
        console.log("to funcionando")
        const storys = app.db('storys')
            .whereNull('deletedAt')

        if(storys){
            console.log(storys)
            
        }
    })

} 