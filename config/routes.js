module.exports = app => {
    app.route('/users')
        .post(app.models.users.save)
}