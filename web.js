var express = require("express");
var mysql = require('mysql');
var app = express();



app.use('/', express.static(`${process.cwd()}/../client`));


app.get('/myform', function(req, res){ 
    var myText = req.query.mytext; //mytext is the name of your input box
    res.send('Your Text:' +myText); 
}); 



var db_config = {
    host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv'
};

var connection;

connection = mysql.createConnection(db_config);
app.get('/', function(request, response) {
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
	    
        response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

