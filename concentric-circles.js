function setup() {
  createCanvas(400, 400);
}

function draw() {
	 background(220);
	noFill();
	
	for (i = 10; i < height + 10; i = i + 10) {
ellipse(200,200,i);}
}
