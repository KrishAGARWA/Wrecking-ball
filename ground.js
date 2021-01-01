class   Ground{
    constructor(x,y){
    var options={
        isStatic:true,
    restitution:0.5,
    density:0.6,
    friction:0.8,
    
    }
    
    
    this.body=Bodies.rectangle(x,y,800,40,options)
    this.width=800
    this.height=40
    World.add(world,this.body)
    
    
    
    
    
    
    
    }
    display(){
    var pos= this.body.position
    
    fill("red")
    strokeWeight(3)
    stroke("lightblue")
    rectMode(CENTER)
    rect(pos.x,pos.y,800,40)
   
    
    
    
    
    }
    
    
    
    
    
     }