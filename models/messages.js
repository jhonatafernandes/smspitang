
module.exports = app => {


    const save = async (message, req, res) => { 
    
        app.db('messages')
            .insert(message)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        
    
    }

    const get = (req, res) => {
        app.db('messages')
            .select('id', 'srcId','destId', 'message', 'statusSrc', 'statusDest', 'delSrc', 'delDest', 'dateTimeMessage')
            .then(messages => res.json(messages))
            .catch(err => res.status(500).send(err))

    }
    const getTalk = (message, req, res) => {

        app.db('messages')
        .select('message', 'srcId', 'destId', 'statusSrc', 'statusDest', 'delSrc', 'delDest')
        .where({srcId: message.id, destId: message.contact, delSrc: null})
    
        .orWhere({srcId: message.contact, destId: message.id, delDest: null})

        // .where({srcId: message.id, destId: message.contact, delSrc: !==1, delDest: !==1})
        // .orWhere({srcId: message.contact, destId: message.id, delSrc: !==1, delDest: !==1})
        .then(talk => res.json(talk))
        .catch(err => res.status(500).send(err))

    }

    const getById = (message, req, res) => {
        
        app.db('messages')
            .select('id', 'message')
            .where({id: message.id})
            .first()
            .then(messageb => res.json(messageb))
            .catch(err => res.status(500).send(err))
        
    }

    const deleteById = (message, req, res) => {
        const messageDel = app.db('messages').where({id: message.id}).first()

        if(message.ownerDel === messageDel.srcId) {
            app.db('messages')
            .where({id: message.id}).first()
            .update({delSrc: 1})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }else{
            app.db('messages')
            .where({id: message.id}).first()
            .update({delDest: 1})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
        

    }

    const deleteTalk = (message, req, res) => {
        
        app.db('messages')
        .update({delSrc: 1, delDest: 1})
        .where({srcId: message.id, destId: message.contact})
        .then(_ => {
            app.db('messages')
            .update({delDest: 1})
            .where({destId: message.id, srcId: message.contact})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
            
        })
        .catch(err => res.status(500).send(err))

        // app.db('messages')
        // .update({delDest: 1})
        // .where({destId: message.id, srcId: message.contact})
        // .then(_ => res.status(204).send())
        // .catch(err => res.status(500).send(err))
        

    }


    return{ save, get, getById, deleteById, deleteTalk, getTalk }
}