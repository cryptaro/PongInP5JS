function Player(pos){
	this.x = pos;
	this.y = 30;
	this.height = 20*5;
	this.width = this.height/5;
	this.vit = 30;

	this.inMove = 0;
	this.acc = 0;
	this.nbWin = 0;

	// this.vitx = 1;
	// this.vity = 0;

	this.update = function(){
		// this.x = constrain(this.x+this.vitx*this.radius, this.radius, width-this.radius);
		this.y = constrain(this.y+this.inMove*this.vit, 0, height-this.height);
		this.acc = this.acc *this.inMove + this.inMove;
	}

	this.draw = function(){
		fill(255);
		// ellipse(this.x, this.y, this.radius*2, this.radius*2);
		rect(this.x-this.width/2, this.y, this.width, this.height)
	}
}