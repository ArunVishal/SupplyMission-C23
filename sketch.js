const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
//vRod = vertical Rod
//hRod = horizontal Rod
var vRod1, vRod2, hRod1;
var vRod1Body, vRod2Body, hRod1Body;

function preload() {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	/*
	hRod1 = new HorizontalRod(400,650,200,20);
	vRod1 = new VerticalRod(300,600,20,100);
	vRod2 = new VerticalRod(500,600,20,100);
	*/

	hRod1 = createSprite(400, 650, 200, 20);
	hRod1.shapeColor = color(255,0,0);

	vRod1 = createSprite(310, 600, 20, 100);
	vRod1.shapeColor = color(255,0,0);

	vRod2 = createSprite(490, 600, 20, 100);
	vRod2.shapeColor = color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	hRod1Body = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	World.add(world, hRod1Body);

	vRod1Body = Bodies.rectangle(310, 600, 20, 100, {isStatic:true} );
	World.add(world, vRod1Body);

	vRod2Body = Bodies.rectangle(490, 600, 20, 100, {isStatic:true});
	World.add(world, vRod2Body);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);
  	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hRod1.x = hRod1Body.position.x
  hRod1.y = hRod1Body.position.y
  vRod1.x = vRod1Body.position.x
  vRod1.y = vRod1Body.position.y
  vRod2.x = vRod2Body.position.x
  vRod2.y = vRod2Body.position.y
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
  }
}



