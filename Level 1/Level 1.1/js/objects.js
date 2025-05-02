var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var boxes;
var Player1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

// function GameObject(x,y,w,h,color)
// {
// 	this.x = x
// 	this.y = y
// 	this.w = w
// 	this.h = h
// 	this.color = color

// this.drawCircle = function()
// 	{
// 		context.save();
// 			context.fillStyle = this.color;
// 			context.beginPath();
// 			context.translate(this.x, this.y);
// 			context.arc(500, 0, this.w/2, 0, 360 *Math.PI/180, true);
// 			context.closePath();
// 			context.fill();
// 		context.restore();
		
// 	}
// }

var ball = new GameObject(30, canvas.height/2,50,50,"red");

ball.vx = -1
ball.vy = -1

//Level 1 code
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.drawRect();
	console.log(ball.x)
	//ball.move()

	//right side of canvas
	/*if(ball.x + ball.width/2 > canvas.width)
	{
		ball.vx *= -1
		ball.color = "orange"
		ball.speed = 100
	}

	//left side of canvas
	if(ball.x - ball.width/2 < 0)
	{
		ball.vx *= -1
		ball.color = "purple"
		ball.speed = 100
	}

	//bottom of canvas
	if(ball.y + ball.height/2 > canvas.height)
	{
		ball.vy *= -1
		ball.color = "red"
		ball.speed = 100
	}

	//top of canvas
	if(ball.y - ball.height/2 < 0)
	{
		ball.vy *= -1
		ball.color = "yellow"
		ball.speed = 100
	}*/
}