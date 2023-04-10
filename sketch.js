const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//crie as variaveis



function setup() 
{
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;



  //crie o chão



  //crie 20 boxes :D
  box1 = new Box(900, 100, 70, 70);
  

  //crie a bola :D



  //crie a corda que segurará a bola
  



}

function draw() 
{
  background(180);
  Engine.update(engine);
 
  //coloque os objetos criados apartir da classe para aparecer 
  box1.display();
  
  



}

//função que vai possibilitar da bola ser puxada pelo mouse 
function mouseDragged() 
{
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


