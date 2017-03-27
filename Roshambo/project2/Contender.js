function Contender(conX, conY, conImg) {
  this.pos = createVector(conX, conY);
  this.sprite = conImg;
  this.accel = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.maxSpeed = 5;
  this.maxPreyDist = 100;
  this.caughtPrey = false;
  this.killing = false;
  this.size = 2;
  this.killTime = 0;
}

Contender.prototype.frame = function() {
  this.draw();
  this.move();
  //this.hunt(prey);
}

Contender.prototype.move = function() {
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

Contender.prototype.checkBounds = function() {
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

/*Contender.prototype.hunt = function(prey) {
  var preyDist = p5.Vector.dist(prey.pos, this.pos);

  textSize(50);
  text(floor(preyDist), 50, 50);


  if (preyDist <= this.maxPreyDist && prey.size >= 2) {
    this.caughtPrey = prey;
    this.kill(prey);
  }
  
};

Contender.prototype.kill = function(prey) {
 if (this.caughtPrey) {
    if (p5.Vector.dist(this.pos, prey.pos) <= 1) {
      this.killing = true;
   }
  }

  if (this.killing) {
    this.killTime++;
    if (this.killTime % 5 === 0) {
      this.caughtPrey.size--;
    }
    if (this.caughtPrey.size <= 0) {
      this.killing = false;
      this.killTime = 0;
      this.caughtPrey = false;
    }
  }
}; */

Contender.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
  var heading = this.velocity.heading();
  rotate(heading + HALF_PI);
  image(this.sprite, 0, 0, this.size, this.size);
  pop();
}