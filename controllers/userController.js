const bcrypt = require('bcrypt')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError, notExistsOnDb} = app.models.validation
    const { save, get, getById} = app.models.users

    // const encryptPassword = password => {
    //     const salt = bcrypt.genSaltSync(10)
    //     return bcrypt.hashSync(password, salt)
    // }

    

    const saveController = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id
        if(!user.id){
            try{
                existsOrError(user.username, 'Nome não informado')
                existsOrError(user.email, 'Email não informado')
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
                equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')
    
    
                const userFromDB = await app.db('users')
                .where({email: user.email}).first()
                if(!user.id){
                    notExistsOrError(userFromDB, 'Usuário já cadastrado')
                }
            }catch(msg){
                return res.status(400).send(msg)
            }

        }else{
            try{
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
                equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')
    
    
                const passFromDB = await app.db('histpassword')
                .select('userId', 'password', 'dateTimeAlteration')
                .where({userId: user.id})
                console.log("antes do ondb")
                notExistsOnDb(passFromDB, user.password, 'Senha utilizada anteriormente')
                
            }catch(msg){
                console.log("catch controller")
                return res.status(800).send(msg)
            }
        

        }
        console.log("nntes do salt")
        const saltRounds = 10
        bcrypt.hash(user.password, saltRounds, function(err, hash){
            console.log("dentro do bcrypt")
            delete user.confirmPassword
            user.password = hash
            return app.models.users.save(user, req, res)
        });
        
      
       
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




    return{ saveController, getController, getByIdController, deleteController }
}