var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var bodyParser = require('body-parser');
var CORS=require('cors');

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.set('mysql', mysql);
app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:false}));
app.use(CORS());
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);

app.use(bodyParser.json());
//app.use('/newCustomer', require('./newCustomer.js'));
//app.use('/newCustomer', require('./newCustomer.js'));
//app.use('/static', express.static('public'));
/*

function getCustomerID(res, mysql, context, firstName, lastName,complete)
{
	inserts=[firstName, lastName];
	mysql.pool.query("SELECT customerID FROM customers WHERE  firstName=? and lastName=?", inserts, function(error, results, fields){
		if(error){
			res.write(JSON.stringify(error));
			res.end();
		}
		context.id = results[0];
		return context.id;
	});
}s
*/
app.get('/',function(req,res,next)
{
		res.send('INITIAL GET REQUEST');
});


function getCustomerID(fName, lName, callback) 
{
		mysql.pool.query("SELECT customerID FROM customers WHERE firstName=? and lastName=?", [fName, lName], (err, result)=>
			{
				if(err)
				{
					callback(err);
				}
				else
				{
					callback(null, result[0].customerID)
				}
		});
}



app.post('/', function(req, res){
	var mysql = req.app.get('mysql');
	var custID='';
	console.log("inside post")
	var sqlInsert = "INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES (?,?,?,?)";
	var inserts1 = [req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.email];
	var sqlInsert2 ="INSERT INTO customersAddress (customerID, address, city, state, zipcode) VALUES (?,?,?,?,?)"
	var sql1 = mysql.pool.query(sqlInsert,inserts1,function(error, results, fields){
		if(error){
			res.write(JSON.stringify(error));
			res.end();
		}else{
			//Get the customer ID of the user just submitted
			getCustomerID(req.body.firstName, req.body.lastName, function(err, data)
			{
				if (err)
				{
					console.log(err);
					res.end();
				}
				else
				{
					custID=data;
					
					var inserts2 = [custID, req.body.address, req.body.city, req.body.state, req.body.zipcode];
					//insert customer Address
					var sql2 = mysql.pool.query(sqlInsert2,inserts2,function(error, results, fields){
						if(error)
						{
							res.write(JSON.stringify(error));
							res.end();
						}
						else
						{
							res.json(custID);
						}

					});
				}
			});
		}
	});
});



app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});