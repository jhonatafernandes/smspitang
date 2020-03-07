
module.exports = app => {


    const save = async (contact, req, res) => {
    
        if(contact.id){
            app.db('contacts')
                .update(contact)
                .where({id: contact.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            
        }else{
            app.db('contacts')
                .insert(contact)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            
        }
    }

    const get = (req, res) => {
        app.db('contacts')
            .select('id', 'name', 'idOwner', 'idTarget','deletedAt')
            .then(contacts => res.json(contacts))
            .catch(err => res.status(500).send(err))

    }

    const getById = (contact, req, res) => {
        
        app.db('contacts')
            .select('id', 'name', 'idOwner', 'idTarget', 'deletedAt')
            .where({id: contact.id})
            .first()
            .then(contactb => res.json(contactb))
            .catch(err => res.status(500).send(err))
        
    }

    const deleteById = (contact, req, res) => {
        app.db('contacts')
            .update({deletedAt: new Date()})
            .where({id: contact.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }


    return{ save, get, getById, deleteById }
}