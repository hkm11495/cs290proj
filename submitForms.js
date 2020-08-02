
//var ownerIDs=[];
//var dogIDs=[];
//var ownerForms=document.getElementsByName("custForm");
document.addEventListener('DOMContentLoaded',sendformInfo);
//const baseURL='http://flip3.engr.oregonstate.edu:8531/';

function sendformInfo()
{
	document.getElementById('submitNew').addEventListener('click', function(event)
	{
			var request = new XMLHttpRequest();
			var formContent={};
			//assign form keys and values to object
			var inputs =document.getElementsByName("custForm")[0].elements;
			console.log(inputs);
			for (var j=0; j<inputs.length;j++)
			{
				formContent[inputs[j].name]=(inputs[j].value);
			}

			//create asynchronous request
			console.log(formContent);
			request.open("POST", 'http://flip3.engr.oregonstate.edu:8919/', true);
			request.setRequestHeader('Content-Type', 'application/json');
			request.addEventListener('load',function()
			{
				if(request.status >= 200 && request.status < 400)
				{
				  var response = JSON.parse(request.responseText);
				  console.log('response recieved');
				} 
				else 
				{
				  console.log(request.status);
				}
	      });
			console.log(JSON.stringify(formContent))
			request.send(JSON.stringify(formContent));
			event.preventDefault();
		});
}

