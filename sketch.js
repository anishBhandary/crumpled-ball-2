const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,ball,ground,rope;


function setup() {
  createCanvas(2000, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 400, 3000, 40);
  
  box3 = new Box(700, 395, 100, 100);
 

  ball = new Ball(200, 380, 50, 50);

  

  
}

function draw() {
  background("black");
  Engine.update(engine);

 
  ball.display();
  
  box3.display();
  ground.display();
 
  
  

 
  text("Dragg the mouse to play",400,80);
  textSize("20");

 
 
}

function mouseDragged(){
  
 Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 


}


function mouseReleased(){
//slingshot.fly();
//gameState = "launched";
}

function keyPressed(){
 if(keyCode === 24){
  
    
 }
}
