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
