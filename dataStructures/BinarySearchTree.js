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
