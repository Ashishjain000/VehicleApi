'use strict';

var sql = require('mssql');

var config = {
    server: 'ashishdb.database.windows.net',
    database: 'ASHISHDB',
    user: 'ashish',
    password: 'Chand@8983',
    options: 
    {
       encrypt: true
    }
   // port: 1433
};


exports.getvehicleList = function(req, res) {
  //  var dbConn = new sql.Connection(config);
    sql.connect(config).then(request=> {
        request.query`select * from bookmaster`.then(recordSet=> {
            console.log(recordSet);
            res.json(recordSet.recordset);
            sql.close();
        }).catch(err=> {
            //8.
            console.log(err);
            sql.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
   // res.json("test");
}