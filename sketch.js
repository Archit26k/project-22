var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var ground ;
var x;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;



	groundSprite=createSprite(width/2, 690, width,10);
	groundSprite.shapeColor=color(255)

	star = createSprite(650,30,3 );
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	groundBody = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true});
	World.add(world, groundBody);

	fairy1 = Bodies.rectangle(fairy.x , fairy.y , {isStatic:true})

	starBody = Bodies.circle(650, 30 , 3 , {restitution:1} );
	Matter.Body.setStatic(starBody,true);

	World.add(world, starBody);
	
  

	Engine.run(engine);
	

}


function draw() {

rectMode(CENTER)

  background(bgImg);

//  console.log(fairy.position.x)

star.position.x = starBody.position.x
star.position.y = starBody.position.y

if (star.y > 470 ) {
	Matter.Body.setStatic(starBody, true)
  }

 if (keyCode === DOWN_ARROW) 
 {
	Matter.Body.setStatic(starBody,false);
 }

//  keyPressed(fairy)
// edges(fairy)
//key(starBody)
  drawSprites();
// text(mouse.position.x , mouse.position.y , 30,50)

}

function keyPressed() {
	//write code here
	if (keyCode === LEFT_ARROW) {
		fairy.x =  fairy.x - 20
		
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x =  fairy.x + 20
	}


}



function edges(p1) {

	if (fairy.x > width) {
		fairy.x = 0
	}

	if (fairy.x < width-width) {
		fairy.x = 800
	}



}




