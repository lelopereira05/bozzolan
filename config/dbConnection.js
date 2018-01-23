// var mysql = require('mysql');

// var connMySql = function()  {
//     return mysql.createConnection({
//         host : 'localhost',
//         user: 'root',
//         password: '1234',
//         database : 'portal_fabio_lords'
//     });
//    }

//   module.exports = function(){
//    return connMySql;
// } 

/** Importar o mongoDB */
// var mongo = require('mongodb');

// var connMongoDB = function(){
//   console.log('Entrou na função de conexão');
//   var db = new mongo.Db(
//       'Portal',
//       new mongo.Server(
//           'localhost', // string contendo o endereço do servidor
//           27017, // porta de conexão
//           {}
//       ),
//       {}
//   );

//   return db;
// }

// module.exports = function(){
//   return connMongoDB;
// }


/**Importar o SQL */
/*****login azure sql - user: azureAdmin   --senha @zuresql */


var mssql = require("mssql");
var dbConfig = {
    user: 'sa',
    password: 'saseads',
    server: 'localhost\\SQLEXPRESS',
    database: 'Portal_Bozzolan',
    connectionTimeout: 300000,
    requestTimeout: 300000,
    pool: {
        idleTimeoutMillis: 300000,
        max: 100
    }
}

var connection = function(){
var db = new mssql.ConnectionPool(dbConfig, function (err) {
    if (err)
        throw err; 
  });
 return db;
}

module.exports = function(){
  return connection; 
}