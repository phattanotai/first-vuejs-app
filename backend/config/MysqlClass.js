function MysqlClass(){
//=================================================================================================
	var mysql = require("mysql");
//=================================================================================================
	var config = {
		host:     "localhost",
		user:     "root",
		password: "",
		database: "homework2"
	}
//=================================================================================================
	this.testConnection = function(){
		db = mysql.createConnection(config);
		db.connect(function(err){
			if(err){
				console.log(err);
				process.exit(0);
			} 
			else{
				console.log("Mysql Server is running ");
			}
		});
	}
//=================================================================================================
	this.connection = function(){
		db = mysql.createConnection(config);
		db.connect(function(err){
			if(err){
				console.log(err);
			} 
		});
	}

	this.close = function(){
		db.end(function(err){
			if(err){
				console.log(err.message);
			}
			console.log("cloce Mysql Connentions");
		});
	}
//=================================================================================================
	this.QueryDB = function(sql,callback){
		db.query(sql,function(err_query,data){
			callback(err_query,data);
		});
	}

//=================================================================================================

}

module.exports = new MysqlClass();

