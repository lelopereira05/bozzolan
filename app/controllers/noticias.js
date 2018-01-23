module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection;
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
     noticiasDAO.getNoticias(res);
}


// module.exports.noticias = function(application, req, res){
//     var connection = application.config.dbConnection;
//     var noticiasDAO = new application.app.models.NoticiasDAO(connection);
   
//      noticiasDAO.getNoticias(connection, function(error, result){
//         res.render("noticias/noticias", {noticias : result});
//     });
// }

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection;
    var noticiasDAO = new application.app.models.NoticiasDAO(connection);
    var id = req.query;
    noticiasDAO.getNoticia(id, function(error, result){
            res.render("noticias/noticia", {noticia : result});
       });
}