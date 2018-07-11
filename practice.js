let { homeworkTonight, tricks } = require("./HwHelper");

// homeworkTonight.genQuestions(5);
// tricks.genQuestions(5);

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

// function findClosest(tree, target) {
//   return findClosestHelperIterative(tree, target, Infinity);
// }

// //time: O(V + E)
// //space: O(v)

// function findClosestHelper(currentNode, target, closest) {
//   if (!currentNode) return closest; //base case

//   if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
//     closest = currentNode.value;
//   } //dynamic updates closest node

//   if (target > currentNode.value) {
//     return findClosestHelper(currentNode.right, target, closest);
//   } else if (target < currentNode.value) {
//     return findClosestHelper(currentNode.left, target, closest);
//   } else {
//     console.log("found", closest);
//     return closest;
//   }
// }

// function findClosestHelperIterative(currentNode, target, closest) {
//   while (currentNode !== null) {
//     if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
//       closest = currentNode.value;
//     }

//     if (target > currentNode.value) currentNode = currentNode.right;
//     else if (target < currentNode.value) currentNode = currentNode.left;
//     else break;
//   }
//   console.log("closest: ", closest);
//   return closest;
// }

// // For testing
// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     const direction = val > this.value ? "right" : "left";
//     //if theres a node in specified direction, then createa a node in that direction
//     if (this[direction]) this[direction].insert(val);
//     else this[direction] = new BST(val);
//     return this; //need for chaining
//   }
// }

// let testBST = new BST(50)
//   .insert(57)
//   .insert(42)
//   .insert(26)
//   .insert(87)
//   .insert(48)
//   .insert(23)
//   .insert(20)
//   .insert(11) //test
//   .insert(12) //test
//   .insert(62)
//   .insert(34)
//   .insert(46)
//   .insert(92)
//   .insert(10)
//   .insert(8)
//   .insert(3)
//   .insert(5); //test

// //Assumption is you're giving a balanced tree to begin with
// findClosest(testBST, 5); //5

//time: O(n^2) b/c you need multiple passes
//space: O(1) b/c you dont store anything with each pass
// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swapHelper(i, i + 1, arr);
//         isSorted = false;
//       }
//     }
//   }
//   console.log("arr: ", arr);
//   return arr;
// }

// function swapHelper(i, j, array) {
//   //pass by reference, so array will be changed when running through this function
//   let largerNum = array[i];
//   let smallerNum = array[j];
//   array[i] = smallerNum;
//   array[j] = largerNum;
//   console.log(array);
//   return array;
// }

// // bubbleSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

// function insertionSort(arr) {
//   //keep 1 number constant so have 1 initial for loop and then a while loop to keep track of multiple
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j - 1] > arr[j]) {
//       swapHelper(j, j - 1, arr);
//       j--;
//     }
//   }
//   console.log("arr: ", arr);
//   return arr;
// }

// insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     for (let j = i; j > 0 && array[j] < array[j - 1]; j -= 1) {
//       swap(j - 1, j, array);
//     }
//   }
//   console.log("sorted array:", array);
//   return array;
// }

// function swap(i, j, array) {
//   let smaller = array[i];
//   let larger = array[j];
//   array[j] = smaller;
//   array[i] = larger;
// }
// insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

//time: O(n^2)

// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       //going forward, check if each pair is in order
//       if (arr[i] > arr[i + 1]) {
//         swap(i, i + 1, arr);
//         //if a pair is not in order, update the tracker to say not sorted
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }

// //time: O(n^2) need to go through at least once then multiple passes to sort
// //space: O(1) not storing anyting, using same array
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) swap(j - 1, j, arr);
//     }
//   }
//   return arr;
// }

// //time: O(n^2) need to go through array at least once then multiple passes to sort
// //space: O(1) not storing anything
// //selection sort seems just like insertion sort in the other direction
// function selectionSort(arr) {
//   // let start = Date.now() / 1000;
//   for (let i = 0; i < arr.length; i++) {
//     let smallestIdx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[smallestIdx] > arr[j]) {
//         smallestIdx = j;
//       }
//     }
//     swap(i, smallestIdx, arr);
//     //having this here and not inside that if, doesn't save time
//     //its more about how you go about sorting it,
//     //Curious? call this function with over 400 arguments to see time duration
//   }
//   // let end = Date.now() / 1000;
//   // console.log("duration", end - start);
//   return arr;
// }

// function swap(i, j, arr) {
//   let larger = arr[i];
//   let smaller = arr[j];
//   arr[i] = smaller;
//   arr[j] = larger;
// }

// // console.log("bubbleSort", bubbleSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]
// // console.log("insertionSort", insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]
// // console.log("selectionSort", selectionSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

// // function compressedStr(str) {
// //   if (!str) return str;

// //   let cStr = "";
// //   for (let i = 0; i < str.length; i++) {
// //     let char = str[i]; //hold onto the start of a char
// //     let startOfLetter = i; //holds onto index of the start of a char
// //     while (i + 1 < str.length - 1 && char === str[i + 1]) {
// //       i++;
// //     }
// //     cStr += i - startOfLetter + 1 + char; //number type + string will type coerce to a string
// //     //b/c while loop incremements up i, you want to take away the start of the i,
// //   }
// //   return cStr.length < str.length ? cStr : str;
// // }

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//     this.previous = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add(val) {
//     let formerTail = this.tail; //hold onto reference
//     let newNode = new Node(val); //create a new node
//     this.tail = newNode; //assign the node to be the new tail
//     if (formerTail) {
//       //if there was a previous tail
//       this.tail.previous = formerTail; //connect the former tail with the current tail
//       formerTail.next = this.tail;
//     }
//     if (!this.head) this.head = this.tail; //if there was only 1 node, then the head is also the tail
//     return this;
//   }

//   remove() {
//     let removed = this.head; //hold onto reference
//     if (!removed) return; //if there were no nodes, return nothing
//     if (removed.next) {
//       //if there was more than one node, rewire the queue
//       this.head = removed.next;
//       this.head.previous = null; //next of the current head shouldnt exist anymore cause it was removed
//     } else {
//       this.head = null; //no values left, then queue is just null
//       this.tail = null;
//     }
//     return removed.value; //return removed value;
//   }

//   contains(val) {
//     return queueHelper(val, this.head);
//   }
// }

// function queueHelper(val, node) {
//   if (!node) return false;
//   else if (node.value === val) return true;
//   else return queueHelper(val, node.next);
// }

// let testQueue = new Queue();
// testQueue
//   .add(1)
//   .add(2)
//   .add(3)
//   .add(4)
//   .add(5);

// console.log(testQueue.contains(4));
// console.log(testQueue.contains(6));
// console.log(testQueue.remove());
// console.log(testQueue.remove());

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//     this.size = 1;
//   }

//   // time: O(n) | O(n) b/c of recursion
//   // insert(val) {
//   //   const direction = this.value > val ? "left" : "right";
//   //   if (this[direction]) this[direction].insert(val);
//   //   else this[direction] = new BSTNode(val);
//   // }

//   insert(val) {
//     let currentNode = this;
//     while (currentNode) {
//       if (currentNode.value >= val) {
//         if (currentNode.left) {
//           currentNode = currentNode.left;
//         } else {
//           currentNode.left = new BST(val);
//           break;
//         }
//       } else {
//         // if (currentNode.value < val) {
//         if (currentNode.right) {
//           currentNode = currentNode.right;
//         } else {
//           currentNode.right = new BST(val);
//           break;
//         }
//       }
//     }
//     return this;
//   }

//   contains(val) {
//     let currentNode = this;
//     while (currentNode) {
//       if (currentNode.value === val) {
//         return true;
//       } else if (currentNode.value > val) {
//         currentNode = currentNode.left;
//       } else {
//         currentNode = currentNode.right;
//       }
//     }
//     return false;
//   }

//   getMinValue() {
//     // let min = this.value;
//     // let currentNode = this;
//     // while (currentNode.left) {
//     //   if (min > currentNode.left.value) {
//     //     min = currentNode.left.value;
//     //     currentNode = currentNode.left;
//     //   } else if (min === currentNode.left.value) {
//     //     break;
//     //   }
//     // }
//     // return min;
//     let currentNode = this;
//     while (currentNode.left) {
//       currentNode = currentNode.left;
//     }
//     return currentNode.value;
//   }
// }

