var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var boxes;
var Player1;
var prevX;
var ball;

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

var Player1 = new GameObject(30, canvas.height/2,50,50,"red");

Player1.vx = -1
Player1.vy = -1

ball = new GameObject();
ball.width = 55;
ball.vx = 3;
ball.vy = 3;

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	

	Player1.drawRect();
	console.log(Player1.x)

	if(w)
		{
			//console.log("Moving Right");
			Player1.y += -2;
		}
		
		if(s)
		{
			//console.log("Moving Right");
			Player1.y += 2;
		}

		//impede movement
		if(Player1.y + Player1.height/2> canvas.height)
		{
				Player1.y = prevX  //www- Player1.height/2;
				console.log("colliding");
		}
		else if(Player1.y - Player1.height/2< 0){
			Player1.y = prevX 
		}
		else
		{
				prevX = Player1.y;
		}
		
		
			//top of canvas impede movement
			if(Player1.y - Player1.height/2 < 0)
			{
				Player1.v = 0;
				console.log("colliding");
			}
	
	//right side of canvas
	if(ball.x + ball.width/2 > canvas.width)
	{
		ball.vx *= -1
	}

	if(Player1.hitTestObject(ball))
	{
		ball.vx *= -1
	}

	//left side of canvas
	if(ball.x - ball.width/2 < Player1.width)
	{
		ball.x = 500
		ball.y = 250
		ball.vx *= 1
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

			ball.move();
			ball.drawCircle();
}