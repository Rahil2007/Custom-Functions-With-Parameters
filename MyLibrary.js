function isTouching(sprite1,sprite2){
    if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2&&
      sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2&&
      sprite2.y-sprite1.y<=sprite1.height/2+sprite2.height/2&&
      sprite1.y-sprite2.y<=sprite1.height/2+sprite2.height/2){
    
      //movingRect.shapeColor="green";
      //fixedRect.shapeColor="green";
      return true;
    }else{
      //movingRect.shapeColor="red";
      //fixedRect.shapeColor="red";
      return false;
    }
  
  }
  
  function bounceOff(sprite1,target){
    if(Math.abs(sprite1.x-target.x)<=sprite1.width/2+target.width/2){
      sprite1.velocityX=-1*sprite1.velocityX;
    }
  
    if(Math.abs(sprite1.y-target.y)<=sprite1.height/2+target.height/2){
      sprite1.velocityY=-1*sprite1.velocityY;
    }
  }
