module.exports = function(application){

    application.get('/admin', function(req,res){
        application.app.controllers.admin.admin(application, req, res);
      });
  

    application.get('/formulario_noticia', function(req,res){
      application.app.controllers.admin.formulario_noticia(application, req, res);
    });

    application.post('/noticias/salvar', function(req,res){
        application.app.controllers.admin.noticias_salvar(application, req, res);
    });

    application.get('/sair', function(){
        application.app.controllers.admin.sair(application, req, res);
    });
}



