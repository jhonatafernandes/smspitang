const admin = require('../config/admin.js')
const multer = require('multer')

module.exports = app => {

    app.post('/signup', app.repository.usersRepository.save)
    app.post('/signin', app.config.auth.signin)
    app.post('/validateToken', app.config.auth.validateToken)

    app.route('/users')
        //.all(app.config.passport.authenticate())
        // .post(admin(app.controllers.userController.saveController))
        // .get(admin(app.controllers.userController.getController))
        .post(app.controllers.userController.saveController)
        .get(app.controllers.userController.getController)

    

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
    
            // error first callback
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
    
            // error first callback
            cb(null, file.originalname)
        }
    });
    const upload = multer({ storage });
    // Rota teste para envio de imagens
    app.post('/file/upload', upload.single('file'), 
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'))

    

    app.route('/users/:id')
        //.all(app.config.passport.authenticate())
        .put(app.controllers.userController.savePutController)
        .get(app.controllers.userController.getByIdController)
        // .delete(admin(app.controllers.userController.deleteController))
        .delete(app.controllers.userController.deleteController)
}