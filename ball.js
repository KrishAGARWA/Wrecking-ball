class Ball{
    constructor(x,y){
    var options={
    restitution:0.5,
    density:0.6,
    friction:0.8,
    
    }
    
    
    this.body=Bodies.circle(x,y,60,options)
    this.radius=60
    World.add(world,this.body)
    
    
    
    
    
    
    
    }
    display(){
    var pos= this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("green")
    strokeWeight(3)
    stroke("lightblue")
    ellipseMode(CENTER)
    ellipse(0,0,60,60)
    pop()
    
    
    
    
    }
    
    
    
    
    
     }