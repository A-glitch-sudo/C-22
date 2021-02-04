
//Engine, World and Bodies
// namespace
const Engine = Matter.Engine; // create the physics engine - controller
const World = Matter.World;  // create the physical world and add objects to it
const Bodies = Matter.Bodies; // create the physical objects which inhabit the world

var engine, world; // variable for our engine and world - myEngine, myWorld
var ground;
var ball;



function setup() {
  createCanvas(400,400);
  engine = Engine.create(); // create method allows us to create our engine
  world = engine.world; // .world is the property 

  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  console.log(ground);
  console.log(ground.type);  // ground.attributename
  console.log(ground.position); 
  console.log(ground.position.x); //ex: position: {x:200,y:100}
  console.log(ground.position.y);

  var ball_options={
    //restitution means bounceiness
    restitution:1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ball);
}

function draw() {
  background(0,0,0);  //r,g,b 0-255
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}

                                     
