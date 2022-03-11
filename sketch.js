const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannonball
let engine;
let world;
var cannon
var tower;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;



  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a new keyword to create a tower object.(challenge 4)
  tower = new Tower(100,420,200,450)
  angle=-PI/4
  cannon = new Cannon(180,140,170,60,angle)

  cannonball = new Cannonball(cannon.x,cannon.y)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//display tower(challenge 4)
  tower.display()
  cannon.display()
  cannonball.display()
}

function keyReleased(){
  if (keyCode===DOWN_ARROW){
    cannonball.shoot()
  }
  
}