// function inOrderTraversal(tree, arr) {
//   if (tree) {
//     inOrderTraversal(tree.left, arr);
//     arr.push(tree.value);
//     inOrderTraversal(tree.right, arr);
//   }
//   return arr;
// }

// function preOrderTraversal(tree, arr) {
//   if (tree) {
//     arr.push(tree.value);
//     preOrderTraversal(tree.left, arr);
//     preOrderTraversal(tree.right, arr);
//   }
//   return arr;
// }

// function postOrderTraversal(tree, arr) {
//   if (tree) {
//     postOrderTraversal(tree.left, arr);
//     postOrderTraversal(tree.right, arr);
//     arr.push(tree.value);
//   }
//   return arr;
// }

// const testBST = new BST(10)
//   .insert(5)
//   .insert(6)
//   .insert(2)
//   .insert(1)
//   .insert(15)
//   .insert(22);
// // console.log(testBST);
// //Order of traversal really just dictates where the root node goes
// console.log(inOrderTraversal(testBST, []));
// console.log(preOrderTraversal(testBST, []));
// console.log(postOrderTraversal(testBST, []));

// function findClosestValue(tree, target) {
//   return findClosestHelper(tree, target, Infinity);
// }

// // function findClosestHelper(tree, target, closest) {
// //   if (!tree) return closest;
// //   while (tree) {
// //     if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
// //       closest = tree.value;
// //     }

// //     if (target > tree.value) {
// //       return findClosestHelper(tree.right, target, closest);
// //     } else if (target < tree.value) {
// //       return findClosestHelper(tree.left, target, closest);
// //     } else break;
// //   }
// //   return closest;
// // }

// function findClosestIterative(tree, target, closest) {
//   //notice the name
//   let currentNode = tree;
//   if (!tree) return closest;
//   while (currentNode) {
//     if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//       closest = tree.value;
//     }

//     if (target > tree.value) {
//       currentNode = tree.right;
//     } else if (target < tree.value) {
//       currentNode = tree.left;
//     } else break;
//   }
//   return closest;
// }

// function selectionSort(arr) {
//   let currentIdx = 0;
//   while (currentIdx < arr.length - 1) {
//     let smallestIdx = currentIdx;
//     for (let i = currentIdx + 1; i < arr.length; i++) {
//       if (arr[smallestIdx] > arr[i]) {
//         smallestIdx = i;
//       }
//     }
//     swap(currentIdx, smallestIdx, arr);
//     currentIdx += 1;
//   }
//   return arr;
// }

// class HashNode {
//   constructor(key, val) {
//     this.value = val;
//     this.key = key;
//   }
// }

// class HashTable {
//   constructor() {
//     this.numBuckets = 35;
//     this.buckets = new Array(35); //make an array with this many places
//   }

//   //given a key (to create a hash) and a value
//   set(key, val) {
//     //b/c this hashtable only handles strings, otherwise use an array
//     if (typeof key !== "string") throw new TypeError("Keys must be strings");
//     const hash = this.hash(key);
//     //given a hash, not put into HashTable
//     //if index is empty, make a linked list
//     this.buckets[hash] = this.buckets[hash] || new LinkedList();
//     //if index is not empty, add to head
//     this.buckets[hash].addToHead(new HashNode(key, val));
//   }

//   //get the value out of HashTable
//   get(key) {
//     const hash = this.hash(key); //decrypt
//     //.search is from linked list
//     return this.buckets[hash].search(node => node.key === key).value;
//   }

//   //
//   hasKey(key) {
//     const hash = this.hash(key);
//     //.search is from linked list
//     return Boolean(this.buckets[hash].search(node => node.key === key));
//   }

//   //encrypt
//   hash(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum % this.numBuckets;
//   }
// }

// class HashNode {
//   constructor(key, value) {
//     this.value = value;
//     this.key = key;
//   }
// }

// class HashTable {
//   constructor(num) {
//     this.numBuckets = num;
//     this.buckets = new Array(num); //make placeholder array
//   }

//   set(key, val) {
//     const hash = this.hash(key);
//     this.buckets[hash] = this.buckets[hash] || []; //or [] //new LinkedList(hash)
// this.buckets[hash].unshift(new HashNode(key, val));
//   }

//   get(key) {
//     let hash = this.hash(key);
//     let searchArr = this.buckets[hash];
//     console.log("searchArr: ", searchArr);

//     for (let i = 0; i < searchArr.length; i++) {
//       if (searchArr[i].key === key) return searchArr[i].value;
//     }
//     return "Does not exist in Hash Table";
//   }

//   hasKey(key) {
//     let hash = this.hash(key);
//     let searchArr = this.buckets[hash];
//     if (!searchArr) return false;
//     for (let i = 0; i < searchArr.length; i++) {
//       if (searchArr[i].key === key) return true;
//     }
//     return false;
//   }

//   hash(str) {
//     let charSum = 0; //create a tracker
//     for (let i = 0; i < str.length; i++) {
//       charSum += str.charCodeAt(i); //sum up all the codes
//     }
//     // console.log(str, charSum);
//     return charSum % this.numBuckets; //modulo the tracker for the hash
//   }
// }

// class HashNode {
//   constructor(key, val) {
//     this.key = key;
//     this.value = val;
//   }
// }

// class HashTable {
//   constructor(num) {
//     this.buckets = new Array(num);
//     this.numBuckets = num;
//   }

//   set(key, value) {
//     let hash = this.hash(key);
//     this.buckets[hash] = this.buckets[hash] || [];
//     this.buckets[hash].push(new HashNode(key, value));
//   }

//   get(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) return arr[i].value;
//     }
//     return false;
//   }

//   hasKey(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     if (!arr) return false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) return true;
//     }
//     return false;
//   }

//   hash(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum % this.numBuckets;
//   }
// }

// class HashNode {
//   constructor(key, val) {
//     this.key = key;
//     this.value = val;
//   }
// }

// class HashTable {
//   constructor(size) {
//     this.numBuckets = size;
//     this.buckets = new Array(size);
//   }

//   set(key, val) {
//     let hash = this.hash(key);
//     this.buckets[hash] = this.buckets[hash] || [];
//     this.buckets[hash].push(new HashNode(key, val));
//   }

//   get(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     if (!arr) return "Key does not exist";
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) return arr[i].value;
//     }
//     return "Key does not exist";
//   }

//   hasKey(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     if (!arr) return false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) return true;
//     }
//     return false;
//   }

//   hash(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum % this.numBuckets;
//   }
// }

// let testHashTable = new HashTable(10);
// testHashTable.set("booger", "i picked first");
// testHashTable.set("ham", "not a fan of");
// testHashTable.set("xyz", "abc");
// console.log(
//   testHashTable
// ); /* HashTable {
//   buckets: [ [ [Object] ], , , [ [Object] ], , , , , [ [Object] ],  ],
//   numBuckets: 10 } */
// console.log(testHashTable.get("ham")); //not a fan
// console.log(testHashTable.hasKey("ham")); //true
// console.log(testHashTable.hasKey("cheese")); //false

// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i - 1]) {
//         swap(i, i - 1, arr);
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// console.log(bubbleSort([9, 3, 26, 2, 16, 2]));

// function highestScore(arr) {
//   let maxStudent = null;
//   let maxAvg = 0;
//   let records = {};
//   arr.forEach(student => {
//     let name = student[0];
//     let score = Number(student[1]);
//     if (!records[name]) {
//       records[name] = { n: 1, score };
//     } else {
//       let prevTotal = records[name].score * records[names].n;
//       records[name].n += 1;
//       records[name].score = (prevTotal + score) / records[name].n;
//     }
//     if (records[name].score > maxAvg && records[name].n > 1) {
//       maxAvg = records[name].score;
//       maxStudent = name;
//     }
//   });
//   return maxStudent, maxAvg;
// }

// function upFrontZeros(arr) {
//   let pointer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       swap(i, pointer, arr);
//       pointer++;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// upFrontZeros([1, 2, 32, 42, 42, 5, 0, 0, 0, 0]);

// class HashNode {
//   constructor(key, val) {
//     this.value = val;
//     this.key = key;
//   }
// }

