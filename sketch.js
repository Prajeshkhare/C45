const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var graveyardimg;
var zombie;
var hero;
var ground;


function preload(){
	graveyardimg=loadImage("JS/Graveyard.jpg")
	

}

function setup() {
	createCanvas(displayWidth-20, displayHeight-100);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(displayWidth/2,displayHeight/2+100,displayWidth,20);

	zombie = new Zombie(displayWidth/2-600,displayHeight/2-150);

	farmer = new Hero(displayWidth/2,displayHeight/2)

	Engine.run(engine);
}


function draw() {
  ground.display();
  background(graveyardimg);

  //ground.display();
  zombie.display();
  farmer.display();

	
 

}



