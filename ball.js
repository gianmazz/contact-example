class Ball{
  //let x[];
  //var v[];
  constructor(x,y){
    this.size = 50
    this.x = [x, y];
    this.v = [0, 0];
    this.a = [0, 0];
    this.mass = 10;
    this.dump = 1;
  }

  move(x, y){
    this.x = [x, y];
    this.v = [0, 0];
    this.a = [0, 0];
  }
  update(ax, ay){
    this.a = [ax, ay];
    this.v[0] = this.v[0] + ax;
    this.v[1] = this.v[1] + ay;
    this.v[0] = ax;
    this.v[1] = ay;
    this.x[0] = this.x[0] + this.v[0];
    this.x[1] = this.x[1] + this.v[1];
  }

  draw(){
    push();
    fill(255,0,100);
    ellipse(this.x[0], this.x[1], this.size, this.size);
    pop();
  }
}