// class HashTable {
//   constructor(num) {
//     this.numBUckets = num;
//     this.buckets = new Array(num);
//   }

//   set(key, val) {
//     let hash = this.hash(key);
//     this.buckets[hash] = this.buckets[hash] || [];
//     this.buckets[hash].push(new HashNode(key, val));
//     return this;
//   }

//   get(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) {
//         return arr[i].value;
//       }
//     }
//     return false;
//   }

//   hasKey(key) {
//     let hash = this.hash(key);
//     let arr = this.buckets[hash];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].key === key) return true;
//     }
//     return false;
//   }

//   hash(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//       sum += str.charCodeAt(i);
//     }
//     return sum % this.numBuckets;
//   }
// }

// let testHash = new HashTable(5);
// console.log(
//   testHash.set("booger", "ham"),
//   testHash.get("booger"),
//   testHash.hasKey("booger")
// );

// function validBST(tree) {
//   validHelper(tree, -Infinity, Infinity);
// }

// function validHelper(tree, min, max) {
//   if (tree.value <= min || tree.value > max) return false;
//   let validLeft = validHelper(tree.left, min, tree.value);
//   return validLeft && validHelper(tree.right, tree.value, max);
// }

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     let currentNode = this;
//     while (currentNode) {
//       if (val > currentNode.value) {
//         if (currentNode.right) {
//           currentNode = currentNode.right;
//         } else {
//           currentNode.right = new BST(val);
//         }
//       } else {
//         if (currentNode.left) {
//           currentNode = currentNode.left;
//         } else {
//           currentNode.left = new BST(val);
//         }
//       }
//     }
//     return this;
//   }

//   contains(val) {
//     let currentNode = this;
//     while (currentNode) {
//       if (currentNode.value === val) {
//         return true;
//       } else if (val > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (val < currentNode.value) {
//         currentNode = currentNode.left;
//       }
//     }
//     return false;
//   }

//   getMin(){
//     let currentNode = this;
//     let min = currentNode.value;
//     while(currentNode){
//       if (currentNode.value < min){
//         min = currentNode.value;
//       } else {
//         currentNode = currentNode.left
//       }
//     }
//     return min;
//   }

// }

// function findClosest(tree, target, closest){
//   let currentNode = this;
//   while(currentNode){
//     if (Math.abs(target-currentNode.value) < Math.abs(target - closest)){
//       closest = currentNode.value;
//     }
//     if (target < currentNode.value){
//       currentNode = currentNode.left //findClosest(currentNode.left, target, closest) wouldnt need the while loop then
//     } else if (target > currentNode.value){
//       currentNode = currentNode.right;
//     } else {
//       return currentNode.value; //b/c it has matched target
//     }
//   }
//   return closest;
// }

// function DFSinOrder(tree, arr) {
//   if (tree) {
//     DFS(tree.left, arr);
//     arr.push(tree.value);
//     DFS(tree.right, arr);
//   }
//   return arr;
// }

// function DFSpreOrder(tree, arr) {
//   if (tree) {
//     arr.push(tree.value);
//     DFSpreOrder(tree.left, arr);
//     DFSpostOrder(tree.right, arr);
//   }
// }

