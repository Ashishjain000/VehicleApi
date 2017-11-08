var express = require('express'),
sql = require('mssql'),
config = {
    server: 'localhost',
    database: 'Company',
    user: 'sa',
    password: 'sa',
    port: 1433
},
app = express(),
port = process.env.PORT || 3000;

var routes = require('./api/routes/vehicleRoute'); //importing route
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);