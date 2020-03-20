const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    //const { userOwner, existsOrError12 } = app.models.contactService
    const { existsOrError, notExistsOrError, equalsOrError, userVerifyFunction, targetVerifyFunction,
         contactVerifyFunction, contactVerifyDelFunction, contactVerifyUserFunction, userVerifyIdFunction} = app.models.contactService
    const { save, get, getById, deleteById} = app.repository.contactsRepository

    const saveController = async (req, res) => {
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id
        if(!contact.id){
        
            try{
                existsOrError(contact.idOwner, 'Seu id é inválido')
                existsOrError(contact.idTarget, 'Id do contato inválido') 

                let userVerify = null
                let targetVerify = null
                let contactVerify = null

                await userVerifyFunction(contact).then(ownerFromUsers => userVerify = ownerFromUsers)
                existsOrError(userVerify, 'Seu usuário não existe!')

                await targetVerifyFunction(contact).then(targetFromUsers => targetVerify = targetFromUsers )
                existsOrError(targetVerify, 'Usuário do contato não existe!')

                await contactVerifyFunction(contact).then(contactFromContacts => contactVerify = contactFromContacts )
                notExistsOrError(contactVerify, 'Contato já cadastrado!')

            }catch(msg){
                return res.status(400).send(msg)
            }
        }
        return app.repository.contactsRepository.save(contact, req, res)  
    }



    const deleteController = async (req, res) => {

        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id

        try {
            let contactDelVerify = null
            await contactVerifyDelFunction(contact).then(contactFromDB => contactDelVerify = contactFromDB )
            existsOrError(contactDelVerify, 'Contato inexistente')

        }catch(msg){
            return res.status(400).send(msg)
        }

        return app.repository.contactsRepository.deleteById(contact, req, res)
        
    }

    const getController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        return app.repository.contactsRepository.get(req, res)
    }

    const getContactController = async (req, res) => {
         //IMPLEMENTAR MAIS VALIDAÇÕES
         let contactUserVerify = null
         let userVerify = null
         const contact = { ...req.body }
         if(req.params.id) contact.id = req.params.id
         
 
         try {
            await userVerifyIdFunction(contact).then(ownerFromUsers => userVerify = ownerFromUsers)
            existsOrError(userVerify, 'Seu usuário não existe!')

            await contactVerifyUserFunction(contact).then(contactFromContacts => contactVerify = contactFromContacts )
            existsOrError(contactVerify, 'Sem contatos!')

         }catch(msg){
             return res.status(400).send(msg)
         }

         return app.repository.contactsRepository.getContact(contact, req, res)
    }
    
    const getByIdController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id

        try {
            let userVerify = null 
            console.log("antes await")
            await userVerifyIdFunction(contact).then(ownerFromUsers => userVerify = ownerFromUsers)
            console.log(userVerify)
            existsOrError(userVerify, 'Usuário informado não existe!')

        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.repository.contactsRepository.getById(contact, req, res)
    }




    return{ saveController, getController, getByIdController, getContactController, deleteController }
}