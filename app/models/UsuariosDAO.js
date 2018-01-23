/* importar o módulo do crypto */
var crypto = require("crypto");
function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err, collection){

            var senha_criptografada = crypto.createHash("md5").update(usuario.Senha).digest("hex");
            console.log(senha_criptografada);
            usuario.Senha = senha_criptografada;

            collection.insert(usuario);
            mongoclient.close();
        });
    });
}



UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("usuarios", function(err,collection){
            var senha_criptografada = crypto.createHash("md5").update(usuario.Senha).digest("hex");
            usuario.Senha = senha_criptografada;
            collection.find(usuario).toArray(function(err, result){
               console.log(result); 
               if(result[0] != undefined){
                   req.session.autorizado = true;
                   req.session.usuario = result[0].Usuario;
                  // req.session.perfil = result[0].Perfil;
               }
               if(req.session.autorizado){
                  return  res.redirect("/admin");
               }
               else{
                   res.send("admin/login", {validacao:{ }, });
               }
            });
            mongoclient.close();
        });
    });

}

module.exports = function(){
    return UsuariosDAO;
}