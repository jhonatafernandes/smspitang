const admin = require('../config/admin.js')

module.exports = app => {

    app.post('/signup', app.models.users.save)
    app.post('/signin', app.config.auth.signin)
    app.post('/validateToken', app.config.auth.validateToken)

    app.route('/users')
        //.all(app.config.passport.authenticate())
        // .post(admin(app.controllers.userController.saveController))
        // .get(admin(app.controllers.userController.getController))
        .post(app.controllers.userController.saveController)
        .get(app.controllers.userController.getController)

    app.route('/users/:id')
        //.all(app.config.passport.authenticate())
        .put(app.controllers.userController.savePutController)
        .get(app.controllers.userController.getByIdController)
        // .delete(admin(app.controllers.userController.deleteController))
        .delete(app.controllers.userController.deleteController)
}