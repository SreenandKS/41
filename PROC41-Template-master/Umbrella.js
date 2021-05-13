class Umbrella{
    constructor(x,y,radius){
       var options = {
            'friction':0.1
        }
        this.body = Bodies.circle(x,y,radius,{options,isStatic:true});
        this.radius = radius*3;
        
        this.image = loadImage("Umbrella.png");
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
