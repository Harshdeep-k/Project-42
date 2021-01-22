const {
    Engine, World, Bodies,Render
}=Matter;
let engine, world, render;
let rain=[], maxDrops=50;
let bruce,bruce_walking;
let umb,thunder,t1,t2,t3,t4;
let ground;

function preload(){
    bruce_walking=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png")
    t1=loadImage("thunderbolt/1.png");
    t2=loadImage("thunderbolt/2.png");
    t3=loadImage("thunderbolt/3.png");
    t4=loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(500,800);
   engine=Engine.create();
   world=engine.world;

    for(let i=0;i<maxDrops;i++)
    {
        rain.push(new Drops(random(0,500),random(0,500)));
    }

    bruce=createSprite(250,600);
    bruce.addAnimation("walking",bruce_walking);
    bruce.scale=0.5;
    ground=createSprite(width/2,height-20,width,20); 
    ground.shapeColor="brown";

    
   umb=new Umbrella();
   render=Render.create({
       element:canvas,
       engine:engine
   });
   Render.run(render);
   

}

function draw(){
    background("#191970");
    Engine.update(engine);
    //text(mouseX+","+mouseY,mouseX,mouseY)

    for(let r in rain)
    {
        rain[r].display();
        rain[r].update();
    }
    thunderb();
    bruce.collide(ground);
    //umb.display()
    drawSprites();
   
}   
function thunderb()
{
    if(frameCount%50===0)
    {
        thunder=createSprite(250,145);
        let r=Math.round(random(1,4));
   
        switch(r)
        {
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break;
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
        }
        thunder.lifetime=10;
        thunder.scale=0.7;
    }
}
