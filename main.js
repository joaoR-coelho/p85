canvas=document.getElementById('myCanvas')
ctx=canvas.getContext('2d')
greencar_Width=75;
greencar_Height=100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";
greencar_x=5;
greencar_y=225;
function add() {
	background_ImgTag=new Image()
	background_ImgTag.onload=uploadBackground;
	background_ImgTag.src= greencar_Image;
	background_ImgTag=new Image()
	background_ImgTag.onload=uploadGreenCar;
	background_ImgTag.src= greencar_Image;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag,0,0,canvas.width,canvas.height)
}

function uploadGreenCar() {
	ctx.drawImage(greenCar_ImgTag,greenCar_x,greenCar_y,greenCar.width,greenCar.height)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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

function up()
{
	if (greencar_y>=0) {
		greencar_y=greencar_y-10;
		console.log("wen up arrow pressed, x =" +greencar_x+ " y=" +greencar_y)
		uploadBackground();
		uploadGreenCar();
		
	}
}

function down()
{
	//Definir função para mover o carro para baixo
}

function left()
{
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	//Definir função para mover o lado direito do carro
}
