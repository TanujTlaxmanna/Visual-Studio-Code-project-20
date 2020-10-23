var car,wall;
var speed,weight

function setup() {
  createCanvas(800,400);

speed  = random(55,90);
weight = random(400,1500)

car=createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor="white";

wall=createSprite(650,200,20,height/2);

}

function draw() {
  background("black");  
 

if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation<80){
car.shapeColor="green"
}
if(deformation>80 && deformation<180){
car.shapeColor="yellow";
}
if(deformation<100)
{
car.shapeColor="red";
}

}
drawSprites();
}