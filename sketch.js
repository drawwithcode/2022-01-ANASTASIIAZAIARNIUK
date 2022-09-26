function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  background("black");
  angleMode(DEGREES); 
  frameRate(20);
}

function draw() {
  // put drawing code here
  //inspired by Jakson Pollock
  translate (random(width), random(height)); 
  let mycolor = lerpColor(color("blue"), color("white"), frameCount / 100);
  stroke(mycolor);
  noFill(); 
  rotate(frameCount * 2); 
  circle(50, 50, 200);

  let mycolor1= lerpColor(color("yellow"), color("red"), frameCount / 100);
  stroke(mycolor1); 
  noFill(); 
  rotate(frameCount * 2); 
  circle(10, 10, 150);

  stroke("black");
  strokeWeight(2); 
  noFill(); 
  rotate(frameCount * 10); 
  circle(10, 10, 200);

  if (frameCount == 200) {
    noLoop();
  }
}
