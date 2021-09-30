const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var arm1, arm2, giant, bone1
var playerImg
var enemy1,enemimg

function preload(){
  playerImg = loadImage("Images/player_rightlook.png")
  enemimg = loadAnimation("Images/enemy_leftrun.png","Images/player_leftlook.png")
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2,height-100,1000, 300, true, "brown")
  giant = new Ground(120,height/2,200,500,true,"grey",playerImg)
  arm1 = new Ground(270,height/2,100,30,false,"orange")
  arm2 = new Ground(310,height/2,60,30,false,"orange")
  bone1 = new cArm(giant.body,arm1.body)
  bone2 = new cArm(arm1.body,arm2.body)

  enemy1 =  createSprite(750,60,50,50)
  enemy1.addAnimation("attack1",enemimg)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display()
  giant.display()
  arm1.display()
  bone1.display()
  arm2.display()
  bone2.display()

  drawSprites()
}

function mouseDragged() {
  
  
}
