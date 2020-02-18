var x = mouseX;
var y = mouseY;


function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('white');
	//Face
	fill('lightblue');
	ellipse(mouseX, mouseY, 300);
	
	//Right eye
	fill('white');
	ellipse(400, 160, 50);
	//right iris
	fill('black');
	ellipse(400, 160, 20);

	//Left eye
	fill('white');
	ellipse(240, 160, 50);
	//left iris
	fill('black');
	ellipse(240, 160, 20)
	//mouth
	fill('black');
	ellipse(320, 230, 50, 80);

	//tongue
	fill('red');
	ellipse(320, 250, 40, 40);
}