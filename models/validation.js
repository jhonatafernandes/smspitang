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



     function  notExistsOnDb(passBd,password, msg){         
        return new Promise((resolve, reject) => {
            passBd.forEach((userPass)=>{
                bcrypt.compare(password, userPass.password).then(function(result) {
                    if(result){
                        console.log("entrou no result on db")
                        return reject("msg")                 
                    }else{
                        return resolve('ok')
                    }

                });
            })

            
        });



    }



    function validatePassword(pass, hash, msg){
        return new Promise((resolve, reject) => {
            bcrypt.compare(pass, hash).then(function(result) {
                if(result){
                    console.log("entrou no result")
                    return resolve("ok")
                }else{
                    console.log("entrou rejesct")
                    return reject("no")
                    
                }
            })

        })
    }


    function falseOrError(value, msg){
        if(value) throw msg
    }
    
    
    return { existsOrError, notExistsOrError, equalsOrError, notExistsOnDb, falseOrError, validatePassword}
}