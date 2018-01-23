
module.exports = function(application){

    application.get('/usuario', function(req, res){
		application.app.controllers.usuario.usuario(application, req, res);
	});
	application.post('/usuario/cadastrar', function(req, res){
		application.app.controllers.usuario.cadastrar(application, req, res);
	});
	 
	
};