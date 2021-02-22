
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;

var stone;

var engine, world;
var rubber;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    stone = new Stone(700,320,70,70);
    plane = new Plane(900,height,1200,20)
    rubber = new Rubber(810,350);
    hammer = new Hammer(100,100);
}

function draw(){
    background("Blue");
    Engine.update(engine);
    stone.dislay();
    plane.display();
    rubber.display();
    hammer.display();
}