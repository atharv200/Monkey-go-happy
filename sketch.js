
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var obstacleGroup , bananaGroup
var score
var ground
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    monkey = createSprite(80,315,10,10)
    monkey.addAnimation("running", monkey_running)
    monkey.scale = 0.1
  
    ground = createSprite(400,350,900,10)
    ground.velocityX = -4
    ground.x = ground.width/2
    
    bananaGroup = new Group()
    obstacleGroup = new Group()
    

  
}


function draw() {
  
  background("lightGREY")
  
  if(ground.x<0){
      ground.x = ground.width/2
     }
  
  if(keyDown("space")&&monkey.y>314)
  {
    monkey.velocityY = -20
  }  
  
  monkey.velocityY = monkey.velocityY + 1.1
  
  monkey.collide(ground)
  
  spawnBanana()
  
  spawnObstacle()
  
  textSize(15)
  fill("white")
  stroke("black")
  strokeWeight(3)
  text("Survival Time : "+survivalTime, 30,30)
  
  survivalTime = Math.ceil(frameCount/frameRate())
  
  //console.log(monkey.y)
  
  drawSprites()
}

function spawnBanana()
{
      if(frameCount % 80 == 0)
      {
      banana = createSprite(420,200,10,10)
      banana.addImage(bananaImage)
      banana.scale = 0.1
      banana.velocityX = -5
      banana.y = Math.round(random(120,200))
      banana.lifetime = 150
      bananaGroup.add(banana)
      }
}

function spawnObstacle()
{
    if(frameCount % 300 == 0)
    {
      obstacle = createSprite(350,320,10,10)
      obstacle.addImage(obstacleImage)
      obstacle.scale = 0.15
      obstacle.velocityX = -5
      obstacle.lifetime = 150
      obstacleGroup.add(obstacle)
    }
}


