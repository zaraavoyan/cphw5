function setup() {
  createCanvas(400, 400);
}

function draw() {
	 background(220);
	noFill();
	var f = 10;
	x = 210;
	
	for (i = 200; i > 10  ; i = i - 10) {
line(i , f, x, f);
	f = f + 10;
	x = x + 10;}

for (n = 10; n < 400; n = n + 10) {
	line(n,f,x,f) 
	f = f + 10;
	x = x - 10;
}}
