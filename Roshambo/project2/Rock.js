function Rock(rockX, rockY, rockNum, rockImg) {
  this.pos = createVector(rockX, rockY);
  this.number = rockNum;
  this.sprite = rockImg;
  this.locs = [[0,0]];
}

Rock.prototype.frame = function() {
  this.draw();
}

Rock.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
  for (var i = 0; i < this.number; i++){
    push();
    translate(this.locs[i][0], this.locs[i][1]);
    image(this.sprite, 0, 0, 30, 30);
    pop();
  }
  pop();
}