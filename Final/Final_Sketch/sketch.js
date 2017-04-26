var mic, level, storeLvl, easyLvl;
var lvlArr = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  level = mic.getLevel(); //this is the variable holding the raw amplitude
  camera(0, 0, 2000);
  easyLvl = floor(level * 100); //this variable converts the raw data into nice round numbers
  writeLevel(); //this function grabs the highest point the amplitude reaches and stores it
  for(var i = 0; i < easyLvl + 2; i++) {
    create();
  }
  push();
  translate(random(width), random(height), random(storeLvl*10));
  rotateX(frameCount);
  rotateZ(frameCount);
  box(100); //this little random box gives the user something to glance at besides the rings
  pop();
  // push();
  // pop();
  //console.log(floor(level*1000));
  console.log(easyLvl);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function writeLevel() {
  for (var i = 0; i < floor(easyLvl); i++) {
    lvlArr.push(i);
  } //this for loop creates an array of all the different data readings
  storeLvl = max(lvlArr); //this function grabs the highest out of the array at any point and puts it in storeLvl
  return storeLvl; //outputs that data
}


function drawSpeaker() {
  if (storeLvl < 30) { //initial ring, grows up to a certain point, remains the size of the largest amp reading
     ambientLight(255, 255, 255);  
    // ambientMaterial(200);
    specularMaterial(0, 0, easyLvl*50, 100-easyLvl*3);
    torus((storeLvl + 1) * 30, 30);
  } else if(storeLvl > 31 && storeLvl < 51) { //after the highest point peaks above 30, more rings spawn in and beat to the music
    torus((storeLvl) * 30, 30);
    push();
    specularMaterial(easyLvl *50, 0, 0, 100-easyLvl *3);
    sphere((storeLvl-10) * 10, 30);
    pop();
    specularMaterial(0, 0, easyLvl*50, 100-easyLvl*3);
    drawSound();
  } else { //if the highest point reaches over 50, the beat rings turn red
    push();
    specularMaterial(0, 0, easyLvl*50, 80-easyLvl);
    torus((storeLvl) * 30, 30);
    specularMaterial(easyLvl *50, 0, 0, 80-storeLvl);
    sphere((storeLvl-10) * 10, 30);
    pop();
    drawSound();
    specularMaterial(0, 0, easyLvl*50, 100-easyLvl*3);
  }
}
 function create() {
  translate(width / width, height / height);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.01); //rotating the Y axis a little faster so there's good movement.
  rotateZ(frameCount * 0.001);
  push();
  drawSpeaker();
  pop();
  // push();
  // rotateX(HALF_PI);
  // translate(width/width, height/height, 0);
  // drawSpeaker();
  // pop();
  push();
  rotateY(PI);
  drawSpeaker();
  pop();
}

function drawSound() { //moved this big chunk down here to save space in the draw function
//   directionalLight(250, 0, 50, (mouseX/width - 0.5) *2, -(mouseY/height-0.5)*2, 0.25);
//   ambientLight(255, 30, 10);  
//   ambientMaterial(100); //playing with lighting where the mouse is the light source
  translate(0, 0, -easyLvl * 55);
  push();
  torus(easyLvl * 40, 30);
  pop();
  translate(0, 0, -easyLvl * 45);
  push();
  torus(easyLvl * 30, 30);
  pop();
  translate(0, 0, -easyLvl * 35);
  push();
  torus(easyLvl * 20, 30);
  pop();
  translate(0, 0, -easyLvl * 25);
  push();
  torus(easyLvl * 10, 30);
  pop();
  translate(0, 0, -easyLvl * 15);
  push();
  torus(easyLvl * 2, 30);
  pop();
}