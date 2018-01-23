module.exports.admin = function(application, req, res){
    if(req.session.autorizado){
        res.render('admin/admin');
    }
    else{
        res.render('admin/login', { validacao : {}});
    }
}


module.exports.formulario_noticia = function(application, req, res){
    if(req.session.autorizado){
        res.render('admin/form_noticia', { validacao : {}, noticia : {} });
    }
    else{
        res.render('admin/login', { validacao : {}});
    }
}

module.exports.sair = function(application, req, res){
    console.log('Saindo');
    req.session.destroy(function(err){
        res.render("home/index");
    });
}

module.exports.noticias_salvar = function(application, req, res){
    var noticia = req.body;
    req.assert('Titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('Resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('Resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('Autor', 'O nome do autor é obrigatório').notEmpty();
    req.assert('Data_Noticia', 'A data é obrigatória').notEmpty();
    req.assert('Noticia', 'Noticia é obrigatória').notEmpty();
    
    var erros = req.validationErrors();
    if(erros){
        res.render('admin/form_noticia', { validacao: erros, noticia: noticia});
        return;            
    }
    
    var connection = application.config.dbConnection;
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    // noticiasModel.salvarNoticia(noticia, connection, function(error, result){
    //     res.redirect("/noticias");
    // });

    noticiasModel.salvarNoticia(noticia);

     res.redirect("/noticias");
   
}