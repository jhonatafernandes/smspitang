const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.models.storyService
    const { save, get, getById, deleteById, getByIdContact} = app.repository.storysRepository


    const saveController = async (req, res) => {
        const story = { ...req.body }
        if(req.params.id) story.id = req.params.id

        try{
            existsOrError(story.message, 'Mensagem não informada')
            existsOrError(story.type, 'Tipo não informado')
            existsOrError(story.userId, 'ID não informado')

            const userFromDB = await app.db('users')
            .where({id: story.userId}).first()
            .whereNull('deletedAt')
            existsOrError(userFromDB, 'ID de usuário inexistente')


        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.repository.storysRepository.save(story, req, res)
       
    }

    const deleteByIdController = async (req, res) => {
        const story = { ...req.body }
        if(req.params.id) story.id = req.params.id

        const storyFromDB = await app.db('storys')
            .where({id: story.id}).first()

        try {
            existsOrError(storyFromDB, 'Story inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.repository.storysRepository.deleteById(story, req, res)
        
    }

    const getController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        return app.repository.storysRepository.get(req, res)
    }
    
    const getByIdController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const story = { ...req.body }
        if(req.params.id) story.id = req.params.id
        const storyFromDB = await app.db('storys')
            .where({id: story.id}).first()

        try {
            existsOrError(storyFromDB, 'Story inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.repository.storysRepository.getById(story, req, res)
    }

    const getByIdContactController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const story = { ...req.body }
        if(req.params.id) story.id = req.params.id
        const storyFromDB = await app.db('storys')
            .where({userId: story.id}).first()

        try {
            existsOrError(storyFromDB, 'Sem stories!')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.repository.storysRepository.getByIdContact(story, req, res)
    }




    return{ saveController, getController, getByIdController, getByIdContactController, deleteByIdController }
}