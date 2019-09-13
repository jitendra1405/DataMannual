var express = require("express");
var mysql = require('mysql');
var app = express();
app.use(express.logger());

var db_config = {
    host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv'
};

var connection;

app.get('/', function(request, response) {
    connection.query('SELECT * from user', function(err, rows, fields) {
           
        response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
