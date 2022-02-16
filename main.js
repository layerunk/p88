var can = new fabric.Canvas("myCanvas");

var xcoord = 20;
var ycoord = 20;

var block_image_width = 20;
var block_image_height = 20;

var hy = 400;
var hx = 800;

var gam = "";
var bo = "";

function load_img()
{
	fabric.Image.fromURL("golf-h.png" , function(Img) {
        gam = Img;
        gam.scaleToWidth(50);  
        gam.scaleToHeight(50);
        gam.set({
            top:hy , 
            left:hx
        }); 
        can.add(gam);
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png" , function(Img){
        bo = Img;
        bo.scaleToWidth(block_image_width);  
        bo.scaleToHeight(block_image_height);
        bo.set({
            top:ycoord , 
            left:xcoord
        }); 
        can.add(bo); 
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ycoord == hy) && (xcoord == hx)){
		can.remove(bo);

		document.getElementById("hd3").innerHTML = "You Have Hit The GOAL!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up() {

		if(ycoord > 20) {
			ycoord = ycoord-20;
	
			can.remove(bo);
	
			new_image();
		}
	}

	function down()
	{
		if(ycoord > 580) {
			ycoord = ycoord+20;
	
			can.remove(bo);
	
			new_image();
		}
	}

	function left()
	{
		if(xcoord >20)
		{
			xcoord = xcoord-20;
	
			can.remove(bo);
	
			new_image();
		}
	}

	function right()
	{
		if(xcoord <=980)
		{
			xcoord = xcoord+20;
		
			can.remove(bo);
		
			new_image();
	
		}
	}
	
}