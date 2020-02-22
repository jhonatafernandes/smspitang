const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.models.validation
    const { save, get, getById} = app.models.users


    const saveController = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try{
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'Email não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            existsOrError(user.cellphone, 'Telefone não informado')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')


            const userFromDB = await app.db('users')
            .where({email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.users.save(user, req, res)
       
    }



    const savePutController = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        return app.models.users.save(user, req, res)
    }

    const deleteController = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        const userFromDB = await app.db('users')
            .where({id: user.id}).first()

        try {
            existsOrError(userFromDB, 'Usuário inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.users.deleteById(user, req, res)
        
    }

    const getController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        return app.models.users.get(req, res)
    }
    
    const getByIdController = async (req, res) => {
        //IMPLEMENTAR MAIS VALIDAÇÕES
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id
        const userFromDB = await app.db('users')
            .where({id: user.id}).first()

        try {
            existsOrError(userFromDB, 'Usuário inexistente')
        }catch(msg){
            return res.status(400).send(msg)
        }
        return app.models.users.getById(user, req, res)
    }




    return{ saveController, getController, getByIdController,savePutController, deleteController }
}