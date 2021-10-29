var canvas;
var backgroundImage;
var knightImgL, knightImgR, towerImg
var knight, tower
var platform1
var platformGroup

function preload() {
knightImgL = loadImage("knight.png");
knightImgR = loadImage("knight2.png")
towerImg = loadImage("tower.jpg");
} 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
tower = createSprite(windowWidth/2,windowHeight/2,50,50)
tower.addImage(towerImg);
tower.scale = 1.4
tower.velocityY=1;
knight = createSprite(windowWidth/2,windowHeight/2 ,50,50)
knight.addImage(knightImgR)
knight.addImage(knightImgL)
knight.scale = 0.5
platform1 = createSprite(windowWidth/2,windowHeight/2 + 50,250,20)
platform1.lifetime = 400
//platform1.debug=true;
knight.debug=false;
knight.setCollider("rectangle",0,0,200,350)
platformGroup = new Group()
}

function draw() {
 background("black");
//console.log(mouseX,mouseY)

if(keyIsDown(LEFT_ARROW)){
knight.position.x -=5
//console.log("hello")
knight.addImage(knightImgL)
}
//reset the tower
if(tower.y>windowHeight/1.5){
  tower.y=windowHeight/2
}
if(keyIsDown(RIGHT_ARROW)){
  knight.position.x+=5
  knight.addImage(knightImgR)
}
//gravity
knight.velocityY+=0.4

if(keyDown("space"))
{
  console.log("space")
  knight.velocityY=-10
}

knight.collide(platform1)
knight.collide(platformGroup)
spawnPlatforms()


  drawSprites()
}

function spawnPlatforms(){
  var platform
  if(frameCount%120 == 0){
    platform = createSprite(random(100,windowWidth-200),windowHeight-windowHeight+10,200,20)
    platform.velocityY = 1
    platformGroup.add(platform);
  }
}

