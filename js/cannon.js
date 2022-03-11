class Cannon {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
    }
    display() {
      if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
        this.angle -= 0.02;
      }
  
      fill("#676e6a");
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      rect(-20, -30, this.width, this.height);
      pop();
      arc(this.x - 70, this.y + 70, 100, 80, PI, TWO_PI);
      noFill();
    }
  }