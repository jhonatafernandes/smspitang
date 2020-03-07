const bcrypt = require('bcrypt')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError, notExistsOnDb, falseOrError, validatePassword} = app.models.validation
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
    
    
                const emailFromDB = await app.db('users')
                .where({email: user.email})
                notExistsOrError(emailFromDB, 'Email já cadastrado')

                const usernameFromDB = await app.db('users')
                .where({username: user.username}).first()
                notExistsOrError(usernameFromDB, 'Username já cadastrado')


                
            }catch(msg){
                return res.status(400).send(msg)
            }

        }
        console.log("nntes do salt")
        const saltRounds = 10
        bcrypt.hash(user.password, saltRounds, function(err, hash){
            console.log("dentro do bcrypt")
            delete user.confirmPassword
            user.password = hash
            return app.models.users.save(user, req, res)
        })
    }
            
        
    const savePutController = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id


        try{

            if(user.actualPassword){
                const userFromDB = await app.db('users')
                .where({id: user.id}).first()
                existsOrError(userFromDB, 'Usuário não existe')
                await validatePassword(user.actualPassword, userFromDB.password, "mensagem qualquer")
                .then(function(ok) {})

                .catch(no => {
                    console.log("to no catch")
                    throw "senha atual incorreta!"
                })
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
                equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')


                const passFromDB = await app.db('histpassword')
                .select('userId', 'password', 'dateTimeAlteration')
                .where({userId: user.id})


                console.log("antes ondb")
                await notExistsOnDb(passFromDB, user.password, "senha xsc")
                .then(function(ok) {
                })

                .catch(no => {
                    console.log("to no catch ondb")
                    throw "senha já utilzada!"
                })
                
                
            }
            if(user.email){
                const userFromDB = await app.db('users')
                .where({email: user.email}).first()
                notExistsOrError(userFromDB, 'Email já existe')
            }
            if(user.username){
                const userFromDB = await app.db('users')
                .where({username: user.username}).first()
                notExistsOrError(userFromDB, 'Username já existe')
            }

        }catch(msg){
            console.log("catch controller")
            return res.status(800).send(msg)
        }

        console.log("nntes do salt")
        const saltRounds = 10
        bcrypt.hash(user.password, saltRounds, function(err, hash){
            if(hash){
                console.log("dentro do bcrypt")
                delete user.confirmPassword
                delete user.actualPassword
                user.password = hash
                return app.models.users.save(user, req, res)}
            })
            
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

    return{ saveController, getController, getByIdController, deleteController, savePutController }
}