class Ball {
  constructor(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  }

  drawBall() {
  ellipse(this.x, this.y, this.w, this.h)
  }
}

function setup() {
  createCanvas(800, 400);

  ball1 = new Ball(150, 200, 30, 30)
}

function draw() {
  background(225);
  ball1.drawBall();
}