const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/smspitang_nosql', {useNewUrlParser: true})
    .catch(e => {
        
    })