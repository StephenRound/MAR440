function Ball(x, y, size) {
  this.x = random(x);
  this.y = random(y);
  this.size = size;

  this.ball = 0;

  this.rad = size / 2;

  this.dirX = 1;
  this.dirY = 1;
  this.maxDir = 10;

  this.maxWidth = width;
  this.maxHeight = height;

  this.r = random(256);
  this.g = random(256);
  this.b = random(256);

}

Ball.prototype.draw = function() {
  push();
  translate(this.x, this.y);
  fill(this.r, this.g, this.b);
  noStroke();
  this.ball = ellipse(0, 0, this.size);
  pop();
}

Ball.prototype.move = function() {
  this.x += this.dirX;
  this.y += this.dirY;
  this.edgeCheck();
}


Ball.prototype.edgeCheck = function() {
  if (this.x >= this.maxWidth) {
    this.dirX = random(this.maxDir) * -1;
  } else if (this.y >= this.maxHeight) {
    this.dirY = random(this.maxDir) * -1;
  } else if (this.x <= 0) {
    this.dirX = random(this.maxDir);
  } else if (this.y <= 0) {
    this.dirY = random(this.maxDir);
  }

}