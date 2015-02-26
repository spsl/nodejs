
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'sunsai',
	database:'jiedian'
});	
connection.connect();

var users = null;

connection.query('select * from jd_user',function(err,rows,fields){
	if(err) throw err;
	
	console.log('herhj',rows[0].username);
	users = rows;
	for(var i=0;i<users.length;i++){
		console.log("username:",users[i].username);
		console.log("password:",users[i].password);
	}
	
});	
connection.end();