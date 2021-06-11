const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;
var con2;
var Rockgobrrrrrr;


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  
  world = engine.world;


  var ROCKOP={
	  isStatic:"true",
  }
  var ball_options = {
    restitution: 0.8,
    frictionair:0.001,
  }
  
  
  ball = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(200,20,15,ball_options);
  World.add(world,ball5);
  Rockgobrrrrrr = Bodies.rectangle(450,1,200,10,ROCKOP);
  World.add(world,Rockgobrrrrrr);


  title=createElement('h2');
  title.html("Hi if you dont know what to do it's very simple just wait for some time for the balls to stop and then Learn PHYSICS( Note : use the Arrow for some FUN)")


  
  var LEFTImg=createImg('leftA.png');
  LEFTImg.size(50,50);
  LEFTImg.position(350,700);
  LEFTImg.mouseClicked(keyPressedL);





  
  con = Matter.Constraint.create({
          pointA:{x:500,y:5},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.001
        });
  
      World.add(world,con);
      con2 = Matter.Constraint.create({
		pointA:{x:480,y:5},
        bodyB:ball2,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.001
      });
	  World.add(world,con2);

      con3 = Matter.Constraint.create({
		pointA:{x:460,y:5},
        bodyB:ball3,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.001
      });
	  World.add(world,con3);

	  con4 = Matter.Constraint.create({
		pointA:{x:440,y:5},
        bodyB:ball4,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.001
      });
	  World.add(world,con4);

	  con5 = Matter.Constraint.create({
		pointA:{x:420,y:5},
        bodyB:ball5,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.001
      });
    World.add(world,con5);
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball2.position.x,ball2.position.y,15);
  ellipse(ball.position.x,ball.position.y,15);
  ellipse(ball3.position.x,ball3.position.y,15);
  ellipse(ball4.position.x,ball4.position.y,15);
  ellipse(ball5.position.x,ball5.position.y,15);
  rect(Rockgobrrrrrr.position.x,Rockgobrrrrrr.position.y,200,10);
  

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  
  
  pop();
  
}

function keyPressedL(){



  Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.01,y:0})




}