// function DFSpostOrder(tree, arr){
//   if (tree){
//     DFSpostOrder(tree.left, arr)
//     DFSpostOrder(tree.right, arr):
//     arr.push(tree.value)
//   }
// }

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function validBST(tree) {
//   return validHelper(tree, -Infinity, Infinity);
// }

// function validHelper(tree, min, max) {
//   if (tree.value < min || tree.value > max) return false;
//   let leftSearch = validHelper(tree.left, min, tree.value);
//   return leftSearch && validHelper(tree.right, tree.value, max);
// }

// //time: O(n) only going forward and order doesn't matter
// function upFrontZeros(arr) {
//   let zeroPosition = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       swap(i, zeroPosition, arr);
//       zeroPosition++;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// // upFrontZeros([1, 2, 3, 4, 5, 0, 0, 0, 0]);

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// //time: O(n^2)
// function backZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let j = i;
//     while (arr[i] === 0 && j < arr.length - 1) {
//       swap(i, j + 1, arr);
//       j++;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// // backZeros([0, 0, 0, 0, 1, 2, 3, 4, 5]); //[1,2,3,4,5,0,0,0,0]

// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j] < arr[j - 1]) {
//       swap(j, j - 1, arr);
//       j--;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// // insertSort([1, 2, 3, 4, 5, 0, 0, 0, 0]);

// function selectionSort(arr) {
//   for (let currIdx = 0; currIdx < arr.length - 1; currIdx++) {
//     let smallestIdx = currIdx;
//     for (let i = currIdx + 1; i < arr.length; i++) {
//       if (arr[smallestIdx] > arr[i]) smallestIdx = i;
//     }
//     swap(currIdx, smallestIdx, arr);
//   }
//   console.log(arr);
//   return arr;
// }

// selectionSort([1, 2, 3, 4, 5, 0, 0, 0, 0]);

// function nWays(n) {
//   //4
//   let ways = new Array(n + 1).fill(0);
//   // [0,1,2,3,4]
//   ways[0] = 1;
//   let moves = [1, 2, 3];
//   for (let i = 0; i < moves.length; i++) {
//     let stepOption = moves[i];
//     for (let j = 1; j < ways.length; j++) {
//       if (stepOption <= j) {
//         ways[j] = ways[j] + ways[j - stepOption];
//       }
//     }
//   }
//   console.log(ways[n]);
//   return ways[n];
// }

// nWays(4); //1,1,1,1 | 2,1,1 | 2,2 | 3,1

// function rotateTimes(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) return i;
//   }
//   return "not rotated";
// }

// console.log(rotateTimes([1, 2, 3, 4, 5, 0, 0, 0, 0]));

// function maxProfit(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       maxProfit += prices[i] - prices[i - 1];
//     }
//   }
//   return maxProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
// console.log(maxProfit([1, 2, 3, 4, 5])); //4
// console.log(maxProfit([7, 6, 4, 3, 1])); //0

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.previous = null;
//     this.next = null;
//   }
// }

// class LinekdList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   addToHead(val) {
//     let formerHead = this.head;
//     let newNode = new Node(val);
//     this.head = newNode;
//     if (formerHead) {
//       formerHead.previous = this.head;
//       this.head.next = formerHead;
//     }
//     if (!this.tail) this.tail = this.head;
//   }

//   removeHead() {
//     let formerHead = this.head;
//     if (!formerHead) return;
//     if (formerHead.next) {
//       this.head = formerHead.next;
//       this.head.previous = null;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return formerHead.value;
//   }

//   addToTail(val) {
//     let formerTail = this.tail;
//     let newNode = new Node(val);
//     this.tail = newNode;
//     if (formerTail) {
//       formerTail.next = this.tail;
//       this.tail.previous = formerTail;
//     }
//     if (!this.head) this.head = this.tail;
//   }

//   removeTail() {
//     let formerTail = this.tail;
//     if (!formerTail) return;
//     if (formerTail.previous) {
//       this.tail = formerTail.previous;
//       this.tail.next = null;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return formerTail.value;
//   }
// }

// function compressStr(str) {
//   if (!str) return str;
//   let cStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let letterStart = i;
//     //not at the end, and next char is the same
//     while (i + 1 < str.length && char === str[i + 1]) {
//       i++;
//     }
//     cStr += i - letterStart + 1 + char;
//   }
//   return cStr.length < str.length ? cStr : str;
// }

// compressStr("aabbbbcccceeeddd");

//Triple Stack - use an array that keeps track of 3 stacks,
//need an array to hold all values
//need an array to hold length of each stack
//push, pop, peak, getLength,

// class TripleStack {
//   constructor() {
//     this._arr = []; //keeps all values in increments of 3
//     this._length = [0, 0, 0]; //track length for each stack
//   }

//   _getLength(stack) {
//     //idicate stack you want
//     return this._length[stack - 1]; //offset index 0
//   }

//   push(stack, value) {
//     let length = this._getLength(stack);
//     let idx = length * 3 + stack - 1;
//     this._arr[idx] = value; //add value to arr
//     this._length[stack - 1]++; //add to length tracker
//   }

//   pop(stack) {
//     let length = this._getLength(stack);
//     let value;
//     if (length > 0){
//       let idx = length * 3 + stack - 1;
//       value = this._arr[idx];
//       this._arr[idx] = undefined;
//       this._length[stack - 1]--;
//     }
//     return value;
//   }

//   peek(stack) {
//     let length = this._getLength(stack);
//     if (length > 0){
//       let idx = length * 3 + stack - 1;
//       return this._arr[idx];
//     }
//   }
// }

// function compressStr(str) {
//   if (!str) return str;
//   let cStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let startPoint = i; //startPoint - i + 1(index 0) = how many times a letter repeats
//     while (char === str[i + 1] && i + 1 < str.length) {
//       i++;
//     }
//     cStr += i - startPoint + 1 + char;
//   }
//   return cStr.length < str.length ? cStr : str;
// }

//use an array to hold values for 3 stacks, stacks add and remove from the top
//we use a second aray to keep track of length of each stack
//need a calculator for length to know where to put elements, dont rely on push and pop
//_getLength, push, pop, peek
//push(stack, value)
//pop(stack)
//peek(stack) - need to know what stack to look at

// class TripleStack {
//   constructor() {
//     this._array = [];
//     this._length = [0, 0, 0];
//   }

//   _getLength(stack) {
//     return this._length[stack - 1]; //not using .length method
//   }

//   push(stack, value) {
//     //get the length to know where to add next spot
//     let length = this._getLength(stack);
//     //use length to figure out idx
//     let idx = length * 3 + (stack - 1); //add space for next spot
//     //then put value at that spot
//     this._array[idx] = value;
//     this._length[stack - 1]++;
//   }

//   pop(stack) {
//     let length = this._getLength(stack);
//     //if there's even items in the stack you want
//     let value;
//     if (length > 0) {
//       let idx = length * 3 + stack - 1;
//       value = this._array[idx]; //take the value off
//       this._array[idx] = undefined; //reset that position
//       --this._length[stack - 1];
//     }
//     return value;
//   }

//   peek(stack) {
//     let length = this._getLength(stack);
//     if (length > 0) {
//       let idx = length * 3 + stack - 1;
//       return this._array[idx];
//     }
//   }
// }

//goal is to create a stack that always knows the minimum num O(1) access
//do this by putting a min property on each node so it always knows the min

//push, pop, isEmpty, peek, min

// class MinStack {
//   constructor() {
//     this._stack = [];
//   }

//   push(val) {
//     let min = this.min();
//     this._stack.push({
//       value: val,
//       min: Math.min(min !== undefined ? min : Infinity, val)
//     });
//   }
//   min() {
//     if (!this.isEmpty()) {
//       return this._stack[this._stack.length - 1].min;
//     }
//   }
//   pop() {
//     if (!this.isEmpty()) {
//       return this._stack.pop().value;
//     }
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this._stack[this._stack.length - 1].value;
//     }
//   }
//   isEmpty() {
//     return this._stack.length === 0;
//   }
// }

//use 2 stacks to operate like a queue
//use 1 stack normally, but when you dequeue, you shift everything into dequeue stack to reverse the order to behave like a queue

// class DoubleStackQueue {
//   constructor() {
//     this.enStack = [];
//     this.deStack = [];
//   }

//   enqueue(val) {
//     this.enStack.push(val);
//   }
//   dequeue() {
//     //if deStack deson't have anything in it,
//     //then reverse order
//     if (this.enStack.length === 0 && this.deStack.length === 0) return;
//     if (this.deStack.length === 0) {
//       //fill up deStack only if its empty
//       while (this.enStack.length > 0) {
//         this.deStack.push(this.enStack.pop()); // reverses order of stack
//       }
//     }
//     return this.deStack.pop();
//     //deStack has values, then return the top value
//   }
// }

// null -> {value: 1, next: 2} - {value: 2, next: 3} - {value: 3, next: 4}
// {value: 4, next: 3} - {value: 3, next: 2} - {value: 2, next: 1} -> null

// function reverseLL(head) {
//   let prevNode = null;
//   while (head !== null) {
//     //start {value: 1, next: 2}
//     let originalOrder = head.next;
//     //originalOrder = {value: 2, next: 3} from {value: 1, *next: 2*}
//     head.next = prevNode; //{value: 1, next: null}
//     prevNode = head; //prevNode = null -> {value: 1, next: null}
//     head = originalOrder; //head = {value: 2, next: 3}
//   }
//   return prevNode;
// }

// function reverse(head) {
//   let prevNode = null;
//   while (head !== null) {
//     let originalNextNode = head.next;
//     head.next = prevNode;
//      one thing to realize: we dont need to change head.value, cause each node already has that, rather, you're only updating the next "pointer/reference"
//     prevNode = head; //makes the whole head available for later
//     head = originalNextNode; //moves along while loop
//   }
//   return prevNode;
// }

//time: O(n + 2) => O(n)
//space: O(1)
// function maxSum(arr) {
//   //keep track of maxSoFar
//   //keep track of sumUp to current num;
//   //compare sum to current num, if current number, the entire thing is scrapped
//   let maxSoFar = arr[0];
//   let sumTilHere = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     let currNum = arr[i];
//     sumTilHere = Math.max(currNum, sumTilHere + currNum);
//     maxSoFar = Math.max(maxSoFar, sumTilHere); //compare itself and reassign as necessary
//   }
//   console.log("maxSoFar: ", maxSoFar);
// }

// maxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]); //19

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class SingleLL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let formerHead = this.head;
    let newNode = new Node(val);
    this.head = newNode;
    if (formerHead) this.head.next = formerHead;
    return this;
  }

  remove() {
    let formerHead = this.head;
    if (!formerHead) return;
    if (formerHead.next) {
      this.head = formerHead.next;
    }
  }
}

let List129 = new SingleLL()
  .add(9)
  .add(2)
  .add(1);
let List21 = new SingleLL().add(1).add(2);

// function addTwoLinkedList(list1Head, list2Head) {
//   let digits1 = [],
//     digits2 = [];

//   while (list1Head) {
//     //takes numbers out of LL 1
//     digits1.push(list1Head.value);
//     list1Head = list1Head.next;
//   }
//   while (list2Head) {
//     //takes numbers out of LL 2
//     digits2.push(list2Head.value);
//     list2Head = list2Head.next;
//   }

//   let lastIdx1 = digits1.length - 1;
//   let lastIdx2 = digits2.length - 1;
//   console.log("digits1: ", digits1);
//   console.log("digits2: ", digits2);

//   let total = "";
//   let carry = 0;
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     //only use this to run through longest array so no numbers are missed
//     let a = digits1[lastIdx1] || 0;
//     let b = digits2[lastIdx2] || 0;
//     let sum = a + b + carry; //undefined doesn't get added up b/c its all numbers
//     if (sum > 9) {
//       sum -= 10;
//       carry = 1;
//     } else {
//       carry = 0;
//     }

//     total = sum + total;
//     console.log("total: ", total);

//     //these are the manual incrementers
//     lastIdx1--; //move to next number
//     lastIdx2--; //move to next number
//   }

//   // if (carry) total = carry + total; //so we can parse later

//   console.log(
//     total.split("").map(function(value) {
//       return parseInt(value);
//     }) //turn string into numbers
//   );
// }
// addTwoLinkedList(List129.head, List21.head);

// function addTwoLinkedList(list1, list2) {
//   //copy the list into arrays so its more managable

//   //add up each column of numbers, we need the last digit
//   //sum + carry (> 10)
//   //then add this total to a string
//   //so we can split it after, into an array, we want to show the number as a string
//   let digits1 = [];
//   let digits2 = [];
//   while (list1) {
//     digits1.push(list1.value);
//     list1 = list1.next;
//   }
//   while (list2) {
//     digits2.push(list2.value);
//     list2 = list2.next;
//   }

//   let lastIdx1 = digits1.length - 1;
//   let lastIdx2 = digits2.length - 1;
//   let total = "";
//   let carry = 0;
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     let a = digits1[lastIdx1] || 0;
//     let b = digits2[lastIdx2] || 0;
//     let sum = a + b + carry;
//     console.log(sum);
//     if (sum > 9) {
//       sum -= 10;
//       carry++; //update this, so this goes to next number in array
//     } else {
//       carry = 0;
//     }

