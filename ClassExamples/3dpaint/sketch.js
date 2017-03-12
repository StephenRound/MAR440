var px;
var py;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  px = mouseX;
  py = mouseY;
  frameRate(20);
}

function draw() {
  var ip = 20;
  rotateY(frameCount * 0.01);
  for (var i = 0; i < ip; i++) {
    //fill(random(255), random(40), random(100));
    //noStroke();
    var rand = random(0, i);
    translate(px + rand, py + rand);
    push();
    sphere(ip / i);
    if (i > ip / 2) {
      box(60 / ip - i, 60 / ip - i, 60 / ip - i);
    }
    pop();
  }

  for (var r = 0; r <= 5; r++) {
    px += random(-1, 1);
    py += random(-1, 1);
  }
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}