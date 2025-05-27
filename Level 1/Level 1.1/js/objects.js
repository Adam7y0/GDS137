var canvas;
var context;
var timer;
var interval = 1000 / 60;
var player;
var boxes;
var Player1;
var Player2;
var prevX;
var ball;
var p1Wins = 0;
var p2Wins = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

/* function GameObject(x,y,w,h,color)
 {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.color = color
 
  ball.move()

  //right side of canvas
  if(ball.x + ball.width/2 > canvas.width)
  {
	  ball.vx *= -1
  }

  //left side of canvas
  if(ball.x - ball.width/2 < 0)
  {
	  ball.vx *= -1
  }

  //bottom of canvas
  if(ball.y + ball.height/2 > canvas.height)
  {
	  ball.vy *= -1
  }

  //top of canvas
  if(ball.y - ball.height/2 < 0)
  {
	  ball.vy *= -1
  }

  }*/
/* this.drawCircle = function()
		{
			  context.save();
				  context.fillStyle = this.color;
				  context.beginPath();
				  context.translate(this.x, this.y);
				  context.arc(500, 0, this.w/2, 0, 360 *Math.PI/180, true);
				  context.closePath();
				  context.fill();
			  context.restore();
  	
		}
 }*/

var Player1 = new GameObject(30, canvas.height / 2, 20, 20, "red");
var Player2 = new GameObject(950, canvas.height / 2, 20, 20, "Blue");
var img = document.getElementById("ric");


Player1.vx = -1
Player1.vy = -1
Player2.vx = -1
Player2.vx = -1

ball = new GameObject();
ball.width = 55;
ball.vx = -3;
ball.vy = 0;

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	

	//score HUD
	context.font = "40px Arial";
	context.fillText(`Player 1: ${p1Wins} | Player 2: ${p2Wins}`,canvas.width/2 - 200,40);
	Player1.drawRect();
	console.log(Player1.x)

	//center line
	context.save();
	context.strokeStyle = "yellow"
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, 700);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.restore();

	Player2.drawRect();
	console.log(Player2.x)

	//Player 1
	if (w) {
		//console.log("Moving Right");
		Player1.y += -2;
	}

	if (s) {
		//console.log("Moving Right");
		Player1.y += 2;
	}

	//Player 2
	if (upArrow) {
		//console.log("Moving Right");
		Player2.y += -2;
	}

	if (downArrow) {
		//console.log("Moving Right");
		Player2.y += 2;
	}

	//impede movement bottom
	if (Player1.y + Player1.height / 2 > canvas.height) {
		Player1.y = prevX  //www- Player1.height/2;
		console.log("colliding");
	}
	else if (Player1.y - Player1.height / 2 < 0) {
		Player1.y = prevX
	}
	else {
		prevX = Player1.y;
	}

	//player 2 impede movement bottom
	if (Player2.y + Player2.height / 2 > canvas.height) {
		Player2.y = prevX  //www- Player1.height/2;
		console.log("colliding");
	}
	else if (Player2.y - Player2.height / 2 < 0) {
		Player2.y = prevX
	}
	else {
		prevX = Player2.y;
	}


	//top of canvas impede movement
	if (Player1.y - Player1.height / 2 < 0) {
		Player1.v = 0;
		console.log("colliding");
	}

	//top of canvas impede movement player 2
		if (Player2.y - Player2.height / 2 < 0) {
		Player2.v = 0;
		console.log("colliding");
	}

	//right side of canvas
	if (ball.x + ball.width / 2 > canvas.width) {
		ball.x = 500
		ball.y = 250
		ball.vx *= -1

		p1Wins++;
	}

	
	//left side of canvas
	if (ball.x - ball.width / 2 < Player1.width) {
		ball.x = 500
		ball.y = 250
		ball.vx *= 1
		p2Wins++;
	}

	if (Player1.hitTestObject(ball)) {

		console.log(`Player Y :${Player1.y}\nHeight: ${Player1.y - Player1.height/3}\n Ball X: ${ball.y}`)
		//Top of paddle
		if (ball.y < Player1.y - Player1.height / 3) {
			ball.vy = -1;
		}

		//Bottom of paddle
		if  (ball.y > Player1.y - 2*(Player1.height / 3)) {
			ball.vy = 1;
		}


		ball.vx *= -1
	}


	if (Player2.hitTestObject(ball)) {

		console.log(`Player Y :${Player1.y}\nHeight: ${Player2.y - Player2.height/3}\n Ball X: ${ball.y}`)
		//Top of paddle
		if (ball.y < Player2.y - Player2.height / 3) {
			ball.vy = -1;
		}

		//Bottom of paddle
		if  (ball.y > Player2.y - 2*(Player2.height / 3)) {
			ball.vy = 1;
		}

		ball.vx *= -1
	}

	//bottom of canvas
	if (ball.y + ball.height / 2 > canvas.height) {
		ball.vy *= -1
	}

	//top of canvas
	if (ball.y - ball.height / 2 < 0) {
		ball.vy *= -1
	}

	ball.move();
	ball.drawCircle();
	context.drawImage(img, ball.x - ball.width/2, ball.y - ball.width/2, ball.width, ball.width);
}