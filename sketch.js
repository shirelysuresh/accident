  var car,height;
  var wall,thickness;
  var bullet,speed,weight;
  function setup() {
    background("blue")
    createCanvas(1600,400);
    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)

  car= createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor=color("pink")
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color("blue")

  
  }



  function draw() {
    background(255,255,255); 
    if(wall.x-car.x<(car.width+wall.width)/2)
    {
      car.velocityX=0
      var deformation=0.5* weight * speed  * speed/22500
      if(deformation>180)
      {
      car.shapeColor=color("red")
  
      }
      
      if(deformation<180 && deformation>100)
      {
      car.shapeColor=color("green")
  
      }
      if(deformation<100)
      {
        car.shapeColor=color("yellow")
      }
  
      }
      
    drawSprites();
  }
  function hasCollided(bullet,wall)
  {
    bulletRightEdge=bullet.x + bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage =0.5 * weight * speed  (thickness * thickness *thickness);
      if(damage>10)
      {
        wall.shapeColor=color(255,0,0)
      }
      if(damage<10)
      {
        wall.shapeColor=color(0,225,0)
      }

    }
  }