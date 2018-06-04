// //linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.previous = null;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addToHead(val) {
//     let formerHead = this.head; //1) hold onto reference
//     let newNode = new Node(val); //2) create a new node for val

//     this.head = newNode; //3) assign the new head

//     if (formerHead) {
//       //4) make the connection
//       this.head.next = formerHead;
//       formerHead.previous = this.head;
//     }

//     if (!this.tail) this.head = this.tail; //5) if theres 1 node, its also the tail
//   }

//   removeHead() {
//     let formerHead = this.head; //1) hold onto reference
//     if (!formerHead) return; //2) if head didnt exist, then just return;

//     if (formerHead.next) {
//       //3) if head had a next
//       this.head = formerHead.next; //then make that head
//       this.head.previous = null; //reset new head's previous to null
//     } else {
//       //if no nodes left, reset it entirely
//       this.head = null;
//       this.tail = null;
//     }
//     return formerHead.value;
//   }

//   addToTail(val) {
//     const formerTail = this.tail; //1) hold onto reference
//     const newNode = new Node(val); //2) create new node for tail

//     this.tail = newNode; //3) reassign tail

//     if (formerTail) {
//       //4) need to connect them
//       this.tail.previous = formerTail;
//       formerTail.next = this.tail;
//     }

//     if (!this.head) this.head = this.tail; //5) if just 1 node, and head is not assigned yet, then its also the head
//   }

//   removeTail() {
//     const formerTail = this.tail; //1) hold onto reference
//     if (!formerTail) return; //2) if tail didnt exist, then just return

//     if (formerTail.previous) {
//       //3) sever connection
//       this.tail = formerTail.previous;
//       this.tail.next = null;
//     } else {
//       //4) no nodes left
//       this.head = null;
//       this.tail = null;
//     }

//     return formerTail.value; //5) just return value
//   }
// }

// //BST

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.smaller = null;
//     this.larger = null;
//     this.size = 1;
//   }

