class Umbrella
{
    constructor()
    {
        this.body=Bodies.circle(265,525,80,{ 'airFriction':0.001,'friction': 0.1,'isStatic':true});
        World.add(world,this.body); 
    }
    display()
    {
        ellipseMode(CENTER);
        fill("skyblue");
        circle(this.body.position.x,this.body.position.y,160);
    }
}