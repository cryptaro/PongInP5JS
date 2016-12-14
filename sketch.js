var g_height = 600;
var g_width = 700;

var pointToWin = 5;

var player1 = new Player(40);
var player2 = new Player(g_width-40);
var ball = new Ball(player1,player2,g_width,g_height);

function setup() {
	createCanvas(g_width, g_height);
	frameRate(20);
}


function draw() {
  fill(12);
  rect(0, 0, width, height);

  // Draw Middle line
  var lineLength = 10;
  var lineWidth = 5;
  fill(255);
  for (var i = 0; i < width; i+=2*lineLength) {
  	rect(width/2-lineWidth/2,i, lineWidth, lineLength);
  }
  // End middle Line

  // Draw Player 1 Stat
  textSize(32);
  fill(0, 102, 153);
  text("Player 1", width/2-150, 30);
  text(player1.nbWin, width/2-50, 100);


  // Draw Player 1 Stat
  textSize(32);
  fill(0, 102, 153);
  text("Player 2", width/2+25, 30);
  text(player2.nbWin, width/2+25, 100);
  // End Player Print

	if(player1.nbWin>=pointToWin){
		fill(12);
		rect(width/2-120, height/2-35, 280,50)
		textSize(50);
		ball.stop();
	  fill(150, 100, 100);
	  text("Player 1 WIN !", width/2-140, height/2);
	}else if(player2.nbWin>=pointToWin){
		fill(12);
		rect(width/2-120, height/2-35, 280,50)
		textSize(50);
		ball.stop();
	  fill(150, 100, 100);
	  text("Player 2 WIN !", width/2-140, height/2);
	}else{
	  player1.update();
	  player1.draw();

	  player2.update();
	  player2.draw();

	  ball.update();
	  ball.draw();
	}
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		player2.inMove = -1
	} else if(keyCode === DOWN_ARROW){
		player2.inMove = 1;
	}
	if(key == 'Z'){
		player1.inMove = -1;
	} else if(key == 'S'){
		player1.inMove = 1;
	}
}

function keyReleased(){
	if(keyCode === UP_ARROW){
		player2.inMove = constrain(player2.inMove+1,-1,1);
	} else if(keyCode === DOWN_ARROW){
		player2.inMove = constrain(player2.inMove-1,-1,1);
	}
	if(key == 'Z'){
		player1.inMove = constrain(player1.inMove+1,-1,1)
	} else if(key == 'S'){
		player1.inMove = constrain(player1.inMove-1,-1,1);
	}
}