// Shifted Array Search
// A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

// Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

// Explain your solution and analyze its time and space complexities.

// Example:

// input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
//                                                  # outcome of shifting
//                                                  # [2, 4, 5, 9, 12, 17]
//                                                  # three times to the left

// output: 3 # since it’s the index of 2 in arr
// Constraints:

// [time limit] 5000ms
// [input] array.integer arr
// [input] integer num
// [output] integer

// time: O(log((N))
// space: O(1)

function shiftedArrSearch(shiftArr, num) {
  //1) use binary search to find pivotIdx
  let pivotIdx = findPivotPoint(shiftArr);
  if (pivotIdx == 0 || num < shiftArr[0]) {
    //if num is smaller than last item, start from back
    return binarySearch(shiftArr, pivotIdx, shiftArr.length - 1, num);
  }
  //2) use binary search to find numIdx
  return binarySearch(shiftArr, 0, pivotIdx - 1, num);
}

function findPivotPoint(arr) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2); //find midpoint
    if (mid == 0 || arr[mid] < arr[mid - 1]) {
      return mid;
    }
    //since we didnt find it, shrink the arr by 1 then reloop
    if (arr[mid] > arr[0]) begin = mid + 1;
    else end = mid - 1;
  }

  return 0; //turns out it wasn't shfited at all
}

function binarySearch(arr, begin, end, num) {
  while (begin <= end) {
    let mid = begin + Math.floor((end - begin) / 2);
    if (arr[mid] < num) begin = mid + 1;
    else if (arr[mid] == num) return mid;
    else end = mid - 1;
  }
  return -1;
}

// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 17)); //2

/* *************************************************************** */
// //anything sorted can use binary search, even nums!
// //pramp provided solution
// //time: O(log n) | space: O(1)
// function root(x, n) {
//   if (x == 0) return 0; //edge case

//   let lowerBound = 0;
//   let upperBound = Math.max(1, x);
//   let approxRoot = (upperBound + lowerBound) / 2;

//   while (approxRoot - lowerBound >= 0.001) {
//     if (Math.pow(approxRoot, n) > x) {
//       upperBound = approxRoot;
//     } else if (Math.pow(approxRoot, n) < x) {
//       lowerBound = approxRoot;
//     } else {
//       break;
//     }
//     approxRoot = (upperBound + lowerBound) / 2;
//   }
//   return approxRoot;
// }

function truncFloat(x, points) {
  let power = Math.pow(10, points);
  return parseInt("" + x * power) / power;
}

// function root(x, n) {
//   if (x === 0) return 0; //edge case
//   if (n === 1) return x; //edge case
//   let begin = 0;
//   let end = x;
//   while (begin <= end) {
//     //binary search
//     let mid = (begin + end) / 2;
//     let y = Math.pow(mid, n); //assume Math.pow = O(1);
//     let diff = Math.abs(x - y); //difference from target
//     console.log("diff: ", diff);

//     if (diff < 0.001) return truncFloat(mid, 3);

//     if (y < x) begin = mid + 0.001;
//     else end = mid - 0.001;
//   }

//   return truncFloat(begin, 3);
// }

// console.log(root(9, 2));

function root(x, n) {
  //goal is to find a number that we'll use n times to equal x with <0.0001 accuracy
  let begin = 0;
  let end = x;
  while (begin <= end) {
    let mid = Math.floor((begin + end) / 2);
    let y = Math.pow(mid, n);
    let diff = Math.abs(x - y);
    console.log("diff: ", diff);

    if (diff < 0.001) return mid;
    else if (x > y) begin = mid + 0.001;
    else if (x < y) end = mid - 0.001;
  }
}

var search = function(nums, target) {
  let pivotPoint = pivot(nums);
  console.log("pivotPoint: ", pivotPoint);
  if (target < nums[0]) {
    return bSearch(nums, pivotPoint, nums.length - 1, target);
  }
  return bSearch(nums, 0, pivotPoint - 1, target);
};

function pivot(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid - 1]) return mid;

    if (nums[mid] > nums[0]) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

