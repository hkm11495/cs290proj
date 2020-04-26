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

function initializeCell()
{
	document.
}


createTable();

var upBtn=document.createElement("BUTTON");
upBtn.innerHTML = "Up"; 
document.body.appendChild(upBtn);

var downBtn=document.createElement("BUTTON");
downBtn.innerHTML = "Down";
document.body.appendChild(downBtn);

var leftBtn=document.createElement("BUTTON");
leftBtn.innerHTML = "Left";
document.body.appendChild(leftBtn);

var rightBtn=document.createElement("BUTTON");
rightBtn.innerHTML = "Right";
document.body.appendChild(rightBtn);

