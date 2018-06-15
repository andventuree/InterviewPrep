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

function bubbleSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      //going forward, check if each pair is in order
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr);
        //if a pair is not in order, update the tracker to say not sorted
        isSorted = false;
      }
    }
  }
  return arr;
}

//time: O(n^2) need to go through at least once then multiple passes to sort
//space: O(1) not storing anyting, using same array
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) swap(j - 1, j, arr);
    }
  }
  return arr;
}

//time: O(n^2) need to go through array at least once then multiple passes to sort
//space: O(1) not storing anything
//selection sort seems just like insertion sort in the other direction
function selectionSort(arr) {
  // let start = Date.now() / 1000;
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIdx] > arr[j]) {
        smallestIdx = j;
      }
    }
    swap(i, smallestIdx, arr);
    //having this here and not inside that if, doesn't save time
    //its more about how you go about sorting it,
    //Curious? call this function with over 400 arguments to see time duration
  }
  // let end = Date.now() / 1000;
  // console.log("duration", end - start);
  return arr;
}

function swap(i, j, arr) {
  let larger = arr[i];
  let smaller = arr[j];
  arr[i] = smaller;
  arr[j] = larger;
}

// console.log("bubbleSort", bubbleSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]
// console.log("insertionSort", insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]
// console.log("selectionSort", selectionSort([9, 8, 2, 4, 1, 4, 5, 2, 1])); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

// function compressedStr(str) {
//   if (!str) return str;

//   let cStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]; //hold onto the start of a char
//     let startOfLetter = i; //holds onto index of the start of a char
//     while (i + 1 < str.length - 1 && char === str[i + 1]) {
//       i++;
//     }
//     cStr += i - startOfLetter + 1 + char; //number type + string will type coerce to a string
//     //b/c while loop incremements up i, you want to take away the start of the i,
//   }
//   return cStr.length < str.length ? cStr : str;
// }
