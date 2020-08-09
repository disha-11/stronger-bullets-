var bullet;
var wall;
var thickness;
var speed ;
var weight;

var gun, gun1,gun2,gun4,gun5;


function setup() {
  createCanvas(1600,400);

thickness=random(22,83);
  speed=random(30,52);
weight=random(221,321);

  bullet=createSprite(50,200,50,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  gun=createSprite(85,200,100,30);
  gun.shapeColor="brown";

  gun1=createSprite(50,220,30,70);
  gun1.shapeColor="brown";

  gun2=createSprite(73,220,5,20);
  gun2.shapeColor="brown";

  gun3=createSprite(135,200,15,15)
  gun3.shapeColor="brown"

  gun4=createSprite(105,185,8,23);
  gun4.shapeColor="brown";

  gun5=createSprite(105,180,4,6);
  gun5.shapeColor="black";
  

  wall=createSprite(1200,200,thickness,400/2);
  wall.shapeColor=rgb (80,80,80);

}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x <= (bullet.width + bullet.width)/2){

    var damage=(0.5*weight*speed*speed/thickness*thickness*thickness);
    console.log(bullet);

   
      if(damage>10){
        bullet.shapeColor='green'
      }
      else{
        bullet.shapeColor="red"
      }
  }
  bullet.collide(wall);
  drawSprites();
}