//     total = sum + total;
//     lastIdx1--;
//     lastIdx2--;
//   }

//   console.log(total.split("").map(num => parseInt(num)));
// }

//strategy to shift numbers up based on something
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "x") arr[count++] = arr[i]; //move numbers up; it will repeat
// }

// function moveZeros(arr) {
//   let count = 0;
//   //"count" does a number of things
//   //servers as a spot to shift up numbers
//   //counter til end of arr is the number of zeros that is in the array
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count++] = arr[i];
//     }
//   }

//   while (count < arr.length) {
//     arr[count++] = 0;
//   }
//   console.log(arr);
// }

// moveZeros([0, 0, 0, 0, 1, 2, 3, 4, 5]);

// function trappedRain(landscapes) {
//   const maxes = new Array(landscapes.length).fill(0);
//   let leftMax = 0;
//   for (let i = 0; i < landscapes.length; i++) {
//     const column = landscapes[i];
//     maxes[i] = leftMax;
//     leftMax = Math.max(leftMax, column);
//   }
//   let rightMax = 0;
//   for (let j = landscapes.length - 1; j >= 0; j--) {
//     const column = landscapes[j];
//     const minHeight = Math.min(rightMax, maxes[j]); //compares right and left
//     if (column < minHeight) {
//       maxes[j] = minHeight - column;
//     } else {
//       maxes[j] = 0; //no room to save water
//     }
//     rightMax = Math.max(rightMax, column);
//   }
//   console.log(maxes.reduce((a, b) => a + b, 0));
// }

// trappedRain([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

// function isAnagram(str1, str2) {
//   let correctLength = str1.length;
//   let uniques = new Set(str1.split(""));
//   if (uniques.length < correctLength) return false;
//   else {
//     for (let i = 0; i < str2.length; i++) {
//       let char = str2[i];
//       if (!uniques.has(char)) return false;
//     }
//   }
//   return true;
// }

// console.log(isAnagram("boger", "boger"));
// console.log(isAnagram("boosdfsr", "boger"));

// function maxProfit(prices) {
//   if (prices.length === 0) return 0;
//   let max = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1];
//   }
//   return max;
// }

// var maxProfit = function(prices) {
//   let res = 0;
//   for (let i = 1; i < prices.length; i++) {
//     res += prices[i] > prices[i - 1] ? prices[i] - prices[i - 1] : 0;
//   }
//   return res;
// };

// var maxProfit = function(prices) {
//   let maxTotal = 0;
//   let maxPrice = 0;
//   for (let i = 1; i < prices.length; i++) {
//     console.log(maxPrice, maxTotal);
//     let test = maxPrice + prices[i] - prices[i - 1];
//     console.log("test: ", test);
//     maxPrice = Math.max(0, (maxPrice += prices[i] - prices[i - 1]));
//     maxTotal = Math.max(maxPrice, maxTotal);
//   }
//   return maxTotal;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
// console.log(maxProfit([1, 2, 3, 4, 5])); //4
// console.log(maxProfit([7, 6, 4, 3, 1])); //0

// function maxSumKadanes(arr) {
//   let maxSoFar = arr[0];
//   let total = arr[0];
//   //max total sum of numbers, if the curr num is greater than adding the num, then keep curr, then update max so far
//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];
//     maxSoFar = Math.max(num, num + maxSoFar);
//     total = Math.max(maxSoFar, total);
//   }

//   console.log("total: ", total);
// }

// maxSumKadanes([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]); //19

// function shiftedArrSearch(arr) {
//   // 1) find pivot point
//   let pivotIdx = findPivot(arr, 0, arr.length - 1, num);
//   // 2) then use binary serch
// }

// function findPivot(arr, start, end, num) {
//   let mid = Math.floor((start + end) / 2);
//   while (start <= end) {
//     if (num > arr[mid]) {
//       start++;
//     } else if (num < arr[mid]) {
//       end--;
//     } else {
//       return mid;
//     }
//   }
// }

// function shiftedArrSearch(shiftArr, num) {
//   //1) use binary search to find pivotIdx
//   let pivotIdx = findPivotPoint(shiftArr);
//   if (pivotIdx == 0 || num < shiftArr[0]) {
//     //if num is smaller than last item, start from back
//     return binarySearch(shiftArr, pivotIdx, shiftArr.length - 1, num);
//   }
//   //2) use binary search to find numIdx
//   return binarySearch(shiftArr, 0, pivotIdx - 1, num);
// }

// function findPivotPoint(arr) {
//   let begin = 0;
//   let end = arr.length - 1;
//   while (begin <= end) {
//     let mid = begin + Math.floor((end - begin) / 2); //find midpoint
//     if (mid == 0 || arr[mid] < arr[mid - 1]) {
//       return mid;
//     }
//     //since we didnt find it, shrink the arr by 1 then reloop
//     if (arr[mid] > arr[0]) begin = mid + 1;
//     else end = mid - 1;
//   }

//   return 0; //turns out it wasn't shfited at all
// }

// function binarySearch(arr, begin, end, num) {
//   while (begin <= end) {
//     let mid = begin + Math.floor((end - begin) / 2);
//     if (arr[mid] < num) begin = mid + 1;
//     else if (arr[mid] == num) return mid;
//     else end = mid - 1;
//   }
//   return -1;
// }

function reverseInteger(int) {
  let rev = 0;
  while (int !== 0) {
    let pop = int % 10;
    //change to decimal then round up to get rid of one's place
    int = Math.floor(int / 10);
    //Multiply by 10 each time to move nums away from one's place
    rev = rev * 10 + pop;
  }
  console.log("rev: ", rev);
  // return rev;
}

// reverseInteger(123); //321
// reverseInteger(123456789); //321

function reverseNum(int) {
  //1234
  let reversed = 0;
  while (int !== 0) {
    //separate one's place
    let onesPlace = int % 10; //123 % 10 = 3
    //modify original number to remove one's place
    int = Math.floor(int / 10); //123 / 10 = 12.3 round down to 12
    //move curr total over by 1 then add onesPlace
    reversed = reversed * 10 + onesPlace; //4 * 10 = 40 + 3
  }
  console.log("reversed: ", reversed);
}

// reverseNum(1234);

//1234
// 4 => 1234 % 10
// 1234 / 10 => Math.floor(123.4) => 123
// 4 + nextOnesPlace
// 4321

// function reverseInts(num) {
//   //extract out onesPlace -> make a variable
//   //then remove onesPlace from original number
//   //have a total we add to, each time, we move it out of the onesPlace by x 10
//   let reversedNum = 0;
//   while (num !== 0) {
//     let onesPlace = num % 10;
//     num = Math.floor(num / 10);
//     reversedNum = reversedNum * 10 + onesPlace;
//   }
//   console.log("here", reversedNum);
// }

// reverseInts(1234);

//INTERSECTION OF TWO LINKED LISTS
function intersection(headA, headB) {
  var set = {};
  while (headA) {
    set[headA.val] = true;
    headA = headA.next;
  }
  while (headB) {
    if (set[headB.val]) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}

var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};

// 1 -> 2 -> 3 -> 4
//                   -> 5 -> 6
//           8 -> 9 //edge case is diff length

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> | 8 -> 9 -> 5 -> 6
// 8 -> 9 -> 5 -> 6 | -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

function intersectionLL(headA, headB) {
  let set = {};
  while (headA) {
    set[headA.value] = true;
    headA = headA.next;
  }

  while (headB) {
    if (set[headB.value]) return headB;
    headB = headB.next;
  }
  return null;
}

function intersectionLL2(headA, headB) {
  if (headA === null || headB === null) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a === null ? b : a.next;
    b = b === null ? a : b.next;
  }
  return a;
}

function memoCalc(arr, target) {
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(target - arr[i]);
    if (!memo[diff]) memo[arr[i]] = true;
    else return [diff, arr[i]];
  }
}

// console.log(memoCalc([1, 2, 3], 5));

function memot(arr, target) {
  let memoHashTable = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - target);
    if (memoHashTable[diff]) memoHashTable[arr[i]] = true;
    else return [diff, arr[i]];
  }
}

function intersectingLL(headA, headB) {
  if (headA === null || headB === null) return "not possible";
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a === null ? b : a.next;
    b = b === null ? b : b.next;
  }
  return a;
}

