function Paper(papX, papY, papNum, papImg) {
  this.pos = createVector(papX, papY);
  this.number = papNum;
  this.sprite = papImg;
  this.accel = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.maxSpeed = 5;
  this.maxPreyDist = 100;
  this.caughtPrey = false;
  this.killing = false;
  this.size = 2;
}

Paper.prototype.frame = function(prey) {
  this.draw();
  this.move();
  this.hunt(prey);
}

Paper.prototype.draw = function() {

  push();
  translate(this.pos.x, this.pos.y);
  var heading = this.velocity.heading();
  rotate(heading + HALF_PI);
  image(this.sprite, 0, 0, 30, 30);
  pop();
}

Paper.prototype.move = function() {
  var moveAmount;
  var mul = 1;

  if (this.caughtPrey) {
    moveAmount = p5.Vector.sub(this.caughtPrey.pos, this.pos);
    var distance = moveAmount.mag();
    moveAmount.normalize();
    mul = constrain(map(distance, 0, 30, 0, 1), 0, 1);
  } else {
    var move = p5.Vector.random2D();
    move.mult(0.5)
  }

  this.accel = move;
  this.velocity.add(this.accel);
  this.velocity.mult(mul);
  this.velocity.limit(this.maxSpeed);

  move.normalize();

  this.checkBounds();

  this.pos.add(this.velocity);
}

Paper.prototype.checkBounds = function() {
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

Paper.prototype.hunt = function(prey) {

  for (var i = 0; i < prey.length; i++) {
    var beat = prey[i];


    var preyDist = p5.Vector.dist(beat.pos, this.pos);

    textSize(50);
    text(preyDist, 50, 50);


    if (preyDist <= this.maxPreyDist && prey.size >= 2) {
      this.caughtPrey = prey;
      this.kill(prey);
    }
  }
}

Paper.prototype.kill = function(prey) {
  if (this.caughtPrey) {
    if (p5.Vector.dist(this.pos, this.caughtPrey.pos) <= 1) {
      this.killing = true;
    }
  }

  if (this.killing) {
    this.prey = null;
    this.killing = false;
    this.caughtPrey = false;

  }
}