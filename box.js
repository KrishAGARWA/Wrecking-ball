 class Box{
constructor(x,y){
var options={
restitution:0.5,
density:0.6,
friction:0.8,

}


this.body=Bodies.rectangle(x,y,70,70,options)
this.width=70
this.height=70
World.add(world,this.body)







}
display(){
var pos= this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
fill("blue")
strokeWeight(3)
stroke("lightblue")
rectMode(CENTER)
rect(0,0,70,70)
pop()




}





 }