//HW4 script

function createTable()
{
	
	var table = document.createElement("TABLE");
	table.setAttribute("id", "table1");
	document.body.appendChild(table);
	
	
	for (var i=0; i<4; i++)
	{
		var row=document.createElement("TR");
		table.appendChild(row);
		
		for (var j=0; j<4; j++)
		{
			var cell=document.createElement("TD");
			row.appendChild(cell);
	
			var celltext=document.createTextNode(i + "," +j);
			cell.appendChild(celltext);
		}
	}
}


createTable();