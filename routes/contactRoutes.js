const admin = require('../config/admin.js')

module.exports = app => {

    app.route('/contacts')
        //.all(app.config.passport.authenticate())
        //.post(admin(app.controllers.contactController.saveController))
        //.get(admin(app.controllers.contactController.getController))
        .post(app.controllers.contactController.saveController)
        .get(app.controllers.contactController.getController)

    app.route('/contacts/:id')
        //.all(app.config.passport.authenticate())
        .put(app.controllers.contactController.saveController)
        .get(app.controllers.contactController.getByIdController)
        //.delete(admin(app.controllers.contactController.deleteController))
        .delete(app.controllers.contactController.deleteController)

        app.route('/contacts/user/:id')
            .get(app.controllers.contactController.getContactController)
}