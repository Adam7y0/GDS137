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
var gravity = 1; 

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

var Player1 = new GameObject(canvas.width/2, canvas.height/2 + 150, 400, 50, "cyan");
//var Player2 = new GameObject(950, canvas.height / 2, 20, 20, "Blue");
//var img = document.getElementById("ric");

Player1.vx = -1
//Player1.vy = -1
/*Player2.vx = -1
Player2.vx = -1*/

ball = new GameObject();
ball.width = 80;
ball.height = 80;
ball.vx = 5;
ball.vy = 0;

function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	//score HUD
	context.font = "40px Arial";
	context.fillText(`Score: ${p1Wins}`,50,40);
	

	
	//Player 1
	if (a) {
		//console.log("Moving left");
		Player1.x += -10;
		//Player1.vx += -Player1.ax * Player1.force;
	}

	if (d) {
		//console.log("Moving Right");
		Player1.x += 10;
		//Player1.vx += Player1.ax * Player1.force;
	}

		/*if (a) {
		player.vx += -player.ax * player.force;
	}
	if (d) {
		player.vx += player.ax * player.force;
	}*/

	


	//Player 2
	/*if (upArrow) {
		//console.log("Moving Right");
		Player2.y += -2;
	}

	if (downArrow) {
		//console.log("Moving Right");
		Player2.y += 2;
	}*/

	//impede movement right
	if (Player1.x + Player1.width / 2 > canvas.width) {
		player1.x *= 0;
		console.log("colliding");
	}
	/*else if (Player1.y - Player1.height / 2 < 0) {
		Player1.y = prevX
	}
	else {
		prevX = Player1.y;
	}*/

	//impede movement left
	if (Player1.x - Player1.width / 2 < 0) {
		Player1.x *= 0;
		console.log("colliding");
	}

	//player 2 impede movement bottom
	/*if (Player2.y + Player2.height / 2 > canvas.height) {
		Player2.y = prevX  //www- Player1.height/2;
		console.log("colliding");
	}
	else if (Player2.y - Player2.height / 2 < 0) {
		Player2.y = prevX
	}
	else {
		prevX = Player2.y;
	}*/

	/*top of canvas impede movement player 2
		if (Player2.y - Player2.height / 2 < 0) {
		Player2.v = 0;
		console.log("colliding");
	}*/

	//top of canvas
	if (ball.y - ball.height / 2 < 0) {
		ball.vy *= -1
	}

	//right side of canvas
	if (ball.x + ball.width / 2 > canvas.width) {
		ball.vx *= -1
		ball.vy *= -1
	}

	
	//left side of canvas
	if (ball.x - ball.width / 2 < 0) {
		ball.vx *= -1
		ball.vy *= -1
	}

	//bottom of canvas
	if (ball.y + ball.width / 2 > canvas.height) {
		ball.y = canvas.height - ball.width/2
		ball.vy = -ball.vy * .67;
	}
	//console.log(Player1.hitTestObject(ball));
	if (ball.hitTestObject(Player1)) {

		//console.log(`Player Y :${Player1.y}\nHeight: ${Player1.y - Player1.height/3}\n Ball X: ${ball.y}`)
		//Top of paddle
		/*if (ball.y < Player1.x - Player1.width) {
			ball.vy = -0.5
		}

		//Bottom of paddle
		if  (ball.y > Player1.x - 2*(Player1.width)) {
			ball.vy = 0.5
		}*/

		//ball.vy = 1;
		//ball.y = Player1.y - Player1.height/2 +10;
		ball.vy = -25;
	}


	/*if (Player2.hitTestObject(ball)) {

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
	}*/

	
	

	
	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.width/2, ball.width, ball.width);

	ball.vy += gravity;

	ball.x += Math.round(ball.vx);
	ball.y += Math.round(ball.vy);
	//Player1.drawCircle();
	Player1.drawRect();

	//context.fillRect(Player1.x,Player1.y, Player1.width,Player1.height);
	
	//console.log(Player1);
	
	ball.drawCircle();
}