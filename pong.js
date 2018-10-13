var scoreL = 0;
var scoreR = 0;

const paddleWidth = 10;
const paddleHeight = 50;
const paddleSpeed = 5;


var ball = {
    x: 200,
    y: 300,
    radius: 10,
    dx: -1,
    dy: 1,
}

var paddleL = {
    y: 100,
}

var paddleR = {
    y: 100,
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
	stroke(255);
	var f = 20;
	for (i = 10; i < 400; i = i + 20) {
		var d = 10;
	line(width/2 , i, width/2 , i + 5);
		f = f + 5;
	}
	
    // draw the puck, the left paddle, and the right paddle
    ellipse(ball.x, ball.y, ball.radius*2);
    rect(0, paddleL.y, paddleWidth, paddleHeight);
    rect(width - paddleWidth, paddleR.y, paddleWidth, paddleHeight);

    // Update ball position
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check if ball is bouncing off bottom
    if (ball.y + ball.radius >= height) {
        ball.y = height - ball.radius;
        ball.dy = ball.dy * -1;
    }

    // Check if ball is bouncing off top
    if (ball.y - ball.radius <= 0) {
        // ????  Add code
    }

    // Check if ball is hitting right paddle
    if (paddleR.y <= ball.y && ball.y <= paddleR.y + paddleHeight && ball.x + ball.radius >= width - paddleWidth)
    {
        ball.x = width - paddleWidth - ball.radius;
        ball.dx = ball.dx * -1;
    }

     if (paddleL.y <= ball.y && ball.y <= paddleL.y + paddleHeight && ball.x + ball.radius >= width - paddleWidth)
    {
        ball.x = width - paddleWidth - ball.radius;
        ball.dx = ball.dx * -1;
    }
	
	

    // Check if the ball is off the screen
    if (ball.x < 0) {
        fill(255, 0, 0);
        textSize(20);
        text("Left Player Lost", 100, 100);
        noLoop();
    }

    if (ball.y < 0) {
        fill(255, 0, 0);
        textSize(20);
        text("Right Player Lost", 100, 100);
        noLoop();
    }

    // Check for user input

    // Letter Q
    if (keyIsDown(87)) {
        paddleL.y -= paddleSpeed;
        if (paddleL.y < 0) {
            paddleL.y = 0;
        }
    }

    // Letter A
    if (keyIsDown(83)) {
        paddleL.y += paddleSpeed;
        if (paddleL.y > height - paddleHeight) {
            paddleL.y = height - paddleHeight;
        }
    }

    // Up arrow
   if (keyIsDown(38)) {
        paddleR.y -= paddleSpeed;
        if (paddleR.y < 0) {
            paddleR.y = 0;
        }
    }

    // Down arrow
    if (keyIsDown(40)) {
        paddleR.y += paddleSpeed;
        if (paddleR.y > height - paddleHeight) {
            paddleR.y = height - paddleHeight;
        }
			
    }
		
}
