// Medium problems

/* --------------------------------------------------------------------- */
//1.
//time: O(n) - must go to each node
//space: O(v) - b/c recursive, only as deep as the longest branch on the call stack
function inOrderTraverse(tree, array) {
  if (tree) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  if (tree) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    const direction = val > this.value ? "right" : "left";
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
    return this;
  }

  contains(value) {
    if (this.value === value) return this; //return found node
    const direction = value > this.value ? "right" : "left";
    if (this[direction]) {
      return this[direction].contains(value);
    }
    return false;
  }

  remove(value) {
    if (this.contains(value)) {
      let nodeToRemove = this.contains(value);
      let childrenArr = this.inOrderTraverse(nodeToRemove, []); //arr of saved children
      // delete nodeToRemove; //need to break reference so it disppears //think LL
      console.log(childrenArr);
      console.log(this);
      childrenArr.forEach(childValue => this.insert(childValue));
      // console.log(this);
      return `${value} node was removed`;
    } else {
      return "nothing was removed";
    }
  }

  inOrderTraverse(tree, array) {
    if (tree) {
      this.inOrderTraverse(tree.left, array);
      array.push(this.value);
      this.inOrderTraverse(tree.right, array);
    }
    return array;
  }
}

const testTree = new BST(10)
  .insert(4)
  .insert(8)
  .insert(6)
  .insert(9)
  .insert(3);

inOrderTraverse(testTree, []);
preOrderTraverse(testTree, []);
postOrderTraverse(testTree, []);

// console.log(testTree.contains(9));
// console.log(testTree.remove(1));
console.log(testTree.remove(4));
