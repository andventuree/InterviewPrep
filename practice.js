let { homeworkTonight, tricks } = require("./HwHelper");

// homeworkTonight.genQuestions(5);
// tricks.genQuestions(5);
// homeworkTonight.genQuestions(6, "all", "bbg");

const threeNumberSum = (arr, targetSum) => {
  let combinations = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let calculation = arr[i] + arr[left] + arr[right];
      if (calculation > targetSum) {
        right -= 1;
      } else if (calculation < targetSum) {
        left += 1;
      } else {
        combinations.push([arr[i], arr[left], arr[right]]);
        left += 1;
      }
    }
  }
  return combinations;
};

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

const stringCompression = str => {
  let compressed = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let start = i;
    while (char === str[i + 1]) {
      i++;
    }
    compressed += i - start + 1 + char;
  }
  return compressed.length < str.length ? compressed : str;
};

// console.log(stringCompression("aaabbbccdddd"));

//time: O(n or m) whichever is longer, it doesn't compound, max is the longest number
//space: O(n) - depends how long the number is, we needed an iteration for each
const addTwoNumsInLL = (list1, list2) => {
  let digits1 = [];
  while (list1) {
    digits1.push(list1.value);
    list1 = list1.next;
  }
  let digits2 = [];
  while (list2) {
    digits2.push(list2.value);
    list2 = list2.next;
  }
  let lastDigit1 = digits1.length;
  let lastDigit2 = digits2.length;
  let carry = 0;
  let total = "";
  for (let i = Math.max(lastDigit1, lastDigit2); i >= 0; i--) {
    let a = digits1[lastDigit1--] || 0;
    let b = digits2[lastDigit2--] || 0;
    let sum = a + b + carry;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    total = sum + total;
  }
  return total;
};

class Queue {
  constructor() {
    this.line = [];
    this.frontPointer = 0;
    this.backPointer = 0;
  }

  add(val) {
    this.line[this.backPointer] = val;
    this.backPointer++;
    return this; //need to return otherwise you can't chain
  }

  remove() {
    this.frontPointer++;
    return this;
  }

  print() {
    console.log("full queue: ", this.line);
    console.log(
      "current queue",
      this.line.slice(this.frontPointer, this.backPointer)
    );
  }
}

let testQueue = new Queue()
  .add(1)
  .add(2)
  .remove()
  .add(3)
  .add(4)
  .add(5)
  .remove();

