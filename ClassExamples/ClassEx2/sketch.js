function setup() {
  createCanvas(600, 400);
  //frameRate(10);
}

var posX = 10;
var posY = 10;

var diamAuto = 20;
var radAuto = diamAuto / 2;

var diamMouse = 30;
var radMouse = diamMouse / 2;

var deltaX = 5;
var deltaY = 5;

function draw() {
  background('red');
  touchTimer();


  fill('blue');
  ellipse(posX, posY, diamAuto);

  posX = posX + deltaX;
  posY = posY + deltaY;

  if (posX >= width || posX < 0) {
    posX = 10;
  } else if (posY >= height || posY < 0) {
    posY = 10;
  }

  fill('green');
  ellipse(mouseX, mouseY, diamMouse);

  if (dist(posX, posY, mouseX, mouseY) <= radMouse + radAuto) {
    var opt = floor(random(2));
    if (opt === 0) {
      deltaX = (deltaX * -1.1);
    } else if (opt === 1) {
      deltaY = (deltaY * -1.1);
    } else if (opt === 2) {
      deltaX = 1;
      deltaY = 1;
    }


  }
  if (mouseY == posY + 10) {
    posY = -posY - 1;
  }

  mouseClicked();

}

var timeEllapsed = 0;
var maxTime = timeEllapsed;


function touchTimer() {
  timeEllapsed++;
  text(timeEllapsed, width / 2, height / 2);
  if (dist(posX, posY, mouseX, mouseY) <= radMouse + radAuto) {
    timeEllapsed = 0;
  }

  if (maxTime >= 150) {
    deltaX = (deltaX * 0.5);
    deltaY = (deltaY * 0.5);
  }
}

//wowie what a lot to keep track of