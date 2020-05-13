


app.get('/get-loopback-improved',function(req,res)
{
	var qParams = [];
  
	//make an array of object of the format name: parameter.
	for (var p in req.query)
	{

	qParams.push({'name':p,'value':req.query[p]})

	}
	var context = {};
	context.dataList = qParams;
	res.render('get-loopback-improved', context);
});