function bSearch(nums, left, right, target) {
  while (left <= right) {
    let mid = left + Math.floor((left - right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) left = mid + 1;
    else right = mid + 1;
  }
  return -1;
}

// search([4, 5, 6, 7, 0, 1, 2], 0);

//https://leetcode.com/explore/learn/card/binary-search/136/template-analysis/935/
// Template 1: basic
// Initial Condition: left = 0, right = length-1
// Termination: left > right
// Searching Left: right = mid-1 <- exclude current node is next search
// Searching Right: left = mid+1 <- exclude current node is next search

// Template 2: advanced - check right
// Initial Condition: left = 0, right = length
// Termination: left == right
// Searching Left: right = mid
// Searching Right: left = mid+1 <- exclude current node is next search

// Template 3: check left + right;
// Initial Condition: left = 0, right = length-1
// Termination: left + 1 == right
// Searching Left: right = mid
// Searching Right: left = mid

// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]

// output: 6 # since this is the number of islands in binaryMatrix.
//           # See all 6 islands color-coded below.

// Time Complexity: let N and M be the numbers of columns and rows in binaryMatrix, respectively. Each cell in binaryMatrix is visited a constant number of times. Once during the iteration and up to 4 times during an island expansion. Therefore, the time complexity is linear in the size of the input, i.e. O(N⋅M).

// Space Complexity: since we are allocating a queue in the algorithm, the space complexity is linear O(N⋅M). For instance, consider a matrix that is all 1s.

function getNumberOfIslands(binaryMatrix) {
  let islands = 0;
  let rows = binaryMatrix.length; // number of rows
  let cols = binaryMatrix[0].length; // number of columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (binaryMatrix[i][j] === 1) {
        markIsland(binaryMatrix, rows, cols, i, j);
        islands++;
      }
    } // O(n)
  } // O(n)
  console.log(islands);
}

function markIsland(binaryMatrix, rows, cols, i, j) {
  let queue = [];
  queue.push([i, j]);
  while (queue.length > 0) {
    let item = queue.pop();
    console.log(item);
    let originalX = item[0];
    let originalY = item[1];
    if (binaryMatrix[originalX][originalY] === 1) {
      binaryMatrix[originalX][originalY] = -1; //to mark as visited
      pushIfValid(queue, rows, cols, originalX - 1, originalY); //left
      pushIfValid(queue, rows, cols, originalX, originalY - 1); //bottom
      pushIfValid(queue, rows, cols, originalX + 1, originalY); //right
      pushIfValid(queue, rows, cols, originalX, originalY + 1); //top
    }
  }
}

function pushIfValid(queue, rows, cols, x, y) {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    queue.push([x, y]);
  }
}

// getNumberOfIslands([
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 1, 1],
//   [1, 0, 0, 1, 0],
//   [0, 1, 1, 0, 0],
//   [1, 0, 1, 0, 1]
// ]); //6

//i = y | j = x
//    0 | [0, 1, 2, 3, 4]
//    1 | [0, 1, 2, 3, 4]
//    2 | [0, 1, 2, 3, 4]
//    3 | [0, 1, 2, 3, 4]
//    4 | [0, 1, 2, 3, 4]

function allIslands(matrix) {
  //part 1 - set up pointers so you can traverse graph
  let islands = 0;
  let rows = matrix.length; //set up way to traverse matrix
  let cols = matrix[0].length; //^same
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        markIsland2(matrix, rows, cols, i, j);
        islands++; //at the minimum, must account for this island as 1
      } else {
        matrix[i][j] = "";
      }
    }
  }
  console.log();
  console.log(matrix, islands);
}

function markIsland2(matrix, rowSize, colsSize, i, j) {
  let queue = []; //use DS to organize traversal  - likely BFS due to queue
  queue.push([i, j]);
  let counter = 0;
  while (queue.length > 0) {
    let item = queue.pop();
    let originalX = item[0]; //i
    let originalY = item[1]; //j
    if (matrix[originalX][originalY] === 1) {
      matrix[originalX][originalY] = -4; //mark as visited
      console.log(`matrix ${counter++}: `, item);
      console.log(matrix);
      addIfValid(queue, rowSize, colsSize, originalX - 1, originalY); //left
      addIfValid(queue, rowSize, colsSize, originalX, originalY - 1); //bottom
      addIfValid(queue, rowSize, colsSize, originalX + 1, originalY); //right
      addIfValid(queue, rowSize, colsSize, originalX, originalY + 1); //top
    }
  }
}

function addIfValid(queue, rows, cols, x, y) {
  if (x >= 0 && x < rows && y >= 0 && y < cols) {
    queue.push([x, y]); //push only if its in range of matrix
  }
}

// allIslands([
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 1, 1],
//   [1, 0, 0, 1, 0],
//   [0, 1, 1, 0, 0],
//   [1, 0, 1, 0, 1]
// ]); //6

// Pancake Sort
// Given an array of integers arr:

// Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
// Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

function pancakeSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = i - 1;
    while (j <= arr.length - 1 && arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}

// Merging 2 Packages
// Given a package with a weight limit `limit` and an array `arr` of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit `limit`. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// input:  arr = [4, 6, 10, 15, 16],  lim = 21
// output: [3, 1] # since these are the indices of the
//                # weights 6 and 15 whose sum equals to 21

