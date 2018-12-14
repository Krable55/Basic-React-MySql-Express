//require mysql
var mysql = require('mysql');
//conect to database
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'groceryList'

})

connection.connect();


module.exports = connection;
