var garden,rabbit;
var gardenImg,rabbitImg;
var appleimage,leafimage,leaf2image;
var orange
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png")
  leafimage = loadImage("orangeLeaf.png")
  leaf2image = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  spawnapple();
 
  drawSprites();
  

}

function spawnapple(){

if(frameCount%200===0){
 apple=createSprite(0,0,10,10)
 apple.velocityY=2
 apple.x=Math.round(random(1,400))
  apple.addImage(appleimage)
  apple.scale=0.05
  apple.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1
}
if(frameCount%200===0){
  orange=createSprite(0,0,10,10)
  orange.velocityY=1
  orange.x=Math.round(random(1,400))
  orange.addImage(leafimage)
  orange.scale=0.05
  orange.depth=rabbit.depth;
  rabbit.depth=rabbit.depth+1
}


if(frameCount%200==0){
   leaf=createSprite(0,0,10,10)
   leaf.velocityY=1
   leaf.x=Math.round(random(1,400))
   leaf.addImage(leaf2image)
   leaf.scale=0.05
   leaf.depth=rabbit.depth;
   rabbit.depth=rabbit.depth+1

}


}




