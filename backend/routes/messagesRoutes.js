const admin = require('../config/admin.js')

module.exports = app => {

    app.route('/messages')
        //.all(app.config.passport.authenticate())
        //.post(admin(app.controllers.messageController.saveController))
        //.get(admin(app.controllers.messageController.getController))
        .post(app.controllers.messageController.saveController)
        .get(app.controllers.messageController.getController)

    app.route('/messages/:id')
        //.all(app.config.passport.authenticate())
        //.put(app.controllers.messageController.saveController)
        .get(app.controllers.messageController.getByIdController)
        //.delete(admin(app.controllers.messageController.deleteController))
        .delete(app.controllers.messageController.deleteByIdController)

    app.route('/messages/talk/:id')
        .delete(app.controllers.messageController.deleteTalkController)
        .get(app.controllers.messageController.getTalkController)
}