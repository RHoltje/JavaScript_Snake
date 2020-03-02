var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");


/*starting position of snake*/
let snake = [  
	{x: 100, y: 100},  
	{x: 50, y: 100},  
	{x: 0, y: 100},];

drawSnake();

	/*drawing snake on canvas*/
function drawSnakePart(snakePart) 
	{	ctx.fillStyle = 'lightblue';  
		ctx.strokestyle = 'darkblue';
		ctx.fillRect(snakePart.x, snakePart.y, 50, 50);  
		ctx.strokeRect(snakePart.x, snakePart.y, 50, 50);}

function drawSnake() 
	{snake.forEach(drawSnakePart);}
