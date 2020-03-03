const admin = require('../config/admin.js')

module.exports = app => {

    app.route('/storys')
        //.all(app.config.passport.authenticate())
        //.post(admin(app.controllers.storyController.saveController))
        //.get(admin(app.controllers.storyController.getController))
        .post(app.controllers.storyController.saveController)
        .get(app.controllers.storyController.getController)

    app.route('/storys/:id')
        //.all(app.config.passport.authenticate())
        //.put(app.controllers.storyController.saveController)
        .get(app.controllers.storyController.getByIdContactController)
        //.delete(admin(app.controllers.storyController.deleteController))
        .delete(app.controllers.storyController.deleteByIdController)
}