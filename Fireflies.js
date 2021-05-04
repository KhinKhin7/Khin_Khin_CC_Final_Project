//fireflies in scene 1

class Fireflies{
	constructor(){
		this.x = (0,width);
		this.y = (0,height);
	}

	display(){
		noStroke();
		frameRate(1);
		//brighter ellipses
		fill(235,109,56,200);
		ellipse(random(this.x), random(this.y+100), 9,9);
		fill(222,64,198,200);
		ellipse(random(0,400), random(400,600), 8,8);
		fill(250,230,130,200);
		ellipse(random(500,1000), random(0,300), 8,8);
		fill(260,200,150,200);
		ellipse(random(200,700), random(200,500), 7,7);	
		//faded ellipses
		fill(235,109,56,15);
		ellipse(random(this.x), random(this.y), 13,13);
		fill(222,64,198,12);
		ellipse(random(0,400), random(400,600), 12,12);
		fill(250,230,130,10);
		ellipse(random(500,1000), random(0,300), 12,12);
		fill(260,200,150,15);
		ellipse(random(200,700), random(200,500), 11,11);	
	}
}