class Rope{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
length:150,
stiffness:2,
}
this.rope=Constraint.create(options)
this.pointB=pointB
World.add(world,this.rope)






}

display(){
var pointA =this.rope.bodyA.position
var pointB=this.pointB
push()
strokeWeight(3)
stroke("yellow")
line(pointB.x,pointB.y,pointA.x,pointA.y)
pop()




}








}