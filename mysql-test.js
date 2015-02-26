
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'sunsai',
	database:'jiedian'
});	
connection.connect();

var users = null;

connection.query('call jiedian.jd_user_get_all();',function(err,rows,fields){
	if(err) throw err;
	
	console.log('herhj',rows[0][0].username);
	console.log('length=',rows.length);
	console.log(rows);
	users = rows;
	for(var i=0;i<users.length;i++){
		console.log("username:",users[0][i].username);
		console.log("password:",users[0][i].password);
	}
	
});	
connection.end();