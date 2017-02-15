var mic;
var level;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  mic.start();//this pulls the microphone on the device, and uses it to react to the user
}



function draw() {
  background(0);
  level = mic.getLevel(); //this gives a value to the sound coming from the mic, which it then assigns to the camera and blue color value
  camera(0, 0, 100 + level * 1000);
  translate(width / width + radians(rotationX), height / height + radians(rotationZ));
  //the radians and rotationX/Z apply to mobile devices. on the computer, they're just 0, and don't add anything to the translate. on the phone, it'll move the structure according to the device rotation.
  for (var i = 0; i < 4; i++) { //a for loop constructs four rings in the same place, but they rotate differently
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
  //rotateX(frameCount * 0.01); //these were commented out to allow for the phone rotation to take place.
  rotateY(frameCount * 0.01); //the structure still spins on the Z axis
  rotateZ(radians(rotationZ)); //these rotate the structure depending on the phone you view it on. it can be subtle, but noticable enough to see.
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