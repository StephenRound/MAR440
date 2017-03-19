function Scissors(sciX, sciY, sciNum, scisImg) {
  this.pos = createVector(sciX, sciY);
  this.number = sciNum;
  this.sprite = scisImg;
  this.accel = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.maxSpeed = 5;
}

Scissors.prototype.frame = function() {
  this.draw();
  this.move();
}

Scissors.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
   var heading = this.velocity.heading();
  rotate(heading-QUARTER_PI);  
  image(this.sprite, 0, 0, 30, 30);
  pop();
}

Scissors.prototype.move = function() {
  var move = p5.Vector.random2D();
  move.mult(0.5);

  this.accel = move;
  this.velocity.add(this.accel);
  this.velocity.limit(this.maxSpeed);
  
  move.normalize();

  this.checkBounds();

  this.pos.add(this.velocity);
}

Scissors.prototype.checkBounds = function() {
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