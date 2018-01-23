module.exports.login = function(application, req, res){
        res.render('admin/login', {validacao:{} });
}

module.exports.autenticar = function(application, req, res){
    var dadosForm = req.body;

    req.assert('Usuario', 'Usuário não deve ser vazio').notEmpty();
    req.assert('Senha', 'Senha não deve ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("admin/login", {validacao:erros, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    console.log(dadosForm);
    UsuariosDAO.autenticar(dadosForm, req, res);
   // res.send('Sessão poderá ser criada');
}