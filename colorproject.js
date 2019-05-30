
var colordisplay = document.getElementById('colordisplay');
var squares = document.querySelectorAll(".square");
var messagedisplay = document.querySelector("#message");
var numsquares = 6;
var colors = generaterandomcolors(numsquares);
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;

function generaterandomcolors(num){
	var arr = [];
	for(var i=0;i<num;i++){
        arr.push(randomcolor());

	}
	//console.log(arr);
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

for(var i=0;i<squares.length;i++)
 {
   squares[i].style.background = colors[i];
   squares[i].addEventListener("click",function(){
       var clickedcolor = this.style.background;
       if(clickedcolor === pickedcolor){
       	messagedisplay.textContent = "correct!";
       	resetbutton.textContent = "playagain?";
       	changecolors(clickedcolor);
       	h1.style.background = clickedcolor;
       }
       else{
       	this.style.background = "#232323";
       	messagedisplay.textContent = "try again";
       }
   });
}
function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

resetbutton.addEventListener("click",function(){
       if(numsquares === 3){
       	colors = generaterandomcolors(numsquares);
   pickedcolor = pickcolor();
   console.log(colors);
   console.log(pickedcolor);
   colordisplay.textContent = pickedcolor;
   resetbutton.textContent = "New colors";
   messagedisplay.textContent = " ";
   for(var i=0;i<squares.length;i++){
   	if(colors[i]){
   		squares[i].style.background = colors[i];	
   	}else{
   		squares[i].style.display = "none";
   	}
   }
   h1.style.background = "steelblue";
       }else{
       	numsquares = 6;
       	colors = generaterandomcolors(numsquares);
   pickedcolor = pickcolor();
   colordisplay.textContent = pickedcolor;
   resetbutton.textContent = "New colors";
   messagedisplay.textContent = " ";
   for(var i=0;i<squares.length;i++){
   	squares[i].style.background = colors[i];
   }
   h1.style.background = "steelblue";
       }
});
easybtn.addEventListener("click",function(){
	h1.style.background = "steelblue";
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	console.log(colors);
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
            squares[i].style.display = "none";
		}
	}
	
});
hardbtn.addEventListener("click",function(){
	h1.style.background = "steelblue";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares = 6;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
