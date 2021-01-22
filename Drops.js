class Drops
{
    constructor(x,y)
    {
        this.body=Bodies.circle(x,y,5,{ 'airFriction':0.001,'friction': 0.1});
        World.add(world,this.body);
        
        
    }
    display()
    {
        ellipseMode(CENTER);
        fill("skyblue");
        circle(this.body.position.x,this.body.position.y,10);

    }
    update()
    {
        if(this.body.position.y>800)
        {
            Matter.Body.setPosition(this.body,{x: random(0,500),y: random(0,500)});
        }
    }

}