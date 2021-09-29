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
    ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;
  
    if(this.y > 385) {
      this.vy = 0;
      this.ay = 0;
    }
    else {
      this.ay = 0.3;
    }
    if(this.y < 0) {
      this.y = 0;
    }
  }
}

class Balken {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  drawBalken() {
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }
}

var ball1;
var gatGrootte;

var balk1;
var balk2;

function setup() {
  createCanvas(800, 400);

  ball1 = new Ball(150, 200, 30, 30, 2)

  gatGrootte = 100;
}

function draw() {
  background(225);
  ball1.drawBall();

  if(frameCount % 100 == 0){

    var gatHoogte = random(0, 400 - gatGrootte);

    balk1 = new Balken(800, 0, 50, gatHoogte);
    balk2 = new Balken(800, gatHoogte + gatGrootte, 50, 400);
  }

  if (balk1 != null) {
    balk1.drawBalken();
    balk2.drawBalken();
  }

}

function keyPressed() {
  if(keyCode == 32){
    ball1.vy = -5;
  }
}