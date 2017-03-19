function Rock(rockX, rockY, rockNum, rockImg) {
  this.pos = createVector(rockX, rockY);
  this.number = rockNum;
  this.sprite = rockImg;
  this.accel = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.maxSpeed = 5;
  this.size = 2;
}

Rock.prototype.frame = function() {
  this.draw();
  //this.move();
}

Rock.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
  var heading = this.velocity.heading();
  rotate(heading+PI);
  image(this.sprite, 0, 0, 30, 30);
  pop();
}

Rock.prototype.move = function() {
  var move = p5.Vector.random2D();
  move.mult(0.5);

  this.accel = move;
  this.velocity.add(this.accel);
  this.velocity.limit(this.maxSpeed);

  move.normalize();

  this.checkBounds();

  this.pos.add(this.velocity);
}

Rock.prototype.checkBounds = function() {
  if (this.pos.x >= width) {
    this.velocity.x = 0;
    this.accel.x *= -1;
    this.pos.x = width - 2;
  } else if (this.pos.x <= 0) {
    this.velocity.x = 0;
    this.accel.x *= -1;
    this.pos.x = 2;

  } else if (this.pos.y >= height) {
    this.velocity.y = 0;
    this.accel.y *= -1;
    this.pos.y = height - 2;

  } else if (this.pos.y <= 0) {
    this.velocity.y = 0;
    this.accel.y *= -1;
    this.pos.y = 2;
  }
};