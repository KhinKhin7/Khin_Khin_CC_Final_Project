
let scene_1;
let fireflies;
let fairy_1;
let fairy;
let scene_2;


function preload() {

    fairy_1 = loadAnimation('data/2_WALK_000.png');
}

function setup() { 
  createCanvas(1200,800);
  smooth();
  scene_1 = new Scene_1();
  fireflies = new Fireflies();
  //fairies = new Fairies();
  fairy = new Fairies();
  scene_2 = new Scene_2();

}

function draw() {
  background(30,38,71);
  scene_1.display();
  fireflies.display();
  keyTyped('1');



  // keyTyped('1');



  // if 
  // fairy.display();


	// scale(0.5);
 //  	animation(fairy_1,500,500);

}

function keyTyped(){
  if (key==='1'){
    background(0);
    scene_2.display();
    fairy.display();
  }

}
