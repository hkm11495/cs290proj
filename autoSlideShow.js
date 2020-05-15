var slideIndex=0;

var x=document=getElementsByClassName("slideShow");	
autoSlideshow();

setInterval(function autoSlideshow()
{

	
    x[slideIndex].style.display="block";
	slideIndex++;
	if (slideIndex > x.length-1)
	{
		slideIndex=0
	}
	
}, 3500);