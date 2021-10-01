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

  isColliding(){
    if(ball1.x > this.x){
      console.log("Bots");
    }
  }
}

var ball1;
var gatGrootte;

function setup() {
  createCanvas(800, 400);

  ball1 = new Ball(150, 200, 30, 30, 2)

  gatGrootte = 100;
}

var balken = [];

function draw() {
  background(225);
  ball1.drawBall();

  if(frameCount % 100 == 0){

    var gatHoogte = random(0, 400 - gatGrootte);

    let balk1 = new Balken(800, 0, 50, gatHoogte);
    let balk2 = new Balken(800, gatHoogte + gatGrootte, 50, 400);

    balken.push(balk1);
    balken.push(balk2);

    if(balken.length > 6){
      balken.splice(0,2);
    }
  }

  
  balken.forEach((b) => {
    b.drawBalken();
    b.isColliding();

  });


}

function keyPressed() {
  if(keyCode == 32){
    ball1.vy = -5;
  }
}