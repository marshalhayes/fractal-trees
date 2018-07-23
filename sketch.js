var tree = [];
var count = 0;
var leaves = [];

function setup() {
  var canvas = createCanvas(windowWidth, 600);
  canvas.parent('canvas');
  canvas.mousePressed(canvasMousePressed);

  tree[0] = new Branch(createVector(width/2, height), createVector(width/2, height-100));;
}

function canvasMousePressed() {
  if (count === 6) { return; } // Stop drawing the tree at the leaves

  for (let i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branch(PI/4));
      tree.push(tree[i].branch(-PI/6));
    }
  }
  count++;

  if (count === 6) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);

  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for (let i = 0; i < leaves.length; i++) {
    fill(139, 0, 139);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    // leaves[i].y += random(0, 2);
  }
}
