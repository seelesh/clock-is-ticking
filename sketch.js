var h;
var m;
var s;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  h=hour();
  m=minute();
  s=second();
  textSize(20);
  text('the clock is ticking, when are you gonna get a job',300,100)
  textSize(50);
  fill("red");
  text('time=> '+h+':'+m+':'+s,380,200)
  drawSprites();
}