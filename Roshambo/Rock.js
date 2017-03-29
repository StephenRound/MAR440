function Rock(posX, posY, img) {
  this.pos = createVector(posX, posY);
  this.sprite = img;
  this.accel = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.maxSpeed = 5;
  this.preyDist = createVector(0,0);
  this.maxPreyDist = 100;
  this.caughtPrey = false;
  this.killing = false;
  this.size = 30;
  this.killTime = 0;
}

Rock.prototype.frame = function(prey) {
  this.draw();
  this.move();
  this.hunt(prey);
}



Rock.prototype.move = function() {
  var moveAmount;
  var mul = 1;
  var move = createVector(0, 0);

  if (this.caughtPrey) {
    moveAmount = p5.Vector.sub(this.caughtPrey.pos, this.pos);
    var distance = moveAmount.mag();
    moveAmount.normalize();
    move = moveAmount;
    mul = constrain(map(distance, 0, 30, 0, 1), 0, 1);
  } else {
    move = p5.Vector.random2D();
    move.mult(0.5)
  }

  this.accel = move;
  this.velocity.add(this.accel);
  this.velocity.mult(mul);
  this.velocity.limit(this.maxSpeed);

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

Rock.prototype.hunt = function(preyArr) {

  for (var i = 0; i < preyArr.length; i++) {
    prey = preyArr[i];

    this.preyDist = p5.Vector.dist(prey.pos, this.pos);

    textSize(30);
    text("rock(after scissors): " + floor(this.preyDist), 50, 100);


    if (this.preyDist <= this.maxPreyDist && prey.size >= 30) {
      this.caughtPrey = prey;
    } else if (this.preyDist === 49) {
      this.pos.x = random(width);
    }
   this.kill(prey);
  }
};


Rock.prototype.kill = function(prey) {
  if (this.caughtPrey) {
    if (this.preyDist <= 100) {
      this.killing = true;
    }
  }

  if (this.killing) {
    this.killTime++;
    if (this.killTime % 5 === 0) {
      this.caughtPrey.size--;
    }
    if (this.caughtPrey.size === 0) {
      this.killing = false;
      this.killTime = 0;
      this.caughtPrey = false;
    }
  }
};

Rock.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
  var heading = this.velocity.heading();
  rotate(heading + HALF_PI);
  image(this.sprite, 0, 0, this.size, this.size);
  pop();
}