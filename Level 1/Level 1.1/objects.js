var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var boxes;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

timer = setInterval(animate, interval);

function GameObject(x,y,w,h,color)
{
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color

this.drawCircle = function()
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
}

var ball = new GameObject(30, canvas.height/2,50,10,"red");

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

	ball.drawCircle();
	console.log(ball.w)
}