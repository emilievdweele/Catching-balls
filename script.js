class Ball {
  constructor(x, y, w, h, gravity) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.gravity = gravity;
  }

  drawBall() {
    ellipse(this.x, this.y, this.w, this.h)
    this.y = this.y + this.gravity;
  
    if(this.y > 380) {
      this.gravity = 0;
    }
    if(this.y < 0) {
      this.y = 20;
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
    rect(this.x, this.y, this.w, this.h)
    this.x -= 5
  }
}

var ball1;

function setup() {
  createCanvas(800, 400);

  ball1 = new Ball(150, 200, 30, 30, 2)
}

function draw() {
  background(225);
  ball1.drawBall();

if(frameCount % 100 == 0){
  rect = new Balken(random)
}

}

function keyPressed() {
  if(keyCode == 32){
    ball1.y -= 60;
  }
}