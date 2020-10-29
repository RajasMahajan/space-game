
var rocket;
var rocketImage;
var space;
var astG;
var START=1;
var END=2;
var STOP=0;
var gameState=0;
var score=0;
var spaceImage;
var astImage;
function preload(){
rocketImage=loadImage("rocket.png");
spaceImage=loadImage("space.jpg");
astImage=loadImage("astoroid.png");
}

function setup() {
  createCanvas(600,600)
 
 space=createSprite(300,300,600,600);
  space.addImage(spaceImage)
  space.scale=3.5;
  space.velocityY=+3;
  astG=new Group();
   
  rocket=createSprite(300,400,30,30);
  rocket.addImage(rocketImage);  
  rocket.scale=0.4;
}

function draw() {
  background("black");
  if(gameState===START){
      rocket.visible=true;
     space.visible=true;
    if(frameCount%20===0){
      score=score+1;
      
    }
  if(space.y>600){
    space.y=100;
  }
  if(keyDown("space")){
    
    rocket.y=rocket.y-4;
  }
  if(keyDown("right")){
    rocket.x=rocket.x+5;
  }
  if(keyDown("left")){
    rocket.x=rocket.x-5;
  }
  rocket.y=rocket.y+3;
  if(rocket.isTouching(astG)){
    gameState=END;
  }
  ast();
  }
  if(gameState===STOP)
  {
  text("Please press Enter to start the game",200,300)
  astG.destroyEach();
    rocket.visible=false;
    space.visible=false;
    if(keyDown("enter")){
      gameState=START;
      score=0;
    }
  }
  
  if(gameState===END){
    text("GAMEOVER!!!!!!!!!!!!!!",250,300)
    text("please press shift to reture home screen.",200,150)
    astG.destroyEach();
    rocket.visible=false;
    space.visible=false;
    if(keyDown("shift")){
    gameState=STOP;
    }
  }
 drawSprites();
 text("Score: "+score,270,20);
}

function ast(){
  var ast;
  if(frameCount%60===0){
  ast=createSprite(300,0,20,20);
  ast.addImage(astImage);
    ast.x=Math.round(random(30,580))
    ast.velocityY=+10;
    ast.lifetime=60;
    ast.scale=0.15;
    astG.add(ast)
  }
}




