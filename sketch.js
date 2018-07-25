var tree = [];
var leaves = [];

var angle;
var count = 0;

function setup() {
  var canvas = createCanvas(windowWidth, 500);
  canvas.parent('canvas');
  angle = random(0.25, PI/2);
  tree[0] = new Branch(createVector(width/2, height), createVector(width/2, height-100));
}

function buildTree() {
  if (count === 6) { return; } // Stop drawing the tree at the leaves

  for (let i = tree.length-1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branch(angle));
      tree.push(tree[i].branch(-angle));
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

  buildTree();
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (let i = 0; i < leaves.length; i++) {
    fill(139, 0, 139);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 3);
    leaves[i].x -= random(0, 1);
    leaves[i].x += random(0, 1);
  }
}
