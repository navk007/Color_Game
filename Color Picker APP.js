var square=document.getElementsByClassName("square");
var numberofSquare=6;
var color=generateRandomColor(numberofSquare);
var pickerColor=RandomColor();
var h1=document.querySelector("h1");
var colorDisplay=document.querySelector("span");
var messageDisplay=document.querySelector("#Message");
var reset=document.querySelectorAll("button")[0];
var modes=document.querySelectorAll(".mode");


reset.addEventListener("click",function(){
	Reset();
})

for(var i=0;i<modes.length;i++)
{
	modes[i].addEventListener("click",function(){
		modes[0].classList.remove("selected");
		modes[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy")
		{
			numberofSquare=3;
		}
		else
		{
			numberofSquare=6;
		}
		Reset();
	})
}

function Reset()
{
	color=generateRandomColor(numberofSquare);
	pickerColor=RandomColor();
	messageDisplay.textContent="";
	colorDisplay.textContent=pickerColor;	
	for(var i=0;i<square.length;i++)
	{
		if(color[i])
		{
			square[i].style.display="block";
			square[i].style.backgroundColor=color[i];
		}
		else
		{
			square[i].style.display="none";
		}	
	}
	h1.style.backgroundColor="steelblue";
	reset.textContent="New Colors";
}

	
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numberofSquare=6;
// 	color=generateRandomColor(numberofSquare);
// 	pickerColor=RandomColor();
// 	colorDisplay.textContent=pickerColor;
// 	for(var i=0;i<square.length;i++)
// 	{
// 		square[i].style.backgroundColor=color[i];
// 	}
// })

// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numberofSquare=3;
// 	color=generateRandomColor(numberofSquare);
// 	pickerColor=RandomColor();
// 	colorDisplay.textContent=pickerColor;
// 	for(var i=0;i<square.length;i++)
// 	{
// 		if(i<3)
// 		{
// 			square[i].style.backgroundColor=color[i];
// 		}
// 		else
// 		{
// 			square[i].style.display="none";
// 		}
// 	}
// })

colorDisplay.textContent=pickerColor;
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=color[i];
}
for(var i=0;i<square.length;i++)
{
	square[i].addEventListener("click",function(){
		var SelectedColor = this.style.backgroundColor;
		if(SelectedColor === pickerColor)
		{	
			messageDisplay.textContent="Correct!!"
			for(var j=0;j<square.length;j++)
			{
				square[j].style.backgroundColor=pickerColor;
				h1.style.backgroundColor=pickerColor;
				reset.textContent="Play again?"
			}
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try again";
		}
	})
}
 
function RandomColor()
{
	var random=Math.floor(Math.random() * color.length);
	return color[random];	
}

function randomcolor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

function generateRandomColor(num)
{	
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor())
	}
	return arr;
}