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

class TesterBST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  //time: O(log n) - uses BST adv by cutting out half
  //space: O(log n) - b/c recursive, space is extent of call stack
  insert(val) {
    const direction = val > this.value ? "right" : "left";
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new TesterBST(val);
    return this;
  }

  //time: O(log n) - uses BST adv by cutting out half
  //space: O(log n) - b/c recursive, space is extent of call stack
  contains(value) {
    if (this.value === value) return this; //return found node
    const direction = value > this.value ? "right" : "left";
    if (this[direction]) {
      return this[direction].contains(value);
    }
    return false;
  }
}

const testTree = new TesterBST(10)
  .insert(4)
  .insert(8)
  .insert(6)
  .insert(9)
  .insert(3);

inOrderTraverse(testTree, []);
preOrderTraverse(testTree, []);
postOrderTraverse(testTree, []);

// console.log(testTree.contains(9));

/* --------------------------------------------------------------------- */
//2.
//time and space complexity: see respective methods
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  //time: O(log n) - uses BST adv
  //space: O(1) - only stores 1 node at a time "currentNode"
  insert(val) {
    let currentNode = this;
    while (currentNode) {
      console.log(currentNode);
      if (val >= currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new BST(val);
          break;
        }
      } else if (val < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = new BST(val);
          break;
        }
      }
    }
    return this;
  }

  //time: O(log n) - uses BST adv
  //space: O(1) - only stores 1 node at a time "currentNode"
  contains(val) {
    let currentNode = this;
    while (currentNode) {
      if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return true; //currentNode.value === val
      }
    }
    return false;
  }
  //time: O(n) - worst case, you have to go through entire tree to redistribute
  //space: O(1) - not recursive so only holds onto 2 node references at a time
  remove(val, parentNode = null) {
    let currentNode = this;
    while (currentNode) {
      //1st, we need to find the right node (value)
      //requires exploring left and right
      if (val > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        //2nd, we've found the right value
        if (currentNode.left && currentNode.right) {
          //a) both children exist
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
          // edge case: removing parent node
        } else if (!parentNode) {
          //no parent implies we've targeted the root node
          //first, use the left node to replace root node
          if (currentNode.left) {
            //reassign current node (root) to be the left node's contents
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
            //if left doesnt exist
            //reassign current node (root) to be the right node's contents
          } else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }
          ////You may have noticed if you target the root node,
          ////parentNode will never be assigned
          ////so this step will keep going until entire tree gets redistributed again

          //b) we found the node and its parent's left
        } else if (parentNode.left === currentNode) {
          //update parent's left to be one of currentNode's children
          parentNode.left = currentNode.left
            ? currentNode.left
            : currentNode.right;
          //c) we found the node and its parent's right
        } else if (parentNode.right === currentNode) {
          //update parent's right to be one of currentNode's children
          parentNode.right = currentNode.right
            ? currentNode.right
            : currentNode.left;
        }
      }
    }
    return this;
  }
}

// Steps to build remove method on BST
// 1) find the node to remove
// 2) once node is found, consider the circumstances:
//   a) no parent - removing the root node, b/c of this,
//      the entire tree needs to redistribute
//   b) 2 children (left and right) - find the smallest value and
//      replace root with smallest value
//   c) 1 child (left or right) - take whichever available and have parent reference
//      the child's children instead (this essentially removes target from tree)

let testBST = new BST(10)
  .insert(5)
  .insert(4)
  .insert(3)
  .insert(1);
// console.log(testBST);
// console.log(testBST.contains(6));
// console.log(testBST.contains(5));
console.log(testBST.remove(5));
// testBST.remove(5);
