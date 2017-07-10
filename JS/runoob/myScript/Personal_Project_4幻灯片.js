/*手动切换*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
{
	showSlides(slideIndex += n);
}

function currentSlide(n)
{
	showSlides(slideIndex = n);
}

/*function getEleByClaName(obj,claName)
{
	if(!document.getElementsByClassName)
	{
		var list = obj.getElementsByTagName("*");
		var arr = [];
		for(var i=0;i<list.length;i++)
		{
			if (list[i].className == name) 
			{
				//该浏览器版本不支持该方法时使用className属性
				arr.push(list[i]);
			}
		}
		return arr;
	}
	else
	{
		return document.getElementsByClassName(name);
	}
}*/

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length)
	{
		slideIndex = 1;
	}
	if(n < 1)
	{
		slideIndex = slides.length;
	}
	for(i=0;i<slides.length;i++)
	{
		slides[i].style.display = "none";
	}
	for(i=0;i<dots.length;i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

/*//自动切换
var slideIndex = 0;
showSlides();

function showSlides()
{
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for(i=0;i<slides.length;i++)
	{
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length)
	{
		slideIndex =1;
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides,2000);
}*/
