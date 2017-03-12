function Scissors(sciX, sciY, sciNum, scisImg) {
  this.pos = createVector(sciX, sciY);
  this.number = sciNum;
  this.sprite = scisImg;
  this.locs = [[0,0]];
}

Scissors.prototype.frame = function() {
  this.draw();
}

Scissors.prototype.draw = function() {
  push();
  translate(this.pos.x, this.pos.y);
  for (var i = 0; i < this.number; i++) {
    push();
    translate(this.locs[i][0], this.locs[i][1]);
    image(this.sprite, 0, 0, 30, 30);
    pop();
  }
  pop();
}