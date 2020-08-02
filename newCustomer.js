module.exports = function(){
    var express = require('express');
    var router = express.Router();

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
	}


    router.post('/newCustomer', function(req, res){
        var mysql = req.app.get('mysql');
        var sqlInsert = "INSERT INTO customers (firstName, lastName, phoneNumber, email) VALUES (?,?,?,?)";
        var inserts1 = [req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.email];
        var sql1 = mysql.pool.query(sqlInsert,inserts,function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }else{
				var sqlInsert2 = "INSERT INTO customersAddress (customerID, address, city, state, zipcode) VALUES (?,?,?,?,?)";
				cID=getPerson(res, mysql, context, req.body.firstName, req.body.lastName, complete);
				var inserts2 = [cID,req.body.address, req.body.city, req.body.state, req.body.zip];
				
				var sql1 = mysql.pool.query(sqlInsert,inserts,function(error, results, fields){
					if(error){
						res.write(JSON.stringify(error));
						res.end();
					}else{
						res.render('newCustomer')
					}
				});
            }
		});
	});


    return router;
}();