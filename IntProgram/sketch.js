var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 20; i++) {
    balls[i] = new Ball(width, height, random(10, 40))
  }
}

function draw() {
  background(0);
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}