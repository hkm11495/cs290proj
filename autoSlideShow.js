/*https://www.w3schools.com/w3css/w3css_slideshow.asp*/

window.addEventListener('DOMContentLoaded', startShow)

var slideIndex = 0;
var numSlides=4;

function startShow()
{
	setInterval(slideshow,5000);
	
}

function slideshow()
{
	for (var i=0;i<numSlides; i++)
	{
		var imgID= "img" + i;
		document.getElementById(imgID).style.visibility='hidden';
	}
	
	document.getElementById('img'+slideIndex).style.visibility='visible';
	
	slideIndex++;
	
	if (slideIndex == 4)
	{
		slideIndex=0;
	}
	
}