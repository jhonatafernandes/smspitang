const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.models.validation
    const { save, get, getById, deleteById} = app.models.contacts


    const saveController = async (req, res) => {
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id
        if(!contact.id){
            try{
                existsOrError(contact.idOwner, 'Seu id é inválido')
                existsOrError(contact.idTarget, 'Id do contato inválido')
                
                const ownerFromUsers = await app.db('users')
                    .where({id: contact.idOwner})
                    .whereNull('deletedAt')
                    .first()
                existsOrError(ownerFromUsers, 'Seu usuário não existe!')

                const targetFromUsers = await app.db('users')
                    .where({id: contact.idTarget})
                    .whereNull('deletedAt')
                    .first()
                existsOrError(targetFromUsers, 'Usuário do contato não existe!')
    
                const contactFromDB = await app.db('contacts')
                    .where({idOwner: contact.idOwner, idTarget: contact.idTarget })
                    .whereNull('deletedAt')
                    .first()
    
                if(!contact.id){
                    notExistsOrError(contactFromDB, 'Contato já cadastrado')
                }
            }catch(msg){
                return res.status(400).send(msg)
            }

        }
        
        return app.models.contacts.save(contact, req, res)
       
    }

    const deleteController = async (req, res) => {
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id

        const contactFromDB = await app.db('contacts')
            .where({id: contact.id})
            .whereNull('deletedAt')
            .first()

        try {
            existsOrError(contactFromDB, 'Contato inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.contacts.deleteById(contact, req, res)
        
    }

    const getController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        return app.models.contacts.get(req, res)
    }

    const getContactController = async (req, res) => {
         //IMPLEMENTAR MAIS VALIDAÇÕES
         const contact = { ...req.body }
         if(req.params.id) contact.id = req.params.id
         const contactFromDB = await app.db('contacts')
             .where({idOwner: contact.id})
             .whereNull('deletedAt')
             .first()
 
         try {
             existsOrError(contactFromDB, 'Sem Contatos')
         }catch(msg){
             return res.status(400).send(msg)
         }
         return app.models.contacts.getContact(contact, req, res)
    }
    
    const getByIdController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id
        const contactFromDB = await app.db('contacts')
            .where({id: contact.id})
            .whereNull('deletedAt')
            .first()

        try {
            existsOrError(contactFromDB, 'Contato inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.contacts.getById(contact, req, res)
    }




    return{ saveController, getController, getByIdController, getContactController, deleteController }
}