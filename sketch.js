var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sword, sword_cutting
var fruit_1, fruit_2, fruit_3, fruit_4
var alien_1, alien_2
var backGround

function preload(){
  sword_cutting = loadImage("sword.png")
  
  
  fruit_1 = loadImage("fruit1.png")
  fruit_2 = loadImage("fruit2.png")
  fruit_3 = loadImage("fruit3.png")
  fruit_4 = loadImage("fruit4.png")
  
  alien_1 = loadImage("alien1.png")
  alien_2 = loadImage("alien2.png")
}

function setup() {

 createCanvas(500, 500);

  
sword = createSprite(40,200,20,20)
sword.addImage("cutting",sword_cutting)


  
fruit1 = createSprite(200,200,40,40)
fruit1.addImage("fruit1",fruit_1)
fruit1.scale=0.3

fruit2 = createSprite(250,200,40,40)
fruit2.addImage("fruit2",fruit_2)
fruit2.scale=0.3

fruit3 = createSprite(300,200,40,40)
fruit3.addImage("fruit3",fruit_3)
fruit3.scale=0.3


fruit4 = createSprite(350,200,40,40)
fruit4.addImage("fruit4",fruit_4)
fruit4.scale=0.3

alien1 = createSprite(420,200,20,20)
alien1.addImage("alien1",alien_1)
alien1.scale=1.3

alien2 = createSprite(470,200,20,20)
alien2.addImage("alien1",alien_1)
alien2.scale=1.3

  
  
//create Obstacle and Cloud Groups
  fruitGroup=createGroup()
  alienGroup=createGroup()

score = 0
}

function draw(){

 background(180);
  //displaying score
  text("Score: "+ score, 450,50)
  
sword.y = World.mouseY
sword.x= World.mouseX
  
   //jump when the space key is pressed
    if(keyDown("space")&& fruit1.y >= 151) {
        fruit1.velocityY = -13;
    }
    
    //add gravity
    fruit1.velocityY = fruit1.velocityY + 0.8
  
  
   //jump when the space key is pressed
    if(keyDown("space")&& fruit2.y >= 151) {
        fruit2.velocityY = -13;
    }
    
    //add gravity
    fruit2.velocityY = fruit2.velocityY + 0.8
  
 
   //jump when the space key is pressed
    if(keyDown("space")&& fruit3.y >= 151) {
        fruit3.velocityY = -13;
    }
    
    //add gravity
    fruit3.velocityY = fruit3.velocityY + 0.8
  
  
   //jump when the space key is pressed
    if(keyDown("space")&& fruit4.y >= 151) {
        fruit4.velocityY = -13;
    }
    
    //add gravity
    fruit4.velocityY = fruit4.velocityY + 0.8
  
  drawSprites();
}