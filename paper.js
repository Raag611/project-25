class paper{
constructor(x,y,r){
var opt={
isStatic : false,
restitution:0.3,
friction:0.5,
density:1.2
 
      

} 
this.body=Bodies.circle(x,y,r,opt)
World.add(world,this.body)
this.radius = r
this.paper2=loadImage("paper(1).png")

}
display(){
    

var pos =this.body.position;
fill("red")
imageMode(CENTER)
image(this.paper2,pos.x,pos.y,90,90)
//ellipse(pos.x,pos.y,this.radius*2,this.radius*2)

}
}