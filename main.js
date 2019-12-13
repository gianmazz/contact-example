var bb = new Ball(300, 0);
var bound = new Boundary(200,200,400,300,10);
var flat;
var collisions = [];

function setup(){
  createCanvas(600, 600);
  flat = new Boundary(-100,590,700,590,10);
  collisions = [new Collision(bb, flat),
                new Collision(bb, bound)];
}

function draw(){
  background(200);

  collisions[0].update(bb, flat);
  collisions[1].update(bb, bound);

  var a = [0, 1];
  for(let i = 0; i < 2; i++){
    let iscontact = collisions[i].contact_detect();
    if(iscontact == true){
      let amod = Math.sqrt(a[0]*a[0] + a[1]*a[1]);
      let gap_dir = collisions[i].contact_direction();
      let ac = [amod * gap_dir[0], amod * gap_dir[1]];
      a[0] =  ac[0];
      a[1] = -ac[1];
    }
  }

  bb.update(a[0], a[1]);

  bb.draw();
  bound.draw();
  flat.draw();
}

function touchMoved() {
  mouseDragged();
}

function mouseDragged(){
  mousePress();
}

function mousePress(){
  let xm = mouseX;
  let ym = mouseY;
  let offset = 50;
  let dist = Math.pow(xm - bb.x[0], 2);
  dist = dist + Math.pow(ym - bb.x[1], 2);
  dist = Math.sqrt(dist);
  //console.log(dist);
  if(dist <= offset){
    bb.move(xm, ym);
  }

  offset = 0.5 * offset;
  let xg = bound.getXG();
  dist = Math.pow(xm - xg[0], 2);
  dist = dist + Math.pow(ym - xg[1], 2);
  dist = Math.sqrt(dist);
  if(dist <= offset){
    bound.move((xm-xg[0]), (ym-xg[1]));
  }

  let x1 = bound.x1;
  dist = Math.pow(xm - x1[0], 2);
  dist = dist + Math.pow(ym - x1[1], 2);
  dist = Math.sqrt(dist);
  if(dist <= offset){
    bound.moveX1((xm-x1[0]), (ym-x1[1]));
  }

  let x2 = bound.x2;
  dist = Math.pow(xm - x2[0], 2);
  dist = dist + Math.pow(ym - x2[1], 2);
  dist = Math.sqrt(dist);
  if(dist <= offset){
    bound.moveX2((xm-x2[0]), (ym-x2[1]));
  }

}