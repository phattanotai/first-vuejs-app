const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//
var mysql = require('./config/MysqlClass');
var users = require('./api/users');
var customers = require('./api/customers');
//
const app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 
app.use('/users', users);
app.use('/customers', customers);

//
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err.message);
});


//
mysql.testConnection();


var port =  '3000';
app.set('port', port);


const server = app.listen(port,function(){
    console.log("Server is running on port 3000");
}).on('error', onError);



function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
    switch (error.code) {
      case 'EACCES':
        console.error("port "+ port + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error("port "+ port + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }