
var fixedRect, movingRect;
var item1,item2,item3,item4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  item1 = createSprite(100,100,50,50);
  item1.shapeColor = "green";

  
  item2 = createSprite(200,100,50,50);
  item2.shapeColor = "green";

  
  item3 = createSprite(300,100,50,50);
  item3.shapeColor = "green";

  
  item4 = createSprite(400,100,50,50);
  item4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,item2)){
 
  movingRect.shapeColor = "red";
  item2.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  item2.shapeColor = "green";

}
 
  drawSprites();
}

