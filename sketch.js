const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand = new Ground(400,400,500,20);
    b1 = new Box(390,390,30,30);
    b2 = new Box(420,390,30,30);
    b3 = new Box(450,390,30,30);
    b4 = new Box(480,390,30,30);
    b5 = new Box(510,390,30,30);
    b6 = new Box(540,390,30,30);
    b7 = new Box(570,390,30,30);
    b8 = new Box(400,390,30,30);
    b9 = new Box(430,390,30,30);
    b10 = new Box(460,390,30,30);
    b11 = new Box(490,390,30,30);
    b12 = new Box(520,390,30,30);
    b13 = new Box(410,390,30,30);
    b14 = new Box(440,390,30,30);
    b15 = new Box(470,390,30,30);
    b16 = new Box(440,390,30,30);

    
    slingshot = new SlingShot(box.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();

    slingshot.display();    
}
i
function mouseDragged(){
    
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body);
    }
}