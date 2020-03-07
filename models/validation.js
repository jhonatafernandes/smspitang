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
        new Promise((resolve, reject) => {
            passBd.forEach((userPass)=>{
                bcrypt.compare(password, userPass.password).then(function(result) {
                    if(result){
                        console.log("entrou no reject")
                        reject(new Error("ERRO"))                   
                    }
                });
            })

            resolve("Deu certo");
        });
    }

    // function notExistsOnDb(passBd,password, msg){
    //     console.log("anres da promise")
    //     new Promise((resolve, reject) => {
    //         console.log("dentro da promise")
    //         passBd.forEach((userPass)=>{
    //             bcrypt.compare(password, userPass.password).then(function(result) {
    //                 try{
    //                     console.log("no try")
    //                     falseOrError(result, "senha utilizada")
    //                 }catch(msg){
    //                     console.log("no catch")
    //                     reject(new Error("Falha na geração"))

    //                 }
    //             });
    //         })
        
    //     })
    // }

    function falseOrError(value, msg){
        if(value) throw msg
    }
    
    
    return { existsOrError, notExistsOrError, equalsOrError, notExistsOnDb, falseOrError}
}