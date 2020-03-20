

module.exports = app => {
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    
    function notExistsOrError(value, msg){
        try{
            existsOrError(value, msg)
        }catch(msg){
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    //Função para verificar se existe um user com o id owner
    function userVerifyFunction (contact){
        return new Promise( async (resolve, reject) => {
            const ownerFromUsers = await app.db('users')
                    .where({id: contact.idOwner})
                    .whereNull('deletedAt')
                    .first()
            resolve(ownerFromUsers)
        })
    }

    //Função para verificar se existe um user com o id enviado pelo get contacts by user
    function userVerifyIdFunction (contact){
        return new Promise( async (resolve, reject) => {
            const ownerFromUsers = await app.db('users')
                    .where({id: contact.id})
                    .whereNull('deletedAt')
                    .first()
            resolve(ownerFromUsers)
        })
    }


    //Função para verificar se existe um user com o id target
    function targetVerifyFunction (contact){
        return new Promise( async (resolve, reject) => {
            const targetFromUsers = await app.db('users')
                    .where({id: contact.idTarget})
                    .whereNull('deletedAt')
                    .first()
            
            resolve(targetFromUsers)      
        })
    }


    //Função para verificar se existe pelo menos um contato com os ids enviados
    function contactVerifyFunction (contact){
        return new Promise( async (resolve, reject) => {
            const contactFromContacts = await app.db('contacts')
                    .where({idOwner: contact.idOwner, idTarget: contact.idTarget })
                    .whereNull('deletedAt')
                    .first()
            
            resolve(contactFromContacts)      
        })
        
    }

    //Função para verificar se existe pelo menos um contato cadastrado antes de deletar
    function contactVerifyDelFunction (contact){
        return new Promise( async (resolve, reject) => {
            const contactFromDB = await app.db('contacts')
                .where({id: contact.id})
                .whereNull('deletedAt')
                .first()
            
            resolve(contactFromDB)      
        })
        
    }

    //Função para verificar se existe pelo menos um contato cadastrado
    function contactVerifyUserFunction (contact){
        return new Promise( async (resolve, reject) => {
            const contactFromDB = await app.db('contacts')
                .where({idOwner: contact.id})
                .whereNull('deletedAt')
                .first()
            
            resolve(contactFromDB)      
        })
        
    }


    
    return { existsOrError, notExistsOrError, equalsOrError, userVerifyFunction, targetVerifyFunction,
         contactVerifyFunction, contactVerifyDelFunction, contactVerifyUserFunction, userVerifyIdFunction}
}