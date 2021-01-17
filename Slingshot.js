class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slin1=loadImage("sprites/sling1.png")
        this.slin2=loadImage("sprites/sling2.png")
        this.slin3=loadImage("sprites/sling3.png")
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84,39,15)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y-5, pointB.x+30, pointB.y);
            image(this.slin3,pointA.x-30,pointA.y-10,15,30)
        }
        image (this.slin1,200,20)
        image (this.slin2,170,20)
    }
        
}