function root(x, n) {
  if (x === 0) return 0;
  if (n === 1) return x;
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let y = Math.pow(mid, n);
    let diff = Math.abs(x - y);
    if (diff < 0.001) {
      return mid;
    }
    if (y < x) left = mid + 0.001;
    else right = mid - 0.001;
  }
  return 0;
}

// console.log(root(9, 3));

// Question {name: 'Binary Search',learned: true,level: 'easy',source: 'AE',type: 'search' }
// Question {name: 'Find 3 Largest Num Sum',learned: true,level: 'easy',source: 'AE',type: 'search' }
// Question {name: 'Depth First Search',learned: true,level: 'easy',source: 'AE',type: 'graphs' }
// Question {name: 'Two Number Sum',learned: true,level: 'easy',source: 'AE',type: 'array' }
// Question {name: 'Find Closest Value in BST',learned: true,level: 'easy',source: 'AE',type: 'BST' }

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) left = mid + 1;
    else if (arr[mid] < target) right = mid - 1;
  }
  return -1;
}

function findThreeLargestNumSum(nums) {
  //not sorted, duplicates
  let largestThree = [null, null, null];
  nums.forEach(num => {
    compareThree(largestThree, num);
  });
  console.log(largestThree);
}

function compareThree(largestThree, num) {
  if (largestThree[2] === null || largestThree[2] < num) {
    shiftUpAndInsert(largestThree, num, 2);
  } else if (largestThree[1] === null || largestThree[1] < num) {
    shiftUpAndInsert(largestThree, num, 1);
  } else if (largestThree[0] === null || largestThree[0] < num) {
    shiftUpAndInsert(largestThree, num, 0);
  }
}

function shiftUpAndInsert(arr, insertVal, specificIdx) {
  for (let i = 0; i <= specificIdx; i++) {
    if (i === specificIdx) arr[i] = insertVal;
    else arr[i] = arr[i + 1];
  }
}

// findThreeLargestNumSum([9012, 1, 23, 102, 301, 302]); //[ 301, 302, 9012 ]

function inOrderDFS(tree, arr) {
  if (!tree) {
    inOrderDFS(tree.left, arr);
    arr.push(tree.value);
    inOrderDFS(tree.right, arr);
  }
  return arr;
}

function preOrderDFS(tree, arr) {
  if (!tree) {
    arr.push(tree.value);
    preOrderDFS(tree.left, arr);
    preOrderDFS(tree.right, arr);
  }
  return arr;
}
function postOrderDFS(tree, arr) {
  if (!tree) {
    postOrderDFS(tree.left, arr);
    postOrderDFS(tree.right, arr);
    arr.push(tree.value);
  }
  return arr;
}

function BFS(tree) {
  let values = [];
  let queue = [tree];
  while (queue.length > 0) {
    let currentNode = queue.shift();
    values.push(tree.value);
    if (currentNode !== null) {
      queue.push(tree.left);
      queue.push(tree.right);
    }
  }
  return values;
}

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

//assuming its sorted with no duplicates
function twoNumSum(arr, target) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(target - arr[i]);
    if (hashTable[diff]) return [diff, arr[i]];
    else hashTable[arr[i]] = true;
  }
  return [];
}

// console.log(twoNumSum([1, 2, 3, 4], 7));

function closestVal(tree, target) {
  let closest = tree.value;
  //then traverse all the nodes to find closest
  // depending on how far the target is, go left or right
  while (tree) {
    if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
      closest = tree.value;
    }

    if (tree.value > target) tree = tree.left;
    else if (tree.value < target) tree = tree.right;
    else break;
  }
  return closest;
}

// Question {name: 'valid parentheses',learned: true,level: '',source: 'bloomberg',type: '' }
// Question {name: 'move zeros',learned: true,level: '',source: 'bloomberg',type: 'array' }
// Question {name: 'add nums of 2 linked list',learned: true,level: '',source: 'bloomberg',type: 'LL' }
// Question {name: 'Find Closest Value in BST',learned: true,level: 'easy',source: 'AE',type: 'BST' }
// Question {name: 'Bubble Sort',learned: true,level: 'easy',source: 'AE',type: 'sorting' }

function validParens(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "}") {
      if (stack[stack.length - 1] !== "{") return false;
      else stack.pop();
    } else if (char === ")") {
      if (stack[stack.length - 1] !== "(") return false;
      else stack.pop();
    } else if (char === "]") {
      if (stack[stack.length - 1] !== "[") return false;
      else stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// console.log(validParens("({}()[])"));
// console.log(validParens("({}()"));

// function moveZeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[count] = arr[i];
//       count++;
//     }
//   }
//   while (count < arr.length) {
//     arr[count] = 0;
//     count++;
//   }
//   console.log(arr);
// }

// moveZeros([0, 0, 0, 0, 0, 1, 1, 2, 12, 3, 12, 31, 3, 1]);

function shiftUp(arr) {
  console.log("before", arr);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  console.log("after", arr);
}

// shiftUp([0, 1, 1, 2, 12, 3, 12, 31, 3, 1]);

function shiftUpSpecific(arr, insertVal, idx) {
  //will get rid of 0 idx element
  for (let i = 0; i <= idx; i++) {
    if (i === idx) arr[i] = insertVal;
    else arr[i] = arr[i + 1];
  }
  console.log(arr);
}

// shiftUpSpecific([0, 1, 1, 2, 12, 3, 12, 31, 3, 1], 199, 3);

function addTwoLinkedList(list1, list2) {
  let nums1 = [1, 2, 9];
  let nums2 = [2, 1];
  // while (list1) {
  //   nums1.push(list1.value);
  //   list1 = list1.next;
  // }
  // while (list2) {
  //   nums2.push(list2.value);
  //   list2 = list2.next;
  // }
  let lastIdx1 = nums1.length - 1;
  let lastIdx2 = nums2.length - 1;
  let strTotal = "";
  let carry = 0;
  for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
    //need to start a variable in loop for it to create something every time
    //need a variable outside if you need it to hold a value for awhile
    let a = nums1[lastIdx1] || 0;
    let b = nums2[lastIdx2] || 0;
    let sum = a + b + carry;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    strTotal = sum + strTotal; //will turn to a string
    lastIdx1--;
    lastIdx2--;
  }
  console.log(strTotal.split("").map(num => parseInt(num)));
}

// addTwoLinkedList();

function findClosestValInBST(tree, target) {
  //need to go through tree
  //compare val to target and record the closest
  //then traverse the tree to nums that would be closer
  let closest = tree.value;
  while (tree) {
    if (Math.abs(tree.value - target) < Math.abs(tree.value - closest)) {
      closest = tree.value;
    }
    if (tree.value > target) {
      tree = tree.left;
    } else if (tree.value < target) {
      tree = tree.right;
    } else {
      break;
    }
  }
  console.log(closest);
}

function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  console.log(arr);
}
// bubbleSort([1, 23, 123, 12, 31, 3, 21, 2, 5, 74, 7, 8, 4623]);

// practice data structures

