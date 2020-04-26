//HW4 script

function createTable()
{
	
	var table = document.createElement("TABLE");
	table.setAttribute("id", "table1");
	document.body.appendChild(table);
	
	var row=document.createElement("TR");
	document.getElementById("table1").appendChild(row);
	
	var cell=document.createElement("TD");
	row.appendChild(celltext);
	var celltext=document.createTextNode("cell");
	cell.appendChild(celltext);
	/*
	for (var i=0; i<4; i++)
	{
		var row = table.insertRow(0);
		for (var j=0; j<4; j++)
		{
			
			var cell=row.insertCell(j);
			
			cell.innerHTML="cell";
		}
	}
	*/
	// Create an empty <tr> element and add it to the 1st position of the table:
	//var row = table.insertRow(0);
	//var cell1 = row.insertCell(0);
	//var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	//cell1.innerHTML = "NEW CELL1";
	//cell2.innerHTML = "NEW CELL2";
}


createTable();