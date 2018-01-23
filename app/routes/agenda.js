module.exports = function(application) {
    application.get('/agenda', function(req, res) {
        application.app.controllers.agenda.agenda(application, req, res);
    });
};
