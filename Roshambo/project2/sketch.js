var rocks = [];
var scissors = [];
var paper = [];
var rockImg;
var scisImg;
var papImg;

function preload() {
  rockImg = loadImage("/assets/rock.png");
  scisImg = loadImage("/assets/scissors.png");
  papImg = loadImage("/assets/paper.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //for (var i; i < 3; i++) {
  rocks.push(new Contender(random(width) - 30, random(height) - 30, 1, rockImg));
  scissors.push(new Contender(random(width) - 30, random(height) - 30, 1, scisImg));
  paper.push(new Contender(random(width) - 30, random(height) - 30, 1, papImg));
  //}
}

function draw() {
  background(240);
  rocks.forEach(function(rock, idx) {
    rock.frame(scissors);
  });
  scissors.forEach(function(scissors, idx) {
    scissors.frame(paper);
  });
  paper.forEach(function(paper, idx) {
    paper.frame(rocks);
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}