const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var arm1, arm2, giant, bone1
var playerImg

function preload(){
  playerImg = loadImage("Images/player_rightlook.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2,height-100,1000, 300, true, "brown")
  giant = new Ground(120,height/2,200,500,true,"grey",playerImg)
  arm1 = new Ground(260,height/2,100,30,false,"orange")
  bone1 = new cArm(giant.body,arm1.body)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display()
  giant.display()
  arm1.display()
  bone1.display()
}

function mouseDragged() {
  
}