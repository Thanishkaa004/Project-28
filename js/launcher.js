class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.004, 
            length: 8 
        }

        this.bodyA = bodyA; 
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    fly(){
       this.launcher.bodyA = null; 
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position; 
        strokeWeight(3);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
} 
