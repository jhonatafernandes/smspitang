
module.exports = app => {


    const save = async (story, req, res) => {
    
        app.db('storys')
            .insert(story)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('storys')
            .select('id', 'message', 'userId', 'dateTimeStory', 'type')
            .then(storys => res.json(storys))
            .catch(err => res.status(500).send(err))

    }

    const getById = (story, req, res) => {
        
        app.db('storys')
            .select('id', 'message', 'userId', 'dateTimeStory', 'type')
            .where({userId: story.userId}).first()
            .then(storyb => res.json(storyb))
            .catch(err => res.status(500).send(err))
        
    }

    
        

    const deleteById = (story, req, res) => {
        app.db('storys')
            .update({deletedAt: new Date()})
            .where({id: story.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }




    return{ save, get, getById, deleteById}
}