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
}

const testTree = new BST(10)
  .insert(4)
  .insert(8)
  .insert(6)
  .insert(3);

inOrderTraverse(testTree, []);
preOrderTraverse(testTree, []);
postOrderTraverse(testTree, []);
