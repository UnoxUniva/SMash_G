const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1
var arm1, arm2, giant, bone1, arms1
var playerImg
var enemy1,enemimg
var leftedge
var enemyGroup
var walledge 


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
  // arm2 = new Ground(mouseX,mouseY,60,30,false,"orange")
  bone1 = new cArm(giant.body,arm1.body)
  // bone2 = new cArm(arm1.body,arm2.body)

  arms1 = createSprite(270,height/2,30,30)


  // enemy1 =  createSprite(750,410,50,50)
  // enemy1.addAnimation("attack1",enemimg)
  leftedge = createSprite(250,410,40,40)
  leftedge.visible= false
  walledge = createSprite(900,250,1000,1000)
  walledge.visible = false
  arms1.debug = true

  enemyGroup = new Group()
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display()
  giant.display()
  arm1.display()
  bone1.display()
  // arm2.display()
  // bone2.display()
  arms1.x = mouseX
  arms1.y = mouseY
  // enemy1.velocityX = -3

  // enemy1.collide(leftedge)

  spawnE()

  

  for (var i = 0; i < enemyGroup.length; i++) {
    if (enemyGroup.get(i).isTouching(leftedge)) {
        enemyGroup.get(i).destroy();
     
        
    }
    if (enemyGroup.get(i).isTouching(arms1)) {
      enemyGroup.get(i).destroy();
   
      
  }
  
    
    
}

  arms1.collide(walledge)
  

  drawSprites()
}

function mouseDragged() {
  Matter.Body.setPosition(arm1.body,{x:mouseX, y:mouseY})
  
}

function spawnE() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var enemy = createSprite(1200,410,40,10);
    // .y = Math.round(random(80,120));
    enemy.addAnimation("attack1",enemimg);
    // cloud.scale = 0.5;
    enemy.velocityX = -3;
    
     //assign lifetime to the variable
    // enemy.lifetime = 200;
    
    //adjust the depth
    // enemy.depth = trex.depth;
    // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    enemyGroup.add(enemy);
  }
  
}
