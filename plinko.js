class Plinko
{
    constructor(x, y)
    {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = 11;
        this.body = Bodies.circle(x,y,this.radius,options);
       
        World.add(world, this.body);
    }

    display()
    {
        var position = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(position.x, position.y, this.radius+8, this.radius+8);
    }
}