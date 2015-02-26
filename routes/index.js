var express = require('express');
var router = express.Router();

function getUserByName(username) {
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'sunsai',
		database:'jiedian'
	});	
	connection.connect();
	var users = null;
	connection.query('call jiedian.jd_user_get_by_username(?);',[username],function(err,results,fields){
		if(err) throw err;
		console.log('result.length=',results.length);
		users = results[0];
		console.log('user.length=',users.length);
	});	
	connection.end();
	console.log('test');
	console.log(users);
	
	return users;
}


router.get('/Login', function(req, res, next) {
  
  
  res.render('login',{title:'susnai'});
});

router.post('/Login', function(req, res, next) {
  
  console.log("post login");
  console.log('username',req.body.name);
  
  res.render('index',{username:req.body.name,password:req.body.password});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  var user = getUserByName('sunsai');
  res.render('index', { title: 'Express',user:user });
});



module.exports = router;



















