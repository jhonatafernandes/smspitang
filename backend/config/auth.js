const { authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password){
            return res.status(400).send('Informe usuário e senha!')
        }

        const user = await app.db('users')
            .where({email: req.body.email})
            .first()

        const erro = { error: 'usuário não encontrado'}
        if (!user) return res.status(400).json(erro)

        // let match = checkUser(req.body.password, user.password);
        const match = await bcrypt.compare(req.body.password, user.password);

        console.log(match)

        if(match){
            const now = Math.floor(Date.now() / 1000)

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin,
                iat: now,
                exp: now + (60 * 60)
            }

            res.json({
                ...payload,
                token: jwt.encode(payload, authSecret)
            })

        }else{
            res.status(401).send('Email ou senha inválidos')
        }

        
        
    }


    async function checkUser(username, password) {
        //... fetch user from a db etc.

        const match = await bcrypt.compare(username, password);

        if (match) {
            return true;
           
        }
        return false;


    }


    const validateToken = async (req, res) => {
        const userData = req.body || null
        try{
            if (userData){
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000)> new Date()){
                    return res.send(true)
                }
            }
        }catch(e){
            //enviar mensagem de problema com o token
        }
        res.send(false)

        
    }
    return { signin,  validateToken }
}