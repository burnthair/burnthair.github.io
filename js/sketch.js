var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine = Engine.create();

var render = Render.create({
  element: document.body.children[0].children[3],
  engine: engine,
  options: {
    background: 'rgba(0,0,0,0.2)',
    width: 500,
    height: 700,
    wireframes: false
  }
});

var constraints = {render: {opacity: 0}, isStatic: true };
var leftConstraint = Bodies.rectangle(3, 700, 5, 600, constraints);
var rightConstraint = Bodies.rectangle(497, 700, 5, 600, constraints);
var myHead = Bodies.circle(300, -100, 120, {render: {sprite: {texture: "./img/mve_head.svg"}}, restitution: 0.4});

var ground = Bodies.rectangle(250, 680, 510, 10, constraints);

World.add(engine.world, [leftConstraint, rightConstraint, myHead, ground]);

Engine.run(engine);

Render.run(render);
