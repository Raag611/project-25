
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var leftwall,rightwall,bottomwall,boundary1,boundary2,boundary3,boundary4;
var paper2
function preload()
{
img = loadImage("dustbingreen (1).png")
	
}

function setup() {
	
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;
	

	
	

	//Create the Bodies Here.
	ground = new Ground(400,690,800,10)
	paper1 = new paper(50,600,30)
	
	leftwall = new dustbin(535,590,20,200)
	bottomwall = new dustbin(600,675,150,20)
	rightwall = new dustbin(665,590,20,200)
	boundary1 = new dustbin(795,350,10,700)
	boundary2 = new dustbin(400,5,800,10)
	boundary3 = new dustbin(5,350,10,700)
	boundary4 = new dustbin(400,690,800,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  ground.display();
  paper1.display();
  leftwall.display();
  rightwall.display();
  bottomwall.display();
  boundary1.display()
  boundary2.display()
  boundary3.display()
  boundary4.display()
  image(img,600,585,170,200)

}
function keyPressed()
{
    if (keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:155,y:-155})

	}
   
	if (keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-95,y:-95})
   
	   }
	   

}


