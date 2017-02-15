var mic;
var level;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  mic.start();
}



function draw() {
  background(0);
  level = mic.getLevel();
  camera(0, 0, level * 1000);
  for (var i = 0; i < 4; i++) { //a for loop constructs three rings in the same place, but they rotate differently
    translate(width / width + radians(rotationX), height / height + radians(rotationZ));
    drawRing();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} //my classic windowResized function from my old sketches. i enjoy having an adaptable canvas

//this function creates a single ring object
function drawRing() {
  translate(width / width, height / height);
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  rotateZ(radians(rotationZ));
  rotateX(radians(rotationX));
  fill(mouseX, mouseY, level*1000); //easy color changing placeholder "interactive" element. working on p5.dom
  sphere(100, 100);
  torus(300, 10);
  box(10, 600, 10);
  push();
  translate(width / width, height / height - 100);
  torus(200, 10);
  translate(0, -100);
  torus(100, 10);
  pop();
  push();
  translate(width / width, height / height + 100);
  torus(200, 10);
  translate(0, 100);
  torus(100, 10);
  pop();
}