function getIndicesOfItemWeights(arr, limit) {
  let pair = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let diff = Math.abs(limit - num);
    //we want the indices
    if (map[diff] !== undefined) pair = [i, map[diff]];
    else map[num] = i;
  }
  console.log(pair);
  return pair;
}

// getIndicesOfItemWeights([4, 6, 10, 15, 16], 21); //[3, 1]
// getIndicesOfItemWeights([4, 6, 10, 15, 16], 20); //[4, 0]
// getIndicesOfItemWeights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7); //[6, 2]

// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index.

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i

function indexEqualsValueSearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === mid) return mid;

    if (arr[mid] < mid) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Flatten a Dictionary
// A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

// Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

// If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

// If a certain key is empty, it should be excluded from the output (see e in the example below).

function flattenDictionary(dict) {
  let hashtable = {};
  return flattenHelper(dict, hashtable, []);
}

function flattenHelper(obj, hashtable, keyName) {
  for (let key in obj) {
    //key2
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
  // return hashtable;
  console.log("hashtable: ", hashtable);
}

console.log(
  flattenDictionary({
    Key1: "1",
    Key2: {
      a: "2",
      b: "3",
      c: {
        d: "3",
        e: {
          "": "1"
        }
      }
    }
  })
);

// output: {
//   "Key1" : "1",
//   "Key2.a" : "2",
//   "Key2.b" : "3",
//   "Key2.c.d" : "3",
//   "Key2.c.e" : "1"
// }

flattenDictionary({
  Key1: "1",
  Key2: { a: "2", b: "3", c: { d: "3", e: "1" } }
}); //{"Key1":"1","Key2.a":"2","Key2.b":"3","Key2.c.d":"3","Key2.c.e":"1"}
flattenDictionary({ Key: { a: "2", b: "3" } }); //{"Key.a":"2","Key.b":"3"}
flattenDictionary({
  Key1: "1",
  Key2: { a: "2", b: "3", c: { d: "3", e: { f: "4" } } }
}); //{"Key1":"1","Key2.a":"2","Key2.b":"3","Key2.c.d":"3","Key2.c.e.f":"4"}
flattenDictionary({
  Key1: "1",
  Key2: { a: "2", b: "3", c: { d: "3", e: { f: "4" } } }
}); //{"Key1":"1","Key2.a":"2","Key2.b":"3","Key2.c.d":"3","Key2.c.e.f":"4"}

//edge cases:
flattenDictionary({ "": { a: "1" }, b: "3" }); //{"a":"1","b":"3"}
flattenDictionary({ a: "1" }); //{"a":"1"}

/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/

// Constructor to create a new Node
function Node(key) {
  this.key = key; //value
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

/*****************************************************************/
BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  //9
  if (inputNode.right !== null) {
    return findMinKeyWithinTree(inputNode.right);
  }

  let ancestor = inputNode.parent;
  let child = inputNode;

  while (ancestor !== null && child === ancestor.right) {
    child = ancestor;
    ancestor = child.parent;
  }
  return ancestor;
};

function findMinKeyWithinTree(inputNode) {
  while (inputNode.left !== null) {
    inputNode = inputNode.left;
  }
  return inputNode;
}
/*****************************************************************/

/*****************************************************************/
//                   \/   Only for testing  \/ /*****************************************************************/
// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
    this.root = new Node(key);
    return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert it
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
  var currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(9);
var test = bst.getNodeByKey(14);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (succ) {
  console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
  console.log("Inorder successor does not exist");
}

// Time Planner
// Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return null.

// Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

// Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

// In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

// Implement an efficient solution and analyze its time and space complexities.

// Examples:

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 8
// output: [60, 68]

// input:  slotsA = [[10, 50], [60, 120], [140, 210]]
//         slotsB = [[0, 15], [60, 70]]
//         dur = 12
// output: null # since there is no common slot whose duration is 12

//time: O(m + n)
//space: O(1)
function meetingPlanner(slotsA, slotsB, dur) {
  let aPointer = 0;
  let bPointer = 0;
  console.log(slotsA, slotsB);

  while (aPointer < slotsA.length && bPointer < slotsB.length) {
    let start = Math.max(slotsA[aPointer][0], slotsB[bPointer][0]);
    let end = Math.min(slotsA[aPointer][1], slotsB[bPointer][1]);

    if (start + dur <= end) return [start, start + dur];

    if (slotsA[aPointer][1] < slotsB[bPointer][1]) {
      aPointer++;
    } else {
      bPointer++;
    }
  }

  return [];
}
