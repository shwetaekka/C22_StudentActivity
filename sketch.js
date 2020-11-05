//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;

var object;

function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 50, 50);

  engine = Engine.create();
  myworld = engine.world;

  var options = { 
    isSleeping : true,
    density : 0.8
  }

  object = Bodies.rectangle(200,200, 50, 50, options);
  World.add(myworld, object);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);

  setTimeout(changeProp, 1000);

  drawSprites();
}

function changeProp(){

  Matter.Sleeping.set(object, false);

}