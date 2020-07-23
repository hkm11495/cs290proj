

var statesArray = [
"AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA",
"HI","IA","ID","IL","IN","KS","KY","LA","MA","MD",
"ME","MI","MN","MO","MS","MT","NC","ND","NE","NH",
"NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC",
"SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"]; 


// Main function 
function GFG_Fun() { 
	for (var i = 0; i < statesArray.length; i++) { 
		var optn = statesArray[i]; 
		var el = document.createElement("option"); 
		el.textContent = optn; 
		el.value = optn; 
		select.appendChild(el); 
	} 
} 
