//Basic BST

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    const direction = this.value > val ? "left" : "right";
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
  }
}

let tree = new BST(5);
tree.insert(6);
tree.insert(9);
tree.insert(20);
tree.insert(5);
tree.insert(1);
tree.insert(100);
tree.insert(12);
tree.insert(4);

console.log(tree);

//Expanded example

class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.magnitude = 1; //size
  }

  insert(val) {
    //determine whether new node should go left or right
    const direction = val > this.value ? "right" : "left";
    //then check if this node already has a val for each direction,
    //if it does, the value has to go down the tree
    if (this[direction]) this[direction].insert(val);
    //if left / right is null b/c its a new node, then create a new node
    else this[direction] = new BinarySearchTree(val);
    this.magnitude++;
  }

  //EXTRA METHODS
  contains(val) {
    if (this.value === val) return true;
    //if value doesn't match current node, deter direction to for next node
    const direction = val < this.value ? "left" : "right";
    if (this[direction]) return this[direction].contains(val); //recursive
    return false;
  }

  size() {
    return this.magnitude;
  }

  //SEARCH METHODS
  // const testArr = [];
  // const fn = function(val){ testArr.push(val); };

  //need to know how to do w/o callback
  depthFirstForEach(fn, opt = "in-order") {
    //return all values with callback
    if (opt === "pre-order") fn(this.value);
    if (this.left) this.left.depthFirstForEach(fn, opt);

    if (opt === "in-order") fn(this.value);

    if (this.right) this.right.depthFirstForEach(fn, opt);
    if (opt === "post-order") fn(this.value);
  }

  //need to know how to do w/o callback
  breathFirstForEach(fn) {
    const queue = [this]; //create an array starting with currentNode
    //if there are nodes on queue, then:
    while (queue.length) {
      //take off current node
      const current = queue.shift();
      //then add other nodes of its level to the queue
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      fn(current.value);
    }
  }
}

//time: O(n) - need to visit each node
//space: O(n) - all the children will generally be on the queue
function invertBST(tree) {
  const queue = [tree];
  while (queue.length) {
    let current = queue.shift();
    if (current !== null) {
      swapLeftAndRight(current);
      queue.push(current.left);
      queue.push(current.right);
    }
  }
}

function swapLeftAndRight(tree) {
  let tempLeft = tree.left;
  tree.left = tree.right;
  tree.right = tempLeft;
}

//want to visit each tree, add the children, then dive into the children and add their children after, Order matters!
//need a queue DS
function BFS(tree) {
  let values = [];
  let queue = [tree]; //to start off
  while (queue.length) {
    let current = queue.shift(); //takes off the first elem
    //add the values to array
    //then add the children to the queue
    values.push(current.value);
    if (current !== null) {
      values.push(current.left);
      values.push(current.right);
    }
  }
  return values;
}

// When order matters, use a LL, Stack, Queue

function invertTree(tree) {
  //use a queue
  //add children to queue,
  //use a while loop
  //take off children from queue
  let queue = [tree];
  while (queue.length) {
    let current = queue.shift();
    if (current !== null) {
      swapLeftAndRight(current);
      queue.push(current.left);
      queue.push(current.right);
    }
  }
}

function swapLeftAndRight(tree) {
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}
