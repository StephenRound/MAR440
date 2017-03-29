var rocks = [];
var scissors = [];
var paper = [];
var rockImg;
var scisImg;
var papImg;

function preload() { //loading up the images
  rockImg = loadImage("assets/rockhand.png");
  scisImg = loadImage("assets/scishand.png");
  papImg = loadImage("assets/paperhand.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  spawn();
}

function draw() { //contains each contender and what they hunt
  background(255);
  rocks.forEach(function(rock, idx) {
    rock.frame(scissors);
  });
  scissors.forEach(function(scissors, idx) {
    scissors.frame(paper);
  });
  paper.forEach(function(paper, idx) {
    paper.frame(rocks);
  });
  rocks = rocks.filter(checkForKills); //these functions eliminate a contender that has been caught by its predator, if its size is zero
  scissors = scissors.filter(checkForKills);
  paper = paper.filter(checkForKills);
  checkWinner();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function checkForKills(value) { 
  if(value.size > 0){
    return true; //this function checks if the entity has been reduced to zero in size, then gets plugged into the filter function above
  }
}

function spawn() {
  for (var i = 0; i < 5; i++) { //why didn't this work at first? oh... i forgot the '= 0' after 'var i'. go figure.
    rocks.push(new Contender(random(width), random(height), rockImg)); //each identity of the contenders is assigned here.
    scissors.push(new Contender(random(width), random(height), scisImg));
    paper.push(new Contender(random(width), random(height), papImg));
  }
}

function checkWinner() { //this function replenishes the ecosystem when only one type of contender remains.
  var numDead = 0;
  if(rocks.length === 0){
    numDead++;
  } 
  if(paper.length === 0){
    numDead++;
  }
  if(scissors.length === 0){
    numDead++;
  }
  if(numDead >= 2){
    spawn();
    numDead = 0; //to keep the spawn loop going, numDead is reset every time spawn() is called.
  }
  
}