const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//
var mysql = require('./config/MysqlClass');

var users = require('./api/users');
var customers = require('./api/customers');
var employees = require('./api/employees');
var promotions = require('./api/promotions');

//
const app = express();

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//
app.use(function (req,res,next){
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization,X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
// 
app.use('/users', users);
app.use('/customers', customers);
app.use('/employees', employees);
app.use('/promotions', promotions);
//



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.status +" "+err.message);
  });
}
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