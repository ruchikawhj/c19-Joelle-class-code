var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300, 300);
  ghost.addImage(ghostImg);
  ghost.scale = 0.4;

}

function draw() {
  background(0);
  if (gameState === "play") {
    if (tower.y > 400) {
      tower.y = 300
    }
    if (keyDown("space")) {
      ghost.velocityY = -10;
    }
    ghost.velocityY += 0.8;

    if (keyIsDown(LEFT_ARROW)) {
      ghost.x -= 4;//ghost.x=ghost.x-4;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      ghost.x += 4;//ghost.x=ghost.x+4;
    }
    if (ghost.y > 600) {
      gameState = "end";
    }
    spawnDoors();
    drawSprites();
  }
  if (gameState === "end") {
    textSize(30);
    stroke("red");
    strokeWeight(4);
    fill("yellow");
    text("Game Over", 250, 300);

  }
}

function spawnDoors() {

}
