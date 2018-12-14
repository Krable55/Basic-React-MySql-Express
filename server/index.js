//require express and http modeules
var express = require('express'), http = require('http');
const bodyParser = require('body-parser');
//create express server
var db = require('../db')
var app = express();
var port = 3000;
app.set('port', process.env.port || port);
//serve compiled page
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../dist/'));
/////	GET REQUESTS TO '/' SHOULD SEND INDEX.HTML
// app.get('/', function(req, res){
	
// 	res.sendFile('/home/kyle/Documents/HackReactor 35/Week - 5/hrr35-grocery-list/client/dist/')

// })


// GET request
app.get('/groceries', function(req, res){
	//create query to grocery table in db
	db.query('select * from groceries', function(err, results){
			if(err){console.log('ERROR with db')}
	      res.send(results) //return send results
		})
    
}) 
//POST request
app.post('/groceries', function(req, res){
	//create query to grocery table in db
	db.query(`insert into groceries values (?, ?)`, [req.body.item, req.body.quantity], function(err, result){
       if(err){
       	console.log("ERROR WITH POST");
       }
       console.log(`Added ${req.body.item} to list`)
       res.sendStatus(201);
	})
    
})  

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// console.log(__dirname);

//POST request