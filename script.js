//HW4 script

function createTable()
{
	
	var table = document.createElement("TABLE");
	table.setAttribute("id", "table1");
	document.body.appendChild(table);
	
	var row=document.createElement("TR");
	table.appendChild(row);
	
	var cell=document.createElement("TD");
	row.appendChild(cell);
	
	var celltext=document.createTextNode("cell");
	cell.appendChild(celltext);

}


createTable();