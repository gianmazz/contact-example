class Boundary{
  constructor(x1, y1, x2, y2, t){
    this.x1 = [x1, y1];
    this.x2 = [x2, y2];
    this.t = t;
  }

  getXG(){
    return [(this.x2[0] + this.x1[0]) / 2, (this.x2[1] + this.x1[1]) / 2];
  }

  moveX1(dx, dy){
    this.x1 = [this.x1[0] + dx, this.x1[1] + dy];
  }

  moveX2(dx, dy){
    this.x2 = [this.x2[0] + dx, this.x2[1] + dy];
  }

  move(dx, dy){
    this.x1 = [this.x1[0] + dx, this.x1[1] + dy];
    this.x2 = [this.x2[0] + dx, this.x2[1] + dy];
  }


  draw(){
    let dx = this.x2[0] - this.x1[0];
    let dy = this.x2[1] - this.x1[1];
    let xg = (this.x2[0] + this.x1[0]) / 2;
    let yg = (this.x2[1] + this.x1[1]) / 2;
    let length = Math.pow(dx, 2);
    length = length + Math.pow(dy, 2);
    length = Math.sqrt(length);
    let alpha = 0;
    if (dx != 0){
      alpha = Math.atan(dy / dx);
    }
    push();
    fill(100,10,100);
    translate(xg, yg);
    rotate(alpha);
    rectMode(CENTER);
    rect(0,0,length,this.t);
    pop();
  }

}