// testQueue.print(); //[3,4,5]

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(val) {
    let formerHead = this.head;
    let newNode = new Node(val);
    this.head = newNode;
    if (formerHead) {
      this.head.next = formerHead;
      formerHead.prev = this.head;
    }
    if (!this.tail) this.tail = this.head;
  }
  removeHead() {
    let formerHead = this.head;
    if (!formerHead) return;
    if (this.head.next) {
      this.head = formerHead.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return formerHead.value;
  }
  addToTail(val) {
    let formerTail = this.tail;
    let newNode = new Node(val);
    this.tail = newNode;
    if (formerTail) {
      this.tail.prev = formerTail;
      formerTail.next = this.tail;
    }
    if (!this.head) this.head = this.tail;
  }
  removeTail() {
    let formerTail = this.tail;
    if (!formerTail) return;
    if (this.tail.prev) {
      this.tail = formerTail.prev;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    return formerTail.value;
  }
}

function BFS(node) {
  const queue = [node];
  while (queue.length) {
    const current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

function validParentheses(brackets) {
  let stack = [];
  for (let i = 0; i < brackets.length; i++) {
    let bracket = brackets[i];
    if (bracket === "}") {
      if (stack.pop() !== "{") return false;
    } else if (bracket === "]") {
      if (stack.pop() !== "[") return false;
    } else if (bracket === ")") {
      if (stack.pop() !== "(") return false;
    } else {
      stack.push(bracket);
    }
  }
  return stack.length === 0;
}

const mergeSort = function(array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
    left = splits[0],
    right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
};

const split = function(array) {
  const center = array.length / 2,
    left = array.slice(0, center),
    right = array.slice(center);
  return [left, right];
};

const merge = function(left, right) {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
};

//Quick sort

function quickSort(arr) {
  helper(arr, 0, arr.length - 1);
  console.log("arr: ", arr);
  return arr;
}

function helper(arr, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(leftIdx, rightIdx, arr);
    }
    if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++;
    if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, arr);
  const leftSubArrIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubArrIsSmaller) {
    helper(arr, startIdx, rightIdx - 1);
    helper(arr, rightIdx + 1, endIdx);
  } else {
    helper(arr, rightIdx + 1, endIdx);
    helper(arr, startIdx, rightIdx - 1);
  }
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// quickSort([12, 31, 23, 12, 31, 231, 2012, 30, 453254, 2]);

function sumTwoNums(arr, desiredSum) {
  for (let left = 0; left < arr.length; left++) {
    let currentSum;
    for (let right = arr.length - 1; right > left; right--) {
      currentSum = arr[left] + arr[right];
      console.log(`testing pair:`, arr[left], arr[right]);
      if (currentSum === desiredSum) {
        //return array sorted
        console.log("found pair!", currentSum);
        return [arr[left], arr[right]].sort((a, b) => {
          return a - b;
        });
      }
    }
  }
  return []; //pairs dont work, return empty arr
}
// sumTwoNums([1, 2, 3, 4, 5], 8); //[3,5]

const BSTsearch = (tree, target) => {
  let node = tree;
  while (node) {
    if (node.value === target) return true;
    else if (node.value > target) node = node.left;
    else if (node.velue < target) node = node.right;
  }
  return false;
};

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

//instead of turning a number into a string, divide it out

//make array to store numbers
//have a while loop that keeps checking to see if the number is below 10; then its already the last number

// keep dividing out and putting into the array

function spaceOutNumber(int) {
  let integers = [];
  while (int > 0) {
    let onesPlace = int % 10;
    integers.push(onesPlace);
    int = Math.floor(int / 10);
    console.log(integers);
  }
  return integers;
}

// spaceOutNumber(121);
// spaceOutNumber(123);

function palindromeNumber(int) {
  let integers = [];
  while (int > 0) {
    let onesPlace = int % 10;
    integers.push(onesPlace);
    int = Math.floor(int / 10);
    console.log(integers);
  }
  // return integers;
  let left = 0;
  let right = integers.length - 1;
  while (left <= right) {
    console.log(integers[left], integers[right]);
    if (integers[left] !== integers[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}

// palindromeNumber(121);
// palindromeNumber(123);
// palindromeNumber(123421);

// const stringCompress = str => {
//   let cString = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let start = i;
//     while (i < str.length && str[i] === str[i + 1]) {
//       i++;
//     }
//     cString += i - start + 1 + char;
//   }
//   return cString;
// };

// // stringCompress("aaaabbbbcccccccccc");
// console.log(stringCompress("aaaabbbbcccccccccc"));

const reverse = int => {
  let rev = 0;
  while (int) {
    let onesPlace = int % 10;
    int = Math.floor(int / 10);
    rev = rev * 10 + onesPlace;
  }
  return rev;
};

// console.log(reverse(123));

// **************** Homework for Mon Oct 01 2018 ****************
// Question {name: 'Insert Sort',learned: true,level: 'easy',source: 'AE',type: 'sorting' }
// Question {name: 'shiftedArray',learned: true,level: 'medium',source: 'pramp',type: 'array' }
// Question {name: 'reverseLinkedList',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'validate BST',learned: true,level: '',source: 'bbg',type: 'BST' }
// Question {name: 'Kadanes Algo - Max Sum',learned: true,level: 'medium',source: 'AE',type: null }

function insertSort(arr) {
  let currentIdx = 0;
  for (let i = currentIdx + 1; i < arr.length; i++) {
    let j = i;
    while (j > -1 && arr[j] < arr[j - 1]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

// console.log(insertSort([3, 2, 1]));

// function shiftArr(arr) {
//   let count = 0;
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
// shiftArr([0, 0, 0, 0, 0, 1, 2, 3]);
