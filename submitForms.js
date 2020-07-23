document.getElementById("submit");
var ownerIDs=[];
var dogIDs=[];
var ownerForms=document.getElementsByName("custForm");
document.addEventListener('DOMContentLoaded',sendformInfo);

function sendformInfo()
{
	document.getElementById("submit").addEventListener("click",
	function(event){
		//loop through owner forms
		for (var i=0; i<ownerForms.length; i++)
		{
			var request = new XMLHttpRequest();
			var formContent={};
			var baseURL=""; //ENTER
			//assign form keys and values to object
			var inputs =ownerForms[i].elements;
			for (var j=0; j<inputs.length;j++)
			{
				formContent[inputs[j].name]=(inputs[j].value);
			}
			
			//create asynchronous request
			/*
			request.open("post", baseURL, true);
			request.setRequestHeader('Content-Type', 'application/json');
			request.addEventListener('load',function()
			{
				if(request.status >= 200 && request.status < 400)
				{
					var response = JSON.parse(request.responseText);
					ownerIds.push(request.id)
				} 
				else 
				{
					console.log(request.status);
				}
			});

			request.send(JSON.stringify(formContent));
			event.preventDefault();
			*/
		}
	});
}

