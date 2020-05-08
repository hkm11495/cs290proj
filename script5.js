
	 <!-- GET REQUEST-->
  
	  document.addEventListener('DOMContentLoaded', bindButtonsGet);
	  document.addEventListener('DOMContentLoaded',bindButtonsPost);
      
	  function bindButtonsGet()
	  {
		
			document.getElementById('urlSubmit').addEventListener('click', function(event)
			{
		    <!--object that can make an HTTP request and return the data it gets from that request.-->
	  	   	var req = new XMLHttpRequest();
		    var city=document.getElementById('CITY_NAME').value;
		    var zip=document.getElementById('ZIP_CODE').value;
		    var country=document.getElementById('COUNTRY_CODE').value;
            var apiID='&appid=5254bba1382a3407c2af112214612a51';
			var rootURL='http://api.openweathermap.org/data/2.5/weather?q=';
			var comma =',';
			var getURL;
			
			<!--if zipcode and city is missing-->
			
			if (zip.length == 0 && city.length == 0)
			{
			  return;
			}
			<!--search by zip, country-->
			else if (city.length == 0)
			{
			  getURL=rootURL + zip + comma + country + apiID;
			}
			else
			{
			  getURL=rootURL + city + comma + country + apiID;
			}
            
		    <!--false means synchronous request, true=asynchronous-->
            req.open("GET", getURL, true);
           req.addEventListener('load', function()
		   {
		    <!--response=data retrieved from the request-->
			if (req.status >=200 && req.status <400)
			{
			  
		      var response=JSON.parse(req.responseText);
			  console.log(response);
			  var temperature=response.main
			  document.getElementById("weather").textContent=temperature['temp'];
			}
			else
			{
			  console.log("Error: " + req.status);
			}
			});
		
			req.send(null);
            event.preventDefault();
		  })
      }
	  
	  function bindButtonsPost()
	  {
		document.getElementById('urlSubmit2').addEventListener('click', function(event)
	    {
          var request = new XMLHttpRequest();
          var payload = {INPUT:null};
          payload.INPUT = document.getElementById('INPUT').value;
          request.open('POST', 'http://httpbin.org/post', true);
          request.setRequestHeader('Content-Type', 'application/json');
          request.addEventListener('load',function()
		  {
            if(request.status >= 200 && request.status < 400)
	        {
              var responsePost = JSON.parse(request.responseText);
			  console.log(responsePost);
              document.getElementById('inputData').textContent = responsePost['json'].INPUT;
              console.log(responsePost['INPUT']);
			} 
	        else 
	        {
              console.log("Error in network request: " + request.statusText);
            }
	      });
        request.send(JSON.stringify(payload));
        event.preventDefault();
      });
	  }
    