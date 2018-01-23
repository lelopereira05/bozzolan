var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

var expressSession = require('express-session');


var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')


app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(expressValidator());

/**Configura o middleware express-session */
app.use(expressSession({
  secret : 'blkjiutnljo',
  resave: false,
  saveUninitialized: false
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
        .include('app/routes')
        .then('config/dbConnection.js')
        .then('app/models')
        .then('app/controllers')
        .into(app);


/* middleware que configura páginas de status*/
app.use(function(req, res, next){
  res.status(404).render('erros/404');
  next();
});

app.use(function(req, res, next){
  res.status(500).render('erros/500');
  next();
});




module.exports = app;




/*app.use(expressValidator({
    customValidators: {
      isValidDate: isValidDate
    }
  }));




function isValidDate(value) {
    if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
  
    const date = new Date(value);
    if (!date.getTime()) return false;
    return date.toISOString().slice(0, 10) === value;
  }*/