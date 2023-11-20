
module.exports = app => {
    
    app.route('./users')
        .post(app.controller.register)
}