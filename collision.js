class Collision{
  constructor(ball, boundary){
    this.ball = ball;
    this.boundary = boundary;
  }

  update(ball, boundary){
    this.ball = ball;
    this.boundary = boundary;
  }

  contact_detect(){
    var isContact = false;
    var x0 = this.ball.x;
    var x1 = this.boundary.x1;
    var x2 = this.boundary.x2;
    var xmax = Math.max(x1[0],x2[0]);
    var xmin = Math.min(x1[0],x2[0]);
    var ymax = Math.max(x1[1],x2[1]);
    var ymin = Math.min(x1[1],x2[1]);
    var limit = this.ball.size / 2 + this.boundary.t / 2;
    if (x0[0] + limit < xmin){
      return isContact;
    }
    if (x0[0] - limit > xmax){
      return isContact;
    }
    var den = Math.sqrt(Math.pow(x2[1]-x1[1],2)+Math.pow(x2[0]-x1[0],2));
    if(den != 0){
      var num = Math.abs((x2[1] - x1[1]) * x0[0] - 
                         (x2[0] - x1[0]) * x0[1] + 
                         x2[0] * x1[1] -
                         x2[1] * x1[0]);
      var dist = num / den;
      if (dist <= limit){
        //console.log("contact has been defined")
        isContact = true;
      }
    }
    return isContact;
  }

  contact_direction(){
    var xbound = [0, 0];
    xbound[0] = this.boundary.x2[0] - this.boundary.x1[0];
    xbound[1] = this.boundary.x2[1] - this.boundary.x1[1];
    var dir = [xbound[1], xbound[0]];
    var module = Math.sqrt(dir[0]*dir[0] + dir[1]*dir[1]);
    if (module != 0){
      dir[0] = dir[0] / module;
      dir[1] = dir[1] / module;
    }
    return dir;
  }
}