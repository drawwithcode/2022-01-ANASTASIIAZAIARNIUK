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
}
