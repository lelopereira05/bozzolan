var app = require('./config/server');

app.listen(3000, function(){
	console.log('Servidor ON');
});

// var http = require('http')
// var port = process.env.PORT || 1337;
// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     app.get('/', function(req, res) {
//       res.render('home/index');
//     });
// }).listen(port);
// index page 