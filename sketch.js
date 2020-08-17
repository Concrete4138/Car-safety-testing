var car,wall
var speed,weight
var deformation

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,30);
  speed=random(55,90);
  weight=random(400,1500);
  deformation=((0.5*weight*speed*speed)/2250)
}

function draw() {
  background(0,0,0);
  
  car.velocityX=speed;

  if (car.isTouching(wall)) {
    car.velocityX=0;
    if (deformation<100 && car.isTouching(wall)) {
      car.shapecolour(0,255,0);
    }
    if (deformation>=100 && deformation<=180 && car.isTouching(wall)) {
      car.shapecolour(230,230,0);
    }
    if (deformation>180 && car.isTouching(wall)) {
      car.shapecolour(255,0,0);
    }

  }

  drawSprites();
}