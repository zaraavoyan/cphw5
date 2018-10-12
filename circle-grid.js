function setup() {
  createCanvas(400, 400);
}

function draw() {
 background (0);
ellipseMode (CENTER);
var y = 20;
while (y < 400) {
  
 {
    fill (255);
    noStroke();
    var x = 20;

    while (x < 400) {
    ellipse (x, y, 20);
    x = x + 30;
  }
    y = y + 30;
}
}
}