class LLNode {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(val) {
    let formerHead = this.head;
    let newNode = new LLNode(val);
    this.head = newNode;
    if (formerHead) {
      formerHead.previous = this.head;
      this.head.next = formerHead;
    }
    if (!this.tail) this.tail = this.head;
  }
  removeHead() {
    let formerHead = this.head;
    if (!formerHead) return;
    if (formerHead.next) {
      this.head = formerHead.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return formerHead.value;
  }

  addToTail(val) {
    let formerTail = this.tail;
    let newTail = new LLNode(val);
    this.tail = newTail;
    if (formerTail) {
      formerTail.next = this.tail;
      this.tail.previous = formerTail;
    }
    if (!this.head) this.head = this.tail;
  }

  removeTail() {
    let formerTail = this.tail;
    if (!formerTail) return;
    if (formerTail.previous) {
      this.tail = formerTail.previous;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    return formerTail.value;
  }

  contains(val) {
    let currentNode = this;
    while (currentNode) {
      if (currentNode === val) return currentNode;
      else currentNode = currentNode.next;
    }
    return false;
  }
}

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  insert(val) {
    let direction = this.value > val ? "left" : "right";
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
    return this;
  }
  insertIterative(val) {
    let currNode = this;
    while (currNode) {
      if (val > currNode.value) {
        if (currNode.right) currNode = currNode.right;
        else {
          currNode.right = new BST(val);
          break;
        }
      } else {
        if (currNode.left) currNode = currNode.left;
        else {
          currNode.left = new BST(val);
          break;
        }
      }
    }
    return this;
  }
  BFS() {
    let values = [];
    let queue = [this];
    while (queue.length > 0) {
      console.log("queue: ", queue);

      let currNode = queue.shift();
      if (currNode) {
        values.push(currNode.value);
        queue.push(currNode.left);
        queue.push(currNode.right);
      }
    }
    return values;
  }

  min() {
    let currNode = this;
    let minimum = currNode.value;
    while (currNode) {
      if (currNode.value < minimum) minimum = currNode.value;
      currNode = currNode.left;
    }
    console.log(minimum);
    return minimum;
  }
}

let testBST = new BST(5)
  .insertIterative(6)
  .insertIterative(7)
  .insertIterative(8);
// .insert(6)
// .insert(7)
// .insert(8);

// console.log(testBST.min());

class Stack {
  constructor() {
    this.stack = [];
  }
  insert(val) {
    this.stack[this.stack.length] = val;
  }
  remove() {
    if (this.stack.length > 0) {
      let removedItem = this.stack[this.stack.length - 1];
      return removedItem;
    }
  }
}

//time: O(n) - 1 time to go through string, then O(n) to go again but doesn't compound
//space: O(n);
function firstUnique(str) {
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!hashMap[str[i]]) hashMap[str[i]] = 1;
    else hashMap[str[i]]++;
  }
  for (let j = 0; j < str.length; j++) {
    if (hashMap[str[j]] === 1) return j;
  }
  return false;
}

// console.log(firstUnique("booger")); //0 b
// console.log(firstUnique("leetcode")); //0 l
// console.log(firstUnique("loveleetcode")); //2 v

// **************** Homework for Sun Jul 08 2018 ****************
// Question {name: 'reverse integer',learned: true,source: 'bloomberg',type: '' }
// Question {name: 'intersection of two linked lists',learned: true,source: 'bloomberg',type: 'LL' }
// Question {name: 'move zeros',learned: true,source: 'bloomberg',type: 'array' }
// Question {name: 'first unique character in a string',learned: true,source: 'bloomberg',type: 'string' }
// Question {name: 'trap rain water',learned: true,source: 'bloomberg',type: '' }
// Question {name: 'reverseLinkedList',learned: true,source: 'bloomberg',type: 'LL' }

//1234 => 4321
//1234 % 10 => 123             4
//1234 / 10 => 123.4 Math.floor() //takes number off the end
//4 * 10 + 3 //adds number to the end
//time; O(n) -> 1 loop, going forward, taking a number off each time
//space: O(1) not {} [] LL Tree Graph

function reverseInt(int) {
  let reverseInt = 0;
  while (int) {
    let onesPlace = int % 10;
    int = Math.floor(int / 10);
    reverseInt = reverseInt * 10 + onesPlace;
  }
  return reverseInt;
}

//listen for key words
//use big examples
//draw a picture
//pseudo code the brute force
//time complexity || trade off space complexity
//optimize
//time complexity
//code
//test with small examples

//how to handle a linked list with duplicate values?
/*

1 -   2 -   3 -   4 - 5
                      - 6 - 7 - 8 - 9
10 - 11- 12 - 14 -  15

1 - 2 - 3 - 4 - 5                   10 - 11- 12 - 14
                  - 6 - 7 - 8 - 9
10 - 11- 12 - 14                    1 - 2 - 3 - 4 - 5

time: O(n + m)
space: O(n + m) -> no duplicates, so put nodes in a set

*/

function intersectLL(list1, list2) {
  if (!list1 || !list2) return null;
  let a = list1; //need extra pointers so we dont mutate original list
  let b = list2; //we need the start of each list for later
  while (a !== b) {
    a = a.next === null ? list2 : a.next; //add start of 2nd list to end of 1st list
    b = b.next === null ? list1 : b.next;
  }
  return list1;
}

function intersectLL2(list1, list2) {
  let set = new Set();
  while (list1) {
    if (!set.has(list1.value)) set.add(list1.value);
    list1 = list1.next;
  }
  while (list2) {
    if (set.has(list2.value)) return list2.value;
    list2 = list2.next;
  }
  return null;
}

/*
[0,0,0,0,1,2,3,0,4,5] => [1,2,3,4,5,0,0,0,0,0]
count = 0; ++ 1
[1]
count = 1; ++ 2
[1,2]
count = 2; ++ 3
[1,2,3]
count = 5; ++ 6
[1,2,3,4,5,      0]
count = 7; ++ 8
[1,2,3,4,5,      0,0,0]
count = 8; ++ 9
[1,2,3,4,5,      0,0,0,0,0]

*/

function moveZerosxyz(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  console.log(arr);
}

// moveZerosxyz([0, 0, 0, 0, 1, 2, 3, 0, 4, 5]);

//time: O(n) - 2 passes but doesn't compound each other
//space: O(n) - only store the entire string
function firstUniqueChar(str) {
  let set = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!set[char]) set[char] = 1;
    else set[char]++;
  }
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (set[char] === 1) return char;
  }
  return null;
}

// console.log(firstUniqueChar("aaaaabbbbcccd"));

function trapRainWater(landscapes) {
  let leftMaxes = [];
  let maxLeft = 0;
  for (let i = 0; i < landscapes.length; i++) {
    let column = landscapes[i];
    maxLeft = Math.max(maxLeft, column);
    leftMaxes[i] = maxLeft;
  }
  console.log("leftMaxes: ", leftMaxes);

  let rightMaxes = [];
  let maxRight = 0;
  for (let j = landscapes.length - 1; j >= 0; j--) {
    let column = landscapes[j];
    maxRight = Math.max(maxRight, column);
    rightMaxes[j] = maxRight;
  }
  console.log("rightMaxes: ", rightMaxes);

  let totalRain = 0;
  for (let k = 0; k < landscapes.length; k++) {
    let minHeight = Math.min(leftMaxes[k], rightMaxes[k]);
    let column = landscapes[k];
    if (column < minHeight) totalRain += minHeight - column;
  }
  console.log(totalRain);
}

// trapRainWater([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

function reverseLL(head) {
  let prevNode = null;
  while (head) {
    let tempNext = head.next;
    head.next = prevNode;
    prevNode = head;
    head = tempNext;
  }
  return prevNode;
}

function reverseLLRecursively(head) {
  if (head === null || head.next === null) return head;
  let tempHead = reverseLLRecursively(head.next);
  head.next.next = head;
  head.next = null;
  return tempHead;
}

