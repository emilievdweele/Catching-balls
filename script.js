var ball1;
var gatGrootte;
var scoreboard = 0;
var gameState = 0;
var balk = [];
var x = 0;
let img;

function preload(){
  flappybird = loadImage("images/pinkbird.png");
  tube = loadImage("images/Tube1.png");
  tubeTop = loadImage("images/Tube2.png");
  bgimg = loadImage("images/gamebackground.jpg");
  flap = loadSound("sfx_wing.mp3");
  bgimg2 = loadImage("images/startbackground.jpg");
  skull = loadImage("images/doodshoofd.png");
  bgimg3 = loadImage("images/graveyard.jpg");
}



class Ball {
  constructor(x, y, w, h, vy, ay) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vy = vy;
    this.ay = 0.3;
  }

  drawBall() {
    image(flappybird, this.x, this.y, this.w,this.h);
    //ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;

    if (this.y > 385) {
      gameState = 2;
    }
    else {
      this.ay = 0.3;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  }
}

class Balk {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
  }

  drawBalk() {
    //fill(this.c);

    image(this.img, this.x, this.y, this.w, this.h);
    this.x -= 5;
  }

  isColliding() {
    if (ball1.x < this.x + this.w &&
      ball1.x + ball1.w > this.x &&
      ball1.y < this.y + this.h &&
      ball1.y + ball1.h > this.y) {
      this.c = "red";
      gameState = 2;
      let highscore = getItem("highscore");
      if(scoreboard > highscore) {
        storeItem("highscore", scoreboard);
      }
    }
    else {
      this.c = "green";
    }
  }
}

function setup() {
  //bgimg = loadImage("images/gamebackground.jpg")
  createCanvas(800, 400);
  
  ball1 = new Ball(150, 200, 40, 30, 2)

  gatGrootte = 100;
}

function draw() {
  text("gameState" + gameState, 30, 30);

  if (gameState == 0) {
    menu();
    bg2 = loadImage("images/startbackground.jpg");
  }

  if (gameState == 1) {
    text("Start game", 30, 40)
    game();
  }

  if (gameState == 2) {
    background (bgimg3);
    image(skull, 307, 1);
    text("GAME OVER", 306, 196, textSize(30));
    fill("white");
    ball1 = new Ball(150, 200, 40, 30, 2)
    balk = [];
    x = 0;
    text("Highscore: " + getItem("highscore"), 330, 250, textSize(25));
    text("Score: " + scoreboard, 355, 280, textSize(25));
    text("Press Enter To Play Again", 305, 310, textSize(15))
    textFont("Georgia");
    textStyle("bold");
  }
}


function game() {
  background(bgimg);

  fill("white");
  text(scoreboard, 400, 50);
  textSize(20);


  if (frameCount % 80 == 0) {

    var gatHoogte = random(0, 400 - gatGrootte);

    let balk1 = new Balk(800, 0, 50, gatHoogte,tubeTop);
    let balk2 = new Balk(800, gatHoogte + gatGrootte, 50, 400,tube);

    balk.push(balk1);
    balk.push(balk2);

    if (balk.length > 6) {
      balk.splice(0, 2);
    }
  }

  ball1.drawBall();
  balk.forEach((b) => {
    b.drawBalk();
    b.isColliding();

    if(abs(b.x == ball1.x)){
      scoreboard = scoreboard + 0.5
    }
  });
}

function keyPressed() {
  if (keyCode == 32) {
    ball1.vy = -5;
    flap.play();
  }

  if (keyCode == 13) {
    gameState = 1;
    scoreboard = 0;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }
}

function isColliding() {
  colliding = false;
}


function menu() {
  background(bgimg2);
  text("Press Enter To Start", 280, 200)
  //text("Menu", 30, 40);
  //text("1. Start", 25, 65);
  //text("2. Game over", 25, 85);
  //text("3. Terug naar menu", 25, 105);
  fill("white");
  textSize(30);
   textFont('Georgia');
   textStyle("bold");
}