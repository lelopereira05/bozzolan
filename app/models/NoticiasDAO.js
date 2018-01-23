function NoticiasDAO(connection){
this._connection = connection();
}




// NoticiasDAO.prototype.getNoticias = function(connection, callback){
// 	this._connection.query('Select * from noticias order by data_criacao desc', callback);
// }


// NoticiasDAO.prototype.salvarNoticia = function(noticia, connection, callback){
// 	this._connection.query('INSERT INTO noticias SET ? ', noticia, callback)
// }

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
   var request 
}

// NoticiasDAO.prototype.getNoticia = function(id, callback){
// 	console.log(id.ID);
// 	this._connection.query('Select * from noticias where ID = ' + id.ID, callback);
// }



NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	console.log(this._connection);
	this._connection.close();
}


// NoticiasDAO.prototype.getNoticias = function(res){
//     this._connection.open(function(err, mongoclient){
//          mongoclient.collection("noticias", function(err, collection){
//              collection.find().toArray(function (err, result){
//                 res.render("noticias/noticias", { noticias : result });
//                 mongoclient.close();
//             });
//         });
//     });
// }

// NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
// 	this._connection.open(function(err, mongoclient){
//         mongoclient.collection("noticias", function(err, collection){
//             collection.insert(noticia);
//             mongoclient.close();
//         });
//     });
// }


// NoticiasDAO.prototype.get5UltimasNoticias = function(res){
//     this._connection.open(function(err, mongoclient){
//         mongoclient.collection("noticias", function(err, collection){
//             collection.find().limit(5).toArray(function (err, result){
//                res.render("home/index", { noticias : result });
//                mongoclient.close();
//            });
//        });
//     });
// }


module.exports = function(){
	return NoticiasDAO;
}

	
//	return this;
