var express = require('express'),
sql = require('mssql'),
config = {
    server: 'ashishdb.database.windows.net',
    database: 'ASHISHDB',
    user: 'ashish',
    password: 'Chand@8983',
   // port: 1433
},
app = express(),
port = process.env.PORT || 3000;

var routes = require('./api/routes/vehicleRoute'); //importing route
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);