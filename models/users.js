const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (user, req, res) => {
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db('users')
                .update(user)
                .where({id: user.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            
        }else{
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'username', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))

    }

    const getById = (user, req, res) => {
        
        app.db('users')
            .select('id', 'username', 'email', 'admin')
            .where({id: user.id})
            .first()
            .then(userb => res.json(userb))
            .catch(err => res.status(500).send(err))
        
    }

    const deleteById = (user, req, res) => {
        app.db('users')
            .where({id: user.id}).first()
            .del()
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))

    }


    return{ save, get, getById, deleteById }
}