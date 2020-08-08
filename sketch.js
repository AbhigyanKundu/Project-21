//Global Variables
var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);


//Creating wall sprites and giving it colour
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="black";

thickness=random(22,83)
 speed=random(223,321);
 weight=random(30,52);

//creating car sprites
bullet=createSprite(50,200,30,20);
bullet.velocityX = speed;
bullet.shapeColor="white";



}

function draw() {

 
  background("green");


 if (hasCollided (bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5 * weight * speed * speed/(thickness * thickness* thickness)


if(damage>10){
wall.shapeColor="red";

}



if(damage<10){

wall.shapeColor="yellow";

}



 }


 


 

 
 
  
 
  drawSprites();
}


function hasCollided (lbullet,lwall){
  bulletRightEdge=lbullet.x + bullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
  return true;
  
  }else{
  return false;
  
  }
  
  
  }
