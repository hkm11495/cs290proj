/*https://www.w3schools.com/w3css/w3css_slideshow.asp*/

window.addEventListener('DOMContentLoaded', startShow)

var slideIndex = 0;
var numSlides=4;

function startShow()
{
	//initializes the last image
	for (var i=0;i<numSlides-1; i++)
	{
		document.getElementsByClassName('slideShow')[i].style.visibility='hidden';
	}
	setInterval(slideshow,5000);
	
}

function slideshow()
{
	for (var i=0;i<numSlides; i++)
	{
		document.getElementsByClassName('slideShow')[i].style.visibility='hidden';
	}
	
	document.getElementsByClassName('slideShow')[slideIndex].style.visibility='visible';
	
	slideIndex++;
	
	if (slideIndex == 4)
	{
		slideIndex=0;
	}
	
}