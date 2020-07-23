//

var dayCost=50;
var nightCost=65;
var lenOfStay=document.getElementById("duration");
var baseCost=document.getElementById("baseCost");
var startDate=document.getElementById('startDate');
var endDate= document.getElementById('endDate');


document.getElementById("daycare").addEventListener('click',function(){
	lenOfStay.value=0;
	baseCost.value=dayCost;

})

document.getElementById("overnight").addEventListener('click',function(){
	if (lenOfStay.value==0)
	{
		lenOfStay.value='';
	}
	if (baseCost.value==50)
	{
		baseCost.value='';
	}
})

endDate.addEventListener('change',(event)=>{
	if (startDate.value!='')
	{
		console.log(endDate.value,startDate.value);
	}
})