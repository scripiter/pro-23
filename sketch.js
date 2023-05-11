// Adicione o código para importar os módulos no arquivo sketch.js:
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body




// Adicione create canvas (adicionar tela), engine (mecanismo), e world (mundo)
// dentro da função setup() no arquivo sketch.js
function setup() {
  createCanvas(400,400);

  
    engine = Engine.create();
    word = engine.word;
  // Escreva o código dentro da função setup() no arquivo sketch.js para criar a variável
  // ball_options e o objeto bola.
var ball_options = {
  restitution:0.95,
  frictionAir:0.01
}


   
   var ground_options ={
     isStatic: true
   };
  
  
//    Crie o corpo retângulo chamado ground (solo) e adicione ao world dentro da função
// setup():
 ground = Bodies.rectangle(100,400,400,20,ground_options);
 World.add(world,ground);
    
  // Adicione o objeto bola ao mundo:
 ball=Bodies.circle(100,10,20,ball_options);
  world.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  // Adicione as posições x e y da bola:
  ellipseMode(ball.position.x.ball.y,20);
  // Dentro da função draw(), exiba o corpo do retângulo:
  rect(ball.position.x.ball.y,20);
 
console.log(ground.position.y);

  
  
}

