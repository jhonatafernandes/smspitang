const cron = require('node-cron')
const moment = require('moment')

module.exports = app => {

    cron.schedule("* * * * *", async () => {
        
            const stories = await app.db('storys')
                .select('id', 'dateTimeStory')
                .whereNull('deletedAt')

            stories.forEach((story)=>{
                const now = moment(new Date()); // Data atual
                const past = moment(story.dateTimeStory); // Outra data no passado
                const duration = moment.duration(now.diff(past)); //Diferença entre as duas datas
                // Mostra a diferença em dias
                const days = duration.asDays();
        
                if(days >= 1){
                    app.db('storys')
                    .update({deletedAt: new Date()})
                    .where({id: story.id})
                }

                
            })


    
    })

} 