//   insert(val) {
//     const direction = val < this.value ? "smaller" : "larger";
//     if (this[direction]) this[direction].insert(val);
//     else this[direction] = new BST(val);
//     this.size++;
//   }
// }

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.previous = null;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   addToHead(val) {
//     const formerHead = this.head; //1) hold onto reference
//     const newNode = new Node(val); //2) create new node for new head
//     this.head = newNode; //3) reassign head

//     if (formerHead) {
//       //4) make connection
//       this.head.next = formerHead; //connect head with former
//       formerHead.previous = this.head; //connect former with head
//     }
//     if (!this.tail) this.tail = this.head; //if there's no tail, this new node is the tail as well
//   }

//   removeHead() {
//     const removedHead = this.head;
//     if (!removedHead) return;

//     if (removedHead.next) {
//       this.head = removedHead.next; //new head is former's next
//       this.head.previous = null; //sever connection
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return removedHead.value;
//   }

//   addToTail(val) {
//     const formerTail = this.tail;
//     const newNode = new Node(val);
//     this.tail = newNode;

//     if (formerTail) {
//       this.tail.previous = formerTail;
//       formerTail.next = this.tail;
//     }

//     if (!this.head) this.head = this.tail;
//   }

//   removeTail() {
//     const removedTail = this.tail;
//     if (!removedTail) return;
//     if (removedTail.previous) {
//       this.tail = removedTail.previous;
//       this.tail.next = null;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return removedTail.value;
//   }
// }

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//     this.size = 1;
//   }

//   insert(val) {
//     const direction = val > this.value ? "right" : "left";
//     if (this[direction]) this[direction].insert(val);
//     else this[direction] = new Node(val);
//     this.size++;
//   }
// }

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     const direction = val > this.value ? "right" : "left";
//     if (this[direction]) this[direction].insert(val);
//     else this[direction] = new BST(val);
//   }
// }

// class TreeNode {
//   constructor(val) {
//     this.value = val;
//     this.children = [];
//   }

//   insertChildren(val) {
//     const newTreeNode = new TreeNode(val);
//     this.children.push(newTreeNode);
//     return this; //to allow for chaining
//   }

//   DFS(arr) {
//     arr.push(this.value);
//     this.children.forEach(child => child.DFS(arr));
//     return arr;
//   }
// }

// let testTree = new TreeNode("A");
// testTree
//   .insertChildren("B")
//   .insertChildren("C")
//   .insertChildren("D");
// testTree.children[0].insertChildren("E").insertChildren("F");
// testTree.children[2].insertChildren("G").insertChildren("H");
// testTree.children[0].children[1].insertChildren("I").insertChildren("J");
// testTree.children[2].children[0].insertChildren("K");

// // console.log("final tree", testTree);

// // console.log(testTree.DFS([]));

// const sumTwoNums2 = (arr, target) => {
//   let store = {};
//   for (let i = 0; i < arr.length; i++) {
//     let difference = target - arr[i];
//     //check if we've seen a number that makes up the difference
//     if (store[difference]) {
//       //current number + difference makes the target
//       return [arr[i], difference].sort((a, b) => {
//         return a - b;
//       });
//     } else {
//       //store current num if difference isnt found
//       store[arr[i]] = true;
//     }
//   }
//   return [];
// };

// const sumTwoNums3 = (arr, target) => {
//   arr.sort();
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let currentSum = arr[left] + arr[right];
//     if (currentSum < target) {
//       left++;
//     } else if (currentSum > target) {
//       right--;
//     } else if (currentSum === target) {
//       return [arr[left], arr[right]];
//     }
//   }
//   return [];
// };

// sumTwoNums2([1, 2, 3, 4, 5], 8); //[3,5]
// sumTwoNums3([1, 2, 3, 4, 5], 8); //[3,5]

// class BSTNode {
//   constructor(val) {
//     this.value = val;
//     this.children = [];
//   }

//   addChild(val) {
//     this.children.push(val);
//   }

//   DFS(arr) {
//     arr.push(this.value);
//     this.children.forEach(child => child.DFS(arr));
//     return arr;
//   }
// }

// function findClosestValueInBST(tree, target) {
//   return findClosestHelper(tree, target, Infinity);
// }

// //recursive
// //time: O(V+E) - potentially go through all branches and leaves
// //space: O(V) - however deep a branch goes
// function findClosestHelperRecursive(tree, target, closest) {
//   if (!tree) return closest;

//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }

//   if (target > tree.value) {
//     return findClosestHelper(tree.right, target, closest);
//   } else if (target < tree.value) {
//     return findClosestHelper(tree.left, target, closest);
//   } else {
//     //only catches if they match
//     return closest;
//   }
// }

function findClosest(tree, target) {
  return findClosestHelperIterative(tree, target, Infinity);
}

//time: O(V + E)
//space: O(v)

function findClosestHelper(currentNode, target, closest) {
  if (!currentNode) return closest; //base case

  if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
    closest = currentNode.value;
  } //dynamic updates closest node

  if (target > currentNode.value) {
    return findClosestHelper(currentNode.right, target, closest);
  } else if (target < currentNode.value) {
    return findClosestHelper(currentNode.left, target, closest);
  } else {
    console.log("found", closest);
    return closest;
  }
}

function findClosestHelperIterative(currentNode, target, closest) {
  while (currentNode !== null) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }

    if (target > currentNode.value) currentNode = currentNode.right;
    else if (target < currentNode.value) currentNode = currentNode.left;
    else break;
  }
  console.log("closest: ", closest);
  return closest;
}

// For testing
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    const direction = val > this.value ? "right" : "left";
    //if theres a node in specified direction, then createa a node in that direction
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
    return this; //need for chaining
  }
}

let testBST = new BST(50)
  .insert(57)
  .insert(42)
  .insert(26)
  .insert(87)
  .insert(48)
  .insert(23)
  .insert(20)
  .insert(11) //test
  .insert(12) //test
  .insert(62)
  .insert(34)
  .insert(46)
  .insert(92)
  .insert(10)
  .insert(8)
  .insert(3)
  .insert(5); //test

//Assumption is you're giving a balanced tree to begin with
findClosest(testBST, 5); //5
