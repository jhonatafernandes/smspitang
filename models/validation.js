const bcrypt = require('bcrypt')
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


    async function notExistsOnDb(passBd,password, msg){
        try{
            console.log("try")
            existsOrError(passBd, msg)
        }catch(msg){
            console.log("catch")
            return
        }
        console.log("antes for each")
        passBd.forEach((userPass)=>{ 
            console.log("dentro do for each")
            bcrypt.compare(password, userPass.password, function(err, result) {
                if(result){
                    console.log(result)
                    throw msg
                }else{
                    console.log(result)
                    return
                }

            })
        })
        
    }
    
    return { existsOrError, notExistsOrError, equalsOrError, notExistsOnDb}
}