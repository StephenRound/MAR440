var rocks = [];
var scissors = [];
var rockImg;
var scisImg;

function preload() {
  rockImg = loadImage("/assets/rock.png");
  scisImg = loadImage("/assets/scissors.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rocks.push( new Rock(random(width), random(height), 4, rockImg));
  scissors.push( new Scissors(random(width), random(height), 4, scisImg));
}

function draw() {
  background(255);
  rocks.forEach( function(rock, idx){
    rock.frame();
  });
  scissors.forEach( function(scissors, idx){
    scissors.frame();
  });
}