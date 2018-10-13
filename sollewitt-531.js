function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255);
	strokeWeight(28);
	noFill();
	
// 	line(-10,30,40,0);
// 	line(-10, 95, 60, 50);
// 	line(-10, 
	var starting = -10;
	var d = 30;
	var fif = 0;
	for (n = 30; n < 800; n = n + 65) {
	line(-10, n, d, fif)
	fif = fif + 40;
		d = d + 30;
	}
	
	d = d + 20; 
	var f = width - 60;
	for (i = 40; i < width; i = i + 65) {
		line(i, 0, f, height);
		f = f + 65}
	
}
