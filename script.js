//HW4 script

// returns table created
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
		if (i==0)
		{
			row.setAttribute("id","HeaderRow");
		}
		
		for (var j=0; j<4; j++)
		{
			var cell=document.createElement("TD");
			row.appendChild(cell);
			cell.style.border="thin solid #0000FF";
			
			if (i==0)
			{
				cell.setAttribute("id","HeaderCell");
				var celltext=document.createTextNode("Header " + (j+1));
			}
			else
			{
				var celltext=document.createTextNode((i) + "," + (j+1));
			}
			cell.appendChild(celltext);
		}
	}
	return table;
}


//recieves a table and initializes first cell
//returns initialzed cell
function initializeCell( sTable)
{
	var sRow=sTable.firstElementChild;
	sRow=sRow.nextElementSibling;
	var sCell=sRow.firstElementChild;
	sCell.style.border="thick solid #0000FF";
	return sCell;
}

function moveUp(oldCell)
{
	
}

function moveDown(oldCell)
{
	
}

function moveRight(oldCell)
{
	if(oldCell.previousElementSibling ==="undefined" || !oldCell.nextElementSibling)
	{
		return;
	}
	else
	{
		selectedCell=oldCell.nextElementSibling;
		oldCell.style.border="thin solid #0000FF";
		selectedCell.style.border="thick solid #0000FF";
	}
}

function moveLeft(oldCell)
{
	if(oldCell.previousElementSibling ==="undefined" || !oldCell.previousElementSibling)
	{
		return;
	}
	else
	{
		selectedCell=oldCell.previousElementSibling;
		oldCell.style.border="thin solid #0000FF";
		selectedCell.style.border="thick solid #0000FF";	
	}

}

//create table
var TBL=createTable();

//initialize table 
var selectedCell=initializeCell(TBL);

//Create Buttons
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

//If buttons are clicked
upBtn.addEventListener("click", moveUp(selectedCell));
downBtn.addEventListener("click", moveDown(selectedCell));
leftBtn.addEventListener("click",moveLeft(selectedCell));
rightBtn.addEventListener("click",rightLeft(selectedCell));
