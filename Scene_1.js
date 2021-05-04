
//mountains, moon

class Scene_1{
	constructor(){

	}
	
	display(){

//STARS// 
		noStroke();
		fill(255);
		ellipse(10,100,2,2);
		ellipse(200,20,2,2);
		ellipse(900,100,3,3);
		ellipse(490,110,3,3);
		ellipse(895,120,3,3);
		ellipse(1070,170,3,3);
		ellipse(320,200,3,3);
		ellipse(500,220,3,3);
		ellipse(620,222,3,3);
		ellipse(250,225,3,3);
		ellipse(1256,226,3,3);

//MOON
		noStroke();
		fill(220,220,250); 
		ellipse(540,150,130,130); //moon grey inner-most
		fill(165,163,184,30); 
		ellipse(540,150,170,170); // lighter grey, middle ellipse
		fill(194,193,217,20); 
		ellipse(540,150,230,230); // outer-most ellipse


//MOUNTAINS//

		//far right mountain
		strokeWeight(2);
		beginShape();
		stroke(184,230,252);
		fill(131,167,201);
		vertex(1210,200);
		vertex(1200,205);
		vertex(1130,250);
		vertex(1000,300);
		vertex(950,340);
		vertex(850,370);
		vertex(800,400);
		vertex(720,450);
		vertex(600,600);
		vertex(1200,600);
		endShape();
		//farthest left mountain
		beginShape();
		fill(143,182,219);
		vertex(-10,100);
		vertex(0,105);
		vertex(45,110);
		vertex(75,135);
		vertex(150,160);
		vertex(350,200);
		vertex(600,300);
		vertex(760,450);
		vertex(1050,600);
		vertex(0,600);
		endShape();
		//middle right mountain
		beginShape();
		stroke(151,193,232);
		fill(91,117,140);
		vertex(1210,300);
		vertex(1200,320);
		vertex(1100,360);
		vertex(1040,400);
		vertex(1000,420);
		vertex(950,430);
		vertex(850,450);
		vertex(600,600);
		vertex(1200,600);
		endShape();
		//middle left mountain
		beginShape();
		fill(101,129,156);
		vertex(-10,100);
		vertex(10,110);
		vertex(15,115);
		vertex(20,115);
		vertex(50,130);
		vertex(140,170);
		vertex(250,240);
		vertex(350,270);
		vertex(400,290);
		vertex(490,350);
		vertex(550,400);
		vertex(660,450);
		vertex(740,520);
		vertex(910,600);
		vertex(0,600);
		endShape();
		//closest right mountain
		beginShape();
		stroke(111,142,171);
		fill(76,97,117);
		vertex(1210,350);
		vertex(1200,380);
		vertex(1170,430);
		vertex(1120,470);
		vertex(1000,520);
		vertex(960,550);
		vertex(800,590);
		vertex(600,600);
		vertex(1210,600);
		endShape();
		//closest left mountain
		beginShape();
		fill(70,88,107);
		vertex(-10,300);
		vertex(0,310);
		vertex(200,360);
		vertex(350,420);
		vertex(450,480);
		vertex(550,500);
		vertex(620,530);
		vertex(750,560);
		vertex(800,600);
		vertex(0,600);
		endShape();

//RIVER//
		
		beginShape();
		strokeWeight(3);
		fill(180,210,240);
		vertex(800,600);
		vertex(802,598);
		vertex(950,586);
		vertex(1050,590);
		vertex(1111,594);
		vertex(1200,590);
		vertex(1210,630);
		vertex(1190,650);
		vertex(1060,700);
		vertex(990,750);
		vertex(950,810);
		vertex(700,810);
		vertex(500,700);
		vertex(0,600);
		vertex(800,600);
		endShape();
	}
	



}