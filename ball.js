function Ball(pl1,pl2,w,h){
	this.p1 = pl1;
	this.p2 = pl2;
	this.gw = w;
	this.gh = h;

	this.x = w/2;
	this.y = h/2;
	this.radius = 10;

	this.vit = 10;
	this.vitx = 1;
	this.vity = 0;

	this.reset = function() {
		this.x = w/2;
		this.y = h/2;
		this.vit = 10;
		this.vitx = 1;
		this.vity = 0;
	}

	this.stop = function() {
		this.vitx = 0;
		this.vity = 0;
	}

	this.update = function (){
		this.x = constrain(this.x+this.vitx*this.vit, this.radius, this.gw-this.radius);
		this.y = constrain(this.y+this.vity*this.vit, this.radius, this.gh-this.radius);
		var newx = this.x+this.vitx*this.vit;
		var newy = this.y+this.vity*this.vit;
		if(this.pingPlayer(this.p1)){
			this.vitx = - this.vitx;
			this.vity = this.p1.acc;
		}else if(this.pingPlayer(this.p2)){
			this.vitx = - this.vitx;
			this.vity = this.p2.acc;
		}else if(newy<=0 || newy>=this.gh){
			this.vity = -this.vity;
		}else if(newx<=0){
			this.p2.nbWin = this.p2.nbWin+1;
			this.reset();
		} else if(newx>=this.gw){
			this.p1.nbWin = this.p1.nbWin+1;
			this.reset();
		}

	}

	this.pingPlayer = function(player){
		var newx = this.x+this.vitx*this.vit;
		var newy = this.y+this.vity*this.vit;
		if(this.vitx>0 && this.x < player.x+player.width
			&& newx+this.radius>player.x
			&& newy+this.radius>player.y && newy-this.radius<player.y+player.height
			){
			return true;
		}else if(this.vitx<0 && this.x > player.x-player.width
			&& newx-this.radius<player.x+player.width
			&& newy+this.radius>player.y && newy-this.radius<player.y+player.height
			){
			return true;
		}
		return false;
	}


	this.draw = function(){
		fill(100,150,100);
		// console.log(this.x)
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
	}

}