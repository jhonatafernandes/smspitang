const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    // const encryptPassword = password => {
    //     const salt = bcrypt.genSaltSync(10)
    //     return bcrypt.hashSync(password, salt)
    // }

    const save = async (user, req, res) => {

        if(user.id){
            try{
                app.db('users')
                .update(user)
                .where({id: user.id})
                .then(async _ => {
                    app.db('histpassword')
                    .insert({userId: user.id, password: user.password})
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err))
                    

                })
                .catch(err => res.status(500).send(err))
                
            }catch(err){
                err => res.status(500).send(err)

            }
            
        }else{
           
                app.db('users')
                .insert(user)
                .then(async _ => {
                    const userFromDB = await app.db('users')
                    .where({email: user.email}).first()
                    app.db('histpassword')
                    .insert({userId: userFromDB.id, password: user.password})
                    .then(_ => res.status(204).send())
                    .catch(err => res.status(500).send(err))
                    

                })
                .catch(err => res.status(500).send(err))

        }
            
        
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'username', 'email', 'admin', 'imageUrl', 'deletedAt')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))

    }

    const getById = (user, req, res) => {
        
        app.db('users')
            .select('id', 'username', 'email', 'admin', 'imageUrl', 'deletedAt')
            .where({id: user.id})
            .first()
            .then(userb => res.json(userb))
            .catch(err => res.status(500).send(err))
        
    }

    const deleteById = (user, req, res) => {
        app.db('users')
            .update({deletedAt: new Date()})
            .where({id: user.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }


    return{ save, get, getById, deleteById }
}