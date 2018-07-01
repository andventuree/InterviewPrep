// Medium problems

/* --------------------------------------------------------------------- */
//1. Traversal methods for BST
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
//2. Construct a BST
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
          else currentNode.value = null;
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
      break;
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    //given a node, check if there are smaller values in the leaves
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
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
// console.log(testBST.remove(5));
// testBST.remove(5);

/* --------------------------------------------------------------------- */
//3. Validate a given BST
//time: O(n) must go to each node
//space: O(d) adds as many frames as there is depth of a branch
function validateBst(tree) {
  return validateHelper(tree, -Infinity, Infinity);
}

function validateHelper(tree, min, max) {
  if (!tree) return true;
  if (tree.value < min || tree.value >= max) return false;
  let validLeft = validateHelper(tree.left, min, tree.value);
  let validRight = validateHelper(tree.right, tree.value, max);
  return validLeft && validRight;
}

// console.log(validateBst(testTree));

/* --------------------------------------------------------------------- */

//4.
//time: O(n * d) d = # of denominations
//space: O(n) b/c you need an array to the extend of what number you're looking for
function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < denoms.length; i++) {
    let denomination = denoms[i];
    console.log("denomination: ", denomination);
    for (let j = 1; j < n + 1; j++) {
      if (denomination <= j) {
        ways[j] += ways[j - denomination];
        console.log(ways);
      }
    }
  }

  console.log(ways);
  return ways[n];
}

// numberOfWaysToMakeChange(10, [1, 5, 10, 25]); //4

/* --------------------------------------------------------------------- */

//5.
//time: O(n^2) only using 2 loops
//uses sort b/c O(n^2) is already worst than O(n log n) so it doesn't hurt
//space: O(n)
function threeNumberSum(array, targetSum) {
  let combinations = [];
  //since its likely that time complexity is at least O(n^2),
  //it doesn't hurt to sort to make it easier
  array.sort((a, b) => a - b); //selection sort < 10 O(n^2), quick sort >= 10 O(n log n)
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let calculation = array[i] + array[left] + array[right];
      if (calculation < targetSum) {
        left += 1;
      } else if (calculation > targetSum) {
        right -= 1;
      } else if (calculation === targetSum) {
        combinations.push([array[i], array[left], array[right]]);
        left += 1;
      }
    }
  }

  console.log("final combinations: ", combinations);
  return combinations;
}

// threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

/* --------------------------------------------------------------------- */

// 6.
//time: O(n * n!)
//time complexity derived by n (1 for loop) * n! (decrementing n for variations)
// n * n! + n * n! => 2 (n * n!) => n * n!
//space: O(n * n1)
function permutations(arr) {
  let permutationsArr = [];
  permutationsArrHelper(0, arr, permutationsArr);
  console.log(permutationsArr);
  return permutationsArr;
}

function permutationsArrHelper(i, arr, permutationsArr) {
  if (i === arr.length - 1) {
    return permutationsArr.push(arr.slice());
  } else {
    for (let j = i; j < arr.length; j++) {
      //keep swapping the indexes arounds
      swap(i, j, arr);
      permutationsArrHelper(i + 1, arr, permutationsArr);
      //have this here so once each permutation is done and call stack is cleared,
      //this resets the position of array
      swap(i, j, arr);
    }
  }
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(permutations(["a", "b", "c"]));
// permutations(["a", "b", "c"]);

/* --------------------------------------------------------------------- */

// 8.
//time: O(n log n) b/c of sort
//space: O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let smallestDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
  let pair = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    console.log(i, j);
    let currentCalc = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (currentCalc < smallestDiff) {
      smallestDiff = currentCalc;
      pair = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] > arrayTwo[j]) {
      j += 1;
    } else if (arrayOne[i] < arrayTwo[j]) {
      i += 1;
    } else {
      return [arrayOne[i], arrayTwo[j]];
    }
  }
  console.log(pair);
  return pair;
}

// smallestDifference([1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);

/* --------------------------------------------------------------------- */

// 9.
//time: O(n) only going through it with 1 pass
//space: O(1) only have a couple variables
function maxSum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    //start at idx 1 b/c you're already using idx 0
    let num = arr[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  console.log(maxSoFar);
  return maxSoFar;
}

maxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);

/* --------------------------------------------------------------------- */

// 10.
//time: O(n) - goes through entire string
//space: O(n) - need to store brackets
function balancedBrackets(string) {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let lastBracket = stack[stack.length - 1];
    if (char === "]") {
      if (lastBracket === "[") stack.pop();
      else return false;
    } else if (char === ")") {
      if (lastBracket === "(") stack.pop();
      else return false;
    } else if (char === "}") {
      if (lastBracket === "{") stack.pop();
      else return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0 ? true : false;
}

//time: O(n * 3 brackets) => O(n)
//space: O(n)
function bracketsBalanced(str) {
  let open = "[{(";
  let close = "]})";
  let brackets = { "]": "[", "}": "{", ")": "(" };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (open.includes(char)) {
      //is includes O(n)???
      stack.push(char);
    } else if (close.includes(char)) {
      if (stack.length === 0) return false;
      if (stack[stack.length - 1] === brackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

/* --------------------------------------------------------------------- */

// 11. Invert binary search tree
//time: O(n)
//space: O(n)

function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current !== null) {
      //if current is null, it is skipped
      swapLeftAndRight(current);
      queue.push(current.left);
      queue.push(current.right);
    }
  }
}

function swapLeftAndRight(tree) {
  //just like normal swap
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

/* --------------------------------------------------------------------- */

// 12. removeKthNodeFromEnd
//time: O(n) - length of linkedlist
//space: O(1)
function removeKthNodeFromEnd(head, k) {
  // if (!head) return head;
  let kth = head;
  let normal = head;
  for (let i = 0; i < k; i++) {
    kth = kth.next;
  }

  if (kth === null) {
    //edge case for when list isnt long enough (1 node)
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (kth.next !== null) {
    kth = kth.next; //k will hit the end
    normal = normal.next; //normal will hit kth nodes from end
  }
  normal.next = normal.next.next;
}
