function Branch(begin, end) {
  this.begin = begin;
  this.end = end;

  this.color = random(100, 255);

  this.finished = false;

  this.jitter = (a, b) => {
    this.end.x += random(a, b);
    this.end.y += random(a, b);
  }

  this.show = () => {
    stroke(this.color);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    strokeWeight(4);
  }

  this.branch = (angle = 0) => {
    this.finished = true;

    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(angle);
    dir.mult(0.7); // dampen the vector's length
    return new Branch(this.end, p5.Vector.add(this.end, dir));
  }
}
