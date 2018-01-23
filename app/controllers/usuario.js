module.exports.usuario = function(application, req, res){
    res.render('admin/usuario', { validacao : {}, dadosForm : {} });
}


module.exports.cadastrar = function(application, req, res){
    
    var dadosForm = req.body;

    req.assert('Nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('Usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('Senha', 'Senha não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/usuario', {validacao: erros, dadosForm: dadosForm});
        return;
    }

    var connection = application.config.dbConnection;
    console.log(connection);
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
}