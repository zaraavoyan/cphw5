function setup() {
  createCanvas(400, 400);
}

function draw() {
rectMode (CENTER);
var t = 10;
var r = 50;
var p = 0;
noFill();





while (r<340)
{
  {
    var t = 10;
var p = 0;

  while (p < 40) {
    rect (r, 170, t, t);
    t = t + 10;
    p = p + 10;  
  }
   r = r + 75;       
  }
}
}
