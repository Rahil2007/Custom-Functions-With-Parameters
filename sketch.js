var fixedRect;
var movingRect;
var movingRect1,movingRect2;
var box1
var box2


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,200,20,30);
  movingRect1=createSprite(100,200,20,20)
  movingRect1.velocityX=2

  movingRect2=createSprite(400,100,50,20);
  movingRect2.velocityY=2

  box1=createSprite(200,100,40,30);
  box2=createSprite(100,300,60,70)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  console.log(Math.abs(fixedRect.x-movingRect.x))
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  //when the distance between the two rects is less than sum of half widths
//<= moving - fixed || fixed - moving

  if(isTouching(movingRect,fixedRect)){
    fixedRect.height=fixedRect.height+2

  }

  if(isTouching(movingRect,box1)){
    box1.shapeColor="red";
  }

  bounceOff(movingRect2,fixedRect);

  bounceOff(movingRect1,fixedRect);

}

//boolean - true or false - yes or no
//parameters/arguments - value that a function can take
