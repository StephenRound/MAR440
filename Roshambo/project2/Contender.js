function Contender(posX, posY, img) { //originally, this sketch used a paper, rock, and scissors class. i've condensed it down to a contender class that gains its identity in the setup.
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
  this.score = 0;
}

Contender.prototype.frame = function(prey) {
  this.draw();
  this.move();
  this.hunt(prey); //this includes the killing function
}



Contender.prototype.move = function() { //the contender's movement function
  var moveAmount;
  var mul = 1;
  var move = createVector(0, 0);
  
  if (this.caughtPrey) { //this is what the contender will follow if it has prey in its sights. otherwise, it moves randomly and sporadically
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

Contender.prototype.checkBounds = function() { //keeping the contenders in the ring
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

Contender.prototype.hunt = function(preyArr) { //the hunt function tells the object to find its prey.

  for (var i = 0; i < preyArr.length; i++) {
    prey = preyArr[i]; //the sketch assigns identity to each contender in an array, and this takes each item of the prey's array

    this.preyDist = p5.Vector.dist(prey.pos, this.pos);
    
    // textSize(30);
    // text("Contender(after paper): " + floor(this.preyDist), 50, 150);
    //these used to be used to track the individual classes' proximity to each other when there were three identical classes. this text is useless now

    if (this.preyDist <= this.maxPreyDist) { //learned a lot about cutting code here. a lot of different iterations of this if statement were used before settling on this one.
      this.caughtPrey = prey; 
      this.kill();
    } 
  }
};


Contender.prototype.kill = function() {
  if (this.caughtPrey) {
      this.killing = true;
  }

  if (this.killing) {
    this.killTime++;
    if (this.killTime % 3 === 0) { //the size of the prey decreases every 3 milliseconds until its gone
      this.caughtPrey.size--;
      }
    }
    if (this.caughtPrey.size <= 0) {
      this.killTime = 0;
      this.caughtPrey = false;
    } //also learned a lot about cleaning code here. there was a lot of redundancy to get rid of
};

Contender.prototype.draw = function() { //the small contender img gets assigned and drawn here
  push();
  translate(this.pos.x, this.pos.y);
  var heading = this.velocity.heading();
  rotate(heading + HALF_PI); // the spinny function
  image(this.sprite, 0, 0, this.size, this.size);
  pop();
}