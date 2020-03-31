const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    // const encryptPassword = password => {
    //     const salt = bcrypt.genSaltSync(10)
    //     return bcrypt.hashSync(password, salt)
    // }

    const save = async (user, req, res) => {
        

        if(user.id){
            try{
                const response = { response: 'Usuário salvo com sucesso!' }
                app.db('users')
                .update(user)
                .where({id: user.id})
                .whereNull('deletedAt')
                .then(async _ => {

                    savePassword(user)
                    res.status(204).json(response)
                })
                .catch(err => {
                    const error = { error: err }
                    res.status(500).json(error)
                    }
                )
            }
            catch(err){
                const error = { error: err }
                res.status(500).json(error)

                }

            
        }else{
            const response = { response: 'Usuário cadastrado com sucesso!' }

                console.log("ants db")
                app.db('users')
                .insert(user)
                .then(async _ => {
                    savePassword(user)
                    res.status(291).json(response)

                    })
                .catch(err => {
                    const error = { error: err }
                    res.status(500).json(error)
                }
                    )
            
                }
    }

    const savePassword = async(user) =>{

        const userFromDB = await app.db('users')
            .where({ email: user.email }).first()

        app.db('histpassword')
            .insert({ userId: userFromDB.id, password: userFromDB.password })
            .then(_ => console.log("Senha salva"))
            .catch(err => console.log("senha não salva"))

    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'username', 'email', 'admin', 'imageUrl', 'deletedAt')
            .whereNull('deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))

    }

    const getById = (user, req, res) => {
        
        app.db('users')
            .select('id', 'username', 'email', 'admin', 'imageUrl', 'deletedAt')
            .where({id: user.id})
            .whereNull('deletedAt')
            .first()
            .then(userb => res.json(userb))
            .catch(err => res.status(500).send(err))
        
    }

    const deleteById = (user, req, res) => {
        app.db('users')
            .update({deletedAt: new Date()})
            .where({id: user.id})
            .whereNull('deletedAt')
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }


    return{ save, get, getById, deleteById }
}