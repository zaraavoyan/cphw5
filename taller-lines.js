function setup() {
  createCanvas(400, 400);
}

function draw() {
	 background(220);
	noFill();
	var f = 5;

	
	for (i = 10; i < 410 ; i = i + 5) {
line(i , 0, i, f);
	f = f + 10}
}
