//HW4 script

function tableValues()
{
	var table=document.getElementById("table1");
	var row=table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);

	// Add some text to the new cells:
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
}


tableValues();