//time: O(n) space: O(1)
function palinLL(head) {
  if (!head === null || !head.next === null) return true;

  let mid = findMid(head);
  let rightNode = revLL(mid.next);
  mid.next = null;
  let leftNodes = head;
  while (leftNode !== null && rightNode !== null) {
    if (leftNode.val !== rightNode.val) return false;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return true;
}

function findMid(head) {
  let slow = head;
  let fast = head.next;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
}

function revLL(head) {
  let prevNode = null;
  while (head) {
    let tempNext = head.next;
    head.next = tempNext;
    tempNext = prevNode;
    prevNode = head;
  }
  return prevNode;
}

// Question {name: 'merge sorted array',learned: true,level: '',source: 'bbg',type: 'arrays' }
// Question {name: 'plus one linked list',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'palindrome linked list',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'third maximum number',learned: true,level: '',source: 'bbg',type: 'arrays' }

function mergeSortedArrays(arr1, m, arr2, n) {
  //have one idx indicating the combined arr's last idx,
  //idx of each array
  //compare each of the last values in a loop then move to final idx

  let finalIdx = m + n - 1;
  let lastIdx1 = m - 1;
  let lastIdx2 = n - 1;
  while (finalIdx > -1) {
    if (arr1[lastIdx1] > arr2[lastIdx2] || !arr2[lastIdx2]) {
      arr1[finalIdx] = arr1[lastIdx1--];
    } else {
      arr1[finalIdx] = arr2[lastIdx2--];
    }
    finalIdx--;
  }
  console.log(arr1);
}

// mergeSortedArrays([1, 3, 5], 3, [2, 3, 6, 7], 4);

class LLNODE {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  add(val) {
    let formerHead = this.head;
    let newNode = new LLNODE(val);
    this.head = newNode;
    if (formerHead) this.head.next = formerHead;
    return this;
  }
  print() {
    let values = [];
    let currNode = this;
    while (currNode) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
  }
}

let testingLL = new SLL()
  .add(9)
  .add(2)
  .add(1);
testingLL.print();

function plusOneLinkedList(list) {
  // let values = [1, 9, 9]; //queue
  let values = []; //queue
  let copy = list;
  while (copy) {
    //need a copy to collect values
    //make a copy then the last value is null anyways so memory released
    values.push(copy.value);
    copy = copy.next;
  }

  let total = "";
  let carry = 0;
  for (let i = values.length - 1; i >= 0; i--) {
    if (i === values.length - 1) values[i] += 1;
    let sum = values[i] + carry;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    total = sum + total;
  }

  console.log((values = total.split("").map(num => parseInt(num))));
  copy = list; //need second copy to iterate through and add values
  while (values.length > 0) {
    copy.value = values.shift();
    copy = copy.next;
  }
  console.log(list); //original list now reflects new values
}

// plusOneLinkedList(testingLL.head);

function palindroLL(head) {
  //find the middle point, use 2 runners
  //then reverse the second half
  //split the link head by setting midpoint to null
  //go through each at the same pace
  if (head === null || head.next === null) return true;

  let mid = findMidPoint(head);
  let rightNode = reversedLinkList(mid.next);
  mid.next = null;
  let leftNode = head;
  while (leftNode && rightNode) {
    if (leftNode.value !== rightNode.value) return false;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return true;
}

function findMidPoint(head) {
  let fast = head.next;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reversedLinkList(head) {
  let prevNode = head;
  while (head) {
    let tempNext = head.next;
    head.next = prevNode;
    prevNode = head;
    head = tempNext;
  }
  return prevNode;
}

function thirdMaxNum(arr) {
  //use an array to hold our max values, gives us O(1) access time
  //then have conditions to check if the current value is bigger
  //if curr val is bigger, then shift the numbers up from the array
  let max = [null, null, null];
  for (let num of arr) {
    threeLargestHelper(max, num);
  }
  if (arr.length >= 3) return max[0];
  else return max[2];
}

// /*eslint-disable */
function threeLargestHelper(max, num) {
  if (max[2] === null || max[2] < num) {
    shiftUpAndInsertHere(max, num, 2);
  } else if (max[1] === null || max[1] < num) {
    if (num !== max[2]) shiftUpAndInsertHere(max, num, 1);
  } else if (max[0] === null || max[0] < num) {
    if (num !== max[1] || num !== max[0]) {
      shiftUpAndInsertHere(max, num, 0);
    }
  }
}

function shiftUpAndInsertHere(max, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) max[i] = num;
    else max[i] = max[i + 1];
  }
}

// class QueueFromDoubleStack {
//   constructor() {
//     this.enStack = [];
//     this.deStack = [];
//   }
//   enqueue(val) {
//     this.enStack.push(val);
//   }
//   dequeue() {
//     if (this.enStack.length === 0 || this.deStack.length === 0) {
//       throw new Error("queues are empty");
//     }
//     //add to deStack when its empty
//     if (this.deStack.length === 0) {
//       if (this.enStack.length > 0) {
//         this.deStack.push(this.enStack.pop());
//       }
//     }
//     return this.deStack.pop();
//   }
// }

// **************** Homework for Tue Jul 10 2018 ****************
// Question {name: 'memo calculation',learned: true,level: '',source: null,type: null }
// Question {name: 'delete linked list pointer',learned: true,level: '',source: null,type: null }
// Question {name: 'pancake sort (stack)',learned: true,level: '',source: null,type: null }
// Question {name: 'shift array up by 1',learned: true,level: '',source: null,type: null }
// Question {name: 'shift up nums + add val at specific idx',learned: true,level: '',source: null,type: null }

function memoCalc(arr, target) {
  let hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(target - arr[i]);
    if (hashmap[diff]) return [diff, arr[i]];
    else hashmap[arr[i]] = true;
  }
}

function deleteLLNode(node) {
  if (node === null || node.next === null) return;
  node.value = node.next.value;
  node.next = node.next.next;
}

function shiftOneUp(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
}

function shiftUpAndINsert(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) arr[i] = num;
    else arr[i] = arr[i + 1];
  }
}

// function islandCounter(matrix) {
//   let islands = 0;
//   let rows = matrix.length; //y //its 5 x 5 regardless, gets complicated if it isnt
//   let cols = matrix[0].length; //x
//   for (let y = 0; y < rows; y++) {
//     //goes up and down
//     for (let x = 0; x < cols; x++) {
//       console.log("y", y, "x", x, matrix[y][x] === 1);
//       //matrix[y] accts for irregular shape
//       //goes right and left
//       if (matrix[x][y] === 1) {
//         //need to flip it b/c its easier to understand
//         findAllLand(matrix, rows, cols, x, y);
//         console.log(matrix);
//         console.log();
//         islands++;
//       }
//     }
//   }
//   console.log(islands);
// }
// //basically find all the 1's then remove all the ones
// //that it is connected to so it wont be double counted

// function findAllLand(matrix, rows, cols, x, y) {
//   let queue = [[x, y]];
//   while (queue.length > 0) {
//     let item = queue.shift();
//     let originalX = item[0];
//     let originalY = item[1];
//     if (matrix[originalX][originalY] === 1) {
//       matrix[originalX][originalY] = 0;
//       addToQueueInBounds(queue, rows, cols, originalX - 1, originalY);
//       addToQueueInBounds(queue, rows, cols, originalX + 1, originalY);
//       addToQueueInBounds(queue, rows, cols, originalX, originalY - 1);
//       addToQueueInBounds(queue, rows, cols, originalX, originalY + 1);
//     }
//   }
// }

// function addToQueueInBounds(queue, rows, cols, x, y) {
//   if (x >= 0 && x < rows && y >= 0 && y < cols) {
//     queue.push([x, y]);
//   }
// }

// console.log(
// islandCounter([
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 1, 1],
//   [1, 0, 0, 1, 0],
//   [0, 1, 1, 0, 0],
//   [1, 0, 1, 0, 1]
// ]);
// );

// function countIslands(matrix) {
//   let counter = 0;
//   let rows = matrix.length;
//   let cols = matrix[0].length;
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (matrix[i][j] === 1) {
//         markLand(matrix, rows, cols, i, j);
//         //look for all of the same island
//         counter++;
//         //count as only 1 island
//       }
//     }
//   }
//   console.log(counter);
// }

// function markLand(matrix, rows, cols, originalX, originalY) {
//   let queue = [[originalX, originalY]];
//   while (queue.length > 0) {
//     let land = queue.shift();
//     let x = land[0];
//     let y = land[1];
//     if (matrix[x][y] === 1) {
//       matrix[x][y] = 0;
//       addLandInBound(queue, rows, cols, x - 1, y); //left
//       addLandInBound(queue, rows, cols, x + 1, y); //right
//       addLandInBound(queue, rows, cols, x, y - 1); //bottom
//       addLandInBound(queue, rows, cols, x, y + 1); //top
//     }
//   }
// }

// function addLandInBound(queue, rows, cols, x, y) {
//   if (x >= 0 && x < cols && y < rows && y >= 0) queue.push([x, y]);
// }

// countIslands([
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 1, 1],
//   [1, 0, 0, 1, 0],
//   [0, 1, 1, 0, 0],
//   [1, 0, 1, 0, 1]
// ]);

function flattenDictionary(dict) {
  let hashtable = {};
  return flattenHelper(dict, hashtable, []);
}

function flattenHelper(obj, hashtable, keyNames) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      if (key !== "") keyName.push(key);
      flattenHelper(obj[key], hashtable, keyName);
    } else {
      let currentKey = "";
      if (keyName.length === 0) currentKey = key;
      else {
        currentKey = keyName.join(".");
        if (key !== "") currentKey += "." + key;
      }
      hashtable[currentKey] = obj[key];
    }
  }
}
