const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var box1,box2,box3,box4;
var ground
var ball
var rope

function setup() {
  createCanvas(800,600);
 engine=Engine.create()
 world=engine.world
box1=new Box(450,520)
ground= new Ground(400,590)
ball=new Ball(300,300)
rope=new Rope(ball.body,{x:300,y:250})
box2=new Box(450,450)
box3=new Box(450,380)
box4=new Box(450,310)

}

function draw() {
  background(0);  
Engine.update(engine)


box1.display()
ground.display()
ball.display()
rope.display()
box2.display()
box3.display()
box4.display()

}



function mouseDragged(){
Body.setPosition(ball.body,{x:mouseX,y:mouseY})




}