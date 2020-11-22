const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2;
var holder,ball,slingshot,ploygonIMG;
var score=0;

function preload () {
ploygonIMG=loadImage("Hexagon.png");
}
 
function setup() {
createCanvas(900,400);

engine = Engine.create();
world = engine.world;
Engine.run(engine);

ground=new Ground();
stand1=new Stand(390,300,250,10);
stand2=new Stand(700,200,200,10);

//set one
//level one
block1=new Block(300,275,30,40);
block2=new Block(330,275,30,40);
block3=new Block(360,275,30,40);
block4=new Block(390,275,30,40);
block5=new Block(420,275,30,40);
block6=new Block(450,275,30,40);
block7=new Block(480,275,30,40);
//level two
block8=new Block(330,235,30,40);
block9=new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11=new Block(420,235,30,40);
block12=new Block(450,235,30,40);
//level three
block13=new Block(360,195,30,40);
block14=new Block(390,195,30,40);
block15=new Block(420,195,30,40);
//level four
block16=new Block(390,155,30,40);

//set two
//level one
Block1=new Block(640,175,30,40);
Block2=new Block(670,175,30,40);
Block3=new Block(700,175,30,40);
Block4=new Block(730,175,30,40);
Block5=new Block(760,175,30,40);
//level two 
Block6=new Block(670,135,30,40);
Block7=new Block(700,135,30,40);
Block8=new Block(730,135,30,40);
//level three
Block9=new Block(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingshot=new SlingShot(this.ball,{x:100,y:200});

}

function draw() {
  getBackground();
//background("#1E74FF");  
Engine.update(engine);

textSize(20);
fill("black");
text("Drag and Release the hexagonal stone to launch it towards the blocks",200,30);

text("SCORE :"+score,50,30);

fill("brown");
stand1.display();
stand2.display();
ground.display();
stroke("black");
strokeWeight(2);
fill("skyblue");
block1.display();
block1.score();
block2.display();
block2.score();
block3.display();
block3.score();
block4.display();
block4.score();
block5.display();
block5.score();
block6.display();
block6.score();
block7.display();
block7.score();
fill("lightpink");
block8.display(); 
block8.score();
block9.display();
block9.score();
block10.display();
block10.score();
block11.display();
block11.score();
block12.display();
block12.score();
fill("#F1B8FF");
block13.display();
block13.score();
block14.display();
block14.score();
block15.display();
block15.score();
fill("#FFF7DF");
block16.display();
block16.score();
fill("#9FFFB7");
Block1.display();
Block1.score();
Block2.display();
Block2.score();
Block3.display();
Block3.score();
Block4.display();
Block4.score();
Block5.display();
Block5.score();
fill("#EEFF86");
Block6.display();
Block6.score();
Block7.display();
Block7.score();
Block8.display();
Block8.score();
fill("#FFC44F");
Block9.display();
Block9.score();
imageMode(CENTER);
image(ploygonIMG,ball.position.x,ball.position.y,400,200);

slingshot.display();
drawSprites();
}

function mouseDragged() {
 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode===32) {
  // slingshot.attach(this.ploygonIMG);
  }
}

async  function getBackground() {
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON= await response.json();
  var time=responseJSON.datetime;
  var hour=time.slice(11,13);
  
  if (hour>=06 && hour<=18) {
    background("lightblue"); 
  }
  else {
     background("#1E74FF");
  }
}