function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(240, 235, 220);
	noFill();
	stroke(237, 28, 36);
	line(30, height / 2, height - 70, height / 2);
	stroke(0)
	rect(30, 30, height - 60, width - 60);
}
