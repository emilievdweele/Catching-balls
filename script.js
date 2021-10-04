var ball1;
var gatGrootte;
var scoreboard = 0;


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
    fill("white");
    ellipse(this.x, this.y, this.w, this.h)
    this.vy = this.vy + this.ay;
    this.y = this.y + this.vy;

    if (this.y > 385) {
      this.vy = 0;
      this.ay = 0;
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
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = "green";
  }

  drawBalk() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    this.x -= 5;
  }

  isColliding() {
    if (ball1.x < this.x + this.w &&
        ball1.x + ball1.w > this.x &&
        ball1.y < this.y + this.h &&
        ball1.y + ball1.h > this.y) {
      this.c = "red";
    }
    else{
      this.c = "green";
    }
  }

}

function setup() {
  createCanvas(800, 400);

  ball1 = new Ball(150, 200, 30, 30, 2)

  gatGrootte = 100;
}

var balk = [];

function draw() {
  background(225);
  ball1.drawBall();
  fill("white");
  text(scoreboard, 300, 50);


  if (frameCount % 80 == 0) {

    var gatHoogte = random(0, 400 - gatGrootte);

    let balk1 = new Balk(800, 0, 50, gatHoogte);
    let balk2 = new Balk(800, gatHoogte + gatGrootte, 50, 400);

    balk.push(balk1);
    balk.push(balk2);

    if (balk.length > 6) {
      balk.splice(0, 2);
    }
  }


  balk.forEach((b) => {
    b.drawBalk();
    b.isColliding();
  });
  if (frameCount % 90 == 0){
    scoreboard = scoreboard + 1
  }
}

function keyPressed() {
  if (keyCode == 32) {
    ball1.vy = -5;
  }
}

function isColliding() {
  colliding = false;
}