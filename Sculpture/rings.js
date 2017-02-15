function Ring(number) {
  this.num = number;
  this.audio;
  this.video;
  this.accel;
}

Ring.prototype.draw = function() {
  translate(width / width, height / height);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  sphere(100, 100);
  torus(300, 10);
  box(10, 600, 10);
  push();
  translate(width / width, height / height - 100);
  torus(200, 10);
  translate(0, -100);
  torus(100, 10);
  pop();
  push();
  translate(width / width, height / height + 100);
  torus(200, 10);
  translate(0, 100);
  torus(100, 10);
  pop();
}

Ring.prototype.loop = function() {
  for (var i = 0; i <= this.num; i++) {
    rotateX(PI / 6);
    this.draw();
  }
}