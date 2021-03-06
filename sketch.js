var bgImg;
var cat,catimg1,catimg2,catimg3;
var mouse,mouseimg1,mouseimg2,mouseimg3;

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png");
catimg1 = loadAnimation("images/cat1.png");
mouseimg1 = loadAnimation("images/mouse1.png");
catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
catimg3 = loadAnimation("images/cat4.png");
mouseimg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  mouse = createSprite(400,600,10,10);
  mouse.addAnimation( "mouseimage" ,mouseimg1);
  mouse.addAnimation("mouseTeasing",mouseimg2); 
    mouse.addAnimation("mousehappy",mouseimg3); 
  mouse.scale = 0.2;

  cat = createSprite(800,600,10,10);
  cat.addAnimation( "catimage" ,catimg1);
    cat.addAnimation("catRunning",catimg2);
     cat.addAnimation( "catsite" ,catimg3);
   
  cat.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
  cat.addAnimation("catsite",catimg3);
   cat.changeAnimation("catsite"); 
  mouse.addAnimation("mousehappy",mouseimg3);
  mouse.changeAnimation("mousehappy");  
  cat.velocityX = 0;  
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown(LEFT_ARROW)){
      mouse.changeAnimation("mouseTeasing",mouseimg2);
      mouse.frameDelay = 25;
  }

   if(keyDown(RIGHT_ARROW)){
     cat.changeAnimation("catRunning",catimg2);
      cat.velocityX = -3 
     cat.frameDelay = 25;  
   }


}

