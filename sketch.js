
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rf = new roof(400,100,600,30);
	
	bb1 = new bob(100,100,4);
	bb2 = new bob(200,100,4);
	bb3 = new bob(300,100,4);
	bb4 = new bob(400,100,4);
	bb5 = new bob(500,100,4);

	rope1 = new rope(bb1.body,rf.body,-bbDiameter*2,0);
	rope2 = new rope(bb2.body,rf.body,-bbDiameter*2,0);
	rope3 = new rope(bb3.body,rf.body,-bbDiameter*2,0);
	rope4 = new rope(bb4.body,rf.body,-bbDiameter*2,0);
	rope5 = new rope(bb5.body,rf.body,-bbDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bb.display();
  rf.display();

  drawSprites();
 
}



