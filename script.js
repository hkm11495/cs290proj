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
		else
		{
			row.setAttribute("id", "NonHeaderRow")
		}
		
		for (var j=0; j<4; j++)
		{
			var cell=document.createElement("TD");
			row.appendChild(cell);
			cell.style.border="thin solid #0000FF";
			
			if (i==0)
			{
				//cell.setAttribute("id","Selected");
				var celltext=document.createTextNode("Header " + (j+1));
			}
			else
			{
				//cell.setAttribute("id","notSelected");
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
	sCell.setAttribute("id","Selected");
	sCell.style.border="thick solid #0000FF";
	return sCell;
}


function initializeRow( sTable)
{
	var sRow=sTable.firstElementChild;
	sRow=sRow.nextElementSibling;
	return sRow;
}


function moveUp()
{
	
}

function moveDown()
{
	if(selectedCell.parentElement.nextElementSibling ==="undefined" || !selectedCell.parentElement.nextElementSibling)
	{
		return;
	}
	else
	{
		selectedCell.style.border="thin solid #0000FF";
		selectedCell=selectedCell.parentElement.nextElementSibling.firstElementChild;
		for (var i=0; i<rlCounter; i++)
		{
			selectedCell=selectedCell.nextElementSibling;
		}
		
		selectedCell.style.border="thick solid #0000FF";
	}
}

function moveRight()
{
	if(selectedCell.nextElementSibling ==="undefined" || !selectedCell.nextElementSibling)
	{
		return;
	}
	else
	{
		if (rlCounter != 3)
		{
			rlCounter++;
		}
		selectedCell.style.border="thin solid #0000FF";
		selectedCell=selectedCell.nextElementSibling;
		selectedCell.style.border="thick solid #0000FF";
	}
}

function moveLeft()
{
	if(selectedCell.previousElementSibling ==="undefined" || !selectedCell.previousElementSibling)
	{
		return;
	}
	else
	{
		if (rlCounter != 0)
		{
			rlCounter--;
		}
		selectedCell.style.border="thin solid #0000FF";
		selectedCell=selectedCell.previousElementSibling;
		selectedCell.style.border="thick solid #0000FF";	
	}

}
var rlCounter=0;

//create table
var TBL=createTable();

//initialize table 
var selectedCell=initializeCell(TBL);
var selectedRow=initializeRow(TBL);

//Create Buttons
var upBtn=document.createElement("BUTTON");
upBtn.setAttribute("id","upButton");
upBtn.innerHTML = "Up"; 
document.body.appendChild(upBtn);

var downBtn=document.createElement("BUTTON");
downBtn.setAttribute("id","downButton");
downBtn.innerHTML = "Down";
document.body.appendChild(downBtn);

var leftBtn=document.createElement("BUTTON");
leftBtn.setAttribute("id","leftButton");
leftBtn.innerHTML = "Left";
document.body.appendChild(leftBtn);

var rightBtn=document.createElement("BUTTON");
rightBtn.setAttribute("id","rightButton");
rightBtn.innerHTML = "Right";
document.body.appendChild(rightBtn);



//If buttons are clicked
upBtn.addEventListener("click", moveUp);
downBtn.addEventListener("click", moveDown);
leftBtn.addEventListener("click",moveLeft);
rightBtn.addEventListener("click",moveRight);
