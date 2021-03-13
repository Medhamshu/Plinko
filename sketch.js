const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,790);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-10, width, 20)

  for (var i = 0; i <= width; i = i + 80)
  {
    divisions.push(new Division(i, height - divisionHeight/2, 13 , divisionHeight))
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  
  background(100,150,234); 
  Engine.update(engine);
  
  if (frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for (var j = 0; j < divisions.length + 31; j++){
    plinkos[j].display();
  }
  
  ground.display()

  drawSprites();
}