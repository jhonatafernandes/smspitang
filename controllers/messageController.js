const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.models.validation
    const { save, get, getById, deleteById} = app.models.messages


    const saveController = async (req, res) => {
        const message = { ...req.body }
        if(req.params.id) message.id = req.params.id

        try{
            existsOrError(message.message, 'Mensagem inválida')
            existsOrError(message.srcId, 'ID do remetente inválido')
            existsOrError(message.destId, 'ID do destinatário inválido')
            existsOrError(message.statusSrc, 'Status do remetente inválido')
            existsOrError(message.statusDest, 'Status do destinatário inválido')


            const srcFromDB = await app.db('users')
                .where({id: message.srcId}).first()
            existsOrError(srcFromDB, 'Usuário remetente não existe')

            const destFromDB = await app.db('users')
                .where({id: message.destId}).first()
            existsOrError(srcFromDB, 'Usuário destinatário não existe')

            const contactFromDB = await app.db('contacts')
                .where({idOwner: message.srcId, idTarget: message.destId}).first()
            existsOrError(contactFromDB, 'O destinatário não é um contato cadastrado')
            
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.messages.save(message, req, res)
       
    }

    const deleteByIdController = async (req, res) => {
        const message = { ...req.body }
        if(req.params.id) message.id = req.params.id

        const messageFromDB = await app.db('messages')
            .where({id: message.id}).first()

        try {
            existsOrError(messageFromDB, 'mensagem inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }

        
        return app.models.messages.deleteById(message, req, res)
        
    }

    const deleteTalkController = async (req, res) => {
        const talk = { ...req.body}
        if(req.params.id) talk.id = req.params.id

        const messageFromDB = await app.db('messages')
            .where({srcId: talk.srcId}).orWhere({destId: talk.destId}).first()
        try {
            existsOrError(messageFromDB, 'Não há mensagens a serem excluídas')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.messages.deleteTalk(talk, req, res)
    }



    const getController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        return app.models.messages.get(req, res)
    }
    
    const getByIdController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const message = { ...req.body }
        if(req.params.id) message.id = req.params.id
        const messageFromDB = await app.db('messages')
            .where({id: message.id}).first()

        try {
            existsOrError(messageFromDB, 'Mensagem inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.messages.getById(message, req, res)
    }




    return{ saveController, getController, getByIdController, deleteByIdController, deleteTalkController }
}