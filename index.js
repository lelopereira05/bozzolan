var http = require('http');
var server = http.createServer(function(req, res){

	var categoria = req.url;
	if(categoria == '/sobre')
	{
	res.end("<html><body>Sobre o desenvolvimento do site Fábio Lords<br/><b>Ferramentas utilizadas</b><br/>Express - Um framework NodeJS para Aplicações Web<br/>EJS - Linguagem de modelagem para criação de páginas HTML utilizando Javascript<br/>Nodemon - Um utilitário que reinicia automaticamente o servidor NODEJS quando houver qualquer alteração em nossos scripts<br/> npm - Um gerenciador de pacotes Javascript</body></html>");
	}
else{
	res.end();
}



});
server.listen(3000);