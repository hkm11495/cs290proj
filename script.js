//HW4 script

function createTable()
{
	
	var table = document.createElement("TABLE");
	table.setAttribute("id", "table1");
	document.body.appendChild(table);
	document.getElementById("table1").style.border="thin solid #0000FF";
	
	for (var i=0; i<4; i++)
	{
		var row=document.createElement("TR");
		table.appendChild(row);
		
		for (var j=0; j<4; j++)
		{
			var cell=document.createElement("TD");
			row.appendChild(cell);
			cell.style.border="thin solid #0000FF";
			
			if (i==0)
			{
				var celltext=document.createTextNode("Header " + (j+1));
			}
			else
			{
				var celltext=document.createTextNode((i) + "," + (j+1));
			}
			cell.appendChild(celltext);
		}
	}
}


createTable();