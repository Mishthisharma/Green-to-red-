
var rectangle1 , rectangle2

function setup() {
  createCanvas(800,400);
rectangle1 =   createSprite(400, 200, 20, 20);
rectangle2 =   createSprite(300, 200, 60, 10);
rectangle1.shapeColor = "green";
rectangle2.shapeColor = "green";

}

function draw() {
  background(0,0,0); 
  rectangle2.y = World.mouseY ;
  rectangle2.x = World.mouseX ;
  console.log(rectangle1.x - rectangle2.x );
  if (rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2 && 
    rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2 && 
    rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2 && 
    rectangle1.y-rectangle2.y<rectangle1.height/2+rectangle2.height/2) {
      rectangle1.shapeColor = "red";
      rectangle2.shapeColor = "red";
    
  } else {
    rectangle1.shapeColor = "green";
    rectangle2.shapeColor = "green";
    
  }
  drawSprites();
}