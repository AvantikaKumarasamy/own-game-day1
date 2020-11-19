const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
var backImg, pick, pickImg;


function preload(){
 backImg= loadImage("images/bg2.jpg");
 pickImg = loadImage("images/sad.png");
   }


function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  pick= createSprite(455,637, 50, 50);
  pick.addImage(pickImg);
  pick.scale= 0.2;

  cookie = new Cookies(324,286);
  Engine.run(engine);
}



function draw() {
  background(backImg);  

  Engine.update(engine);

  cookie.display();
  
  drawSprites();
  textSize(25);
  stroke("white");
  text(mouseX + "," + mouseY, 30,30);
}