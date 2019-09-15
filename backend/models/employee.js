function employeeModel(){
	var mysql = require("../config/MysqlClass");
//================================================================================================
	this.get = function(callback){
		var sql = `select 
						 id_employee as id,
						 name_employee as name,
						 sex,
						 address,
						 tel,
						 email 
					from 
						employee `;
		 
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getLimit = function(start,end,callback){
		 var sql = `select 
						id_employee as id,
						name_employee as name,
						address,
						tel,
						sex,
						email 
					from 
					 	employee 
					LIMIT '`+start+`','`+end+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getIdMax = function(callback){
		var sql = "select Max(id) as MaxId  from employee";
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

//================================================================================================
	this.getById = function(id,callback){
		var sql =  `select 
						id_employee as id,
						name_employee as name,
						address,
						tel,
						sex,
						email 
					from 
						employee 
					where 
						id_employee = '`+id+`' `;
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}
	this.getByName = function(name,callback){
		var sql = `select 
						id_employee as id,
						name_employee as name,
						address,
						tel,
						sex,
						email  
					from 
						employee 
					where 
						name_employee = '`+name+`'`;
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}
	this.getByText = function(text,callback){
		var sql = `select 
						id_employee as id,
						name_employee as name,
						address,
						tel,
						sex,
						email 
					from 
						employee 
					where 
						name_employee like '%`+text+`%'
					or 
						id_employee like '%`+text+`%'
					or
						sex = '`+text+`'`;
						
		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

	this.getBySex = function(sex,callback){
		var sql = `select 
						id_employee as id,
						name_employee as name,
						address,
						tel,
						sex,
						email 
					from 
						employee 
					where 
						sex = '`+sex+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

	this.save = function(data,callback){
		var sql = `INSERT INTO employee (
						 name_employee,
						 address,
						 sex,
						 tel,
						 email,
						 access_date,
						 id_employee_type,
						 username,
						 password) 
					VALUES(
						'`+data.name+`',
						'`+data.address+`',
						'`+data.sex+`',
						'`+data.tel+`',
						'`+data.email+`',
						CURDATE(),1,
						'`+data.username+`',
						'`+data.password+`')`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query);
	 	});
	}

	this.update = function(id,data,callback){
		var sql =  `UPDATE 
						employee 
					SET 
						name_employee ='`+data.name+ `',
						sex ='`+data.sex+ `',
						address ='`+data.address+ `',
						email = '`+data.email+ `',
						tel ='`+data.tel+ `'
					where 
						id_employee ='`+id+ `'`;


		mysql.QueryDB(sql,function(err_query,data){
			callback(err_query);
		});
	}

	this.delete = function(id,callback){
		var sql = `DELETE FROM 
						employee
				   where 
						id_employee = '`+id+`'`;

		mysql.QueryDB(sql,function(err_query,data){
	 		callback(err_query,data);
	 	});
	}

}
module.exports = new employeeModel();
