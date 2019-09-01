function storageModel(){
	var mysql = require("../config/MysqlClass");
//================================================================================================
	this.get = function(callback){
		var sql = `select 
						 id_customer as id,
						 name_customer as name,
						 sex,
						 address,
						 tel,
						 email 
					from 
						customer `;
		 
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getCustometLimit = function(start,end,callback){
		 var sql = `select 
						id_customer as id,
						name_customer as name,
						address,
						tel,
						sex,
						email 
					from 
						customer 
					LIMIT '`+start+`','`+end+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getIdMax = function(callback){
		var sql = "select id  from customer";
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getById = function(id,callback){
		var sql =  `select 
						id_customer as id,
						name_customer as name,
						address,
						tel,
						sex,
						email 
					from 
						customer 
					where 
						id_customer = '`+id+`' `;
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}
	this.getByName = function(name,callback){
		var sql = `select 
						id_customer as id,
						name_customer as name,
						address,
						tel,
						sex,
						email  
					from 
						customer 
					where 
						name_customer = '`+name+`'`;
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}
	this.getByText = function(text,callback){
		var sql = `select 
						id_customer as id,
						name_customer as name,
						address,
						tel,
						sex,
						email 
					from 
						customer 
					where 
						name_customer like '%`+text+`%'
					or 
						id_customer like '%`+text+`%'
					or
						sex = '`+text+`'`;
						
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

	this.getBySex = function(sex,callback){
		var sql = `select 
						id_customer as id,
						name_customer as name,
						address,
						tel 
					from 
						customer 
					where 
						sex = '`+sex+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

	this.save = function(data,callback){
		var sql = `INSERT INTO customer (
						 name_customer,
						 sex,
						 address,
						 tel,
						 email,
						 access_date) 
					VALUES(
						'`+data.name+`',
						'`+data.sex+`',
						'`+data.address+`',
						'`+data.tel+`',
						'`+data.email+`',
						CURDATE())`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query);
	 	});
	}

	this.update = function(id,data,callback){
		var sql =  `UPDATE 
						customer 
					SET 
							name_customer ='`+data.name+ `',
							sex ='`+data.sex+ `',
							address ='`+data.address+ `',
							email = '`+data.email+ `',
							tel ='`+data.tel+ `'	
					where 
							id_customer ='`+id+ `'`;


		mysql.QueryDB(sql,function(err_query,data){
			callback(err_query);
		});
	}

	this.delete = function(id,callback){
		var sql = `DELETE FROM 
						customer
				   where 
						id_customer = '`+id+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

}
module.exports = new storageModel();
