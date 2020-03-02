var canvas = document.getElementById("snakeCanvas");
var ctx = canvas.getContext("2d");


/*starting position of snake*/
let snake = [  
	{x: 50, y: 50},  
	{x: 40, y: 50},  
	{x: 30, y: 50},];

drawSnake();

	/*drawing snake on canvas*/
function drawSnakePart(snakePart) 
	{	ctx.fillStyle = 'lightblue';  
		ctx.strokestyle = 'darkblue';
		ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
		ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);}

function drawSnake() 
	{snake.forEach(drawSnakePart);}
