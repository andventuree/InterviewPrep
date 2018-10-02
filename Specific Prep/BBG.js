//facts from bloomberg
let charityContributions2017 = 702000000; //702 mil
let totalContribution = 6000000000; //6 bil
let profitableYear = 1985;
let currentYear = 2018;
let employee = 19000;
let subscribers = 325000; //professional subscribers
let CostOfTerminal = 24000;
//https://qz.com/84961/this-is-how-much-a-bloomberg-terminal-costs/
//Bloomberg’s revenue was $7.9 billion 2012
// console.log(subscribers * CostOfTerminal * 0.65); //pay taxes
// console.log((subscribers * CostOfTerminal) / employee);

// 7, 800, 000, 000;

//ADD NUMBERS OF 2 LINKED LISTS
let addTwoNumbers = function(l1, l2) {
  //initialize 2 empty arrays
  let digits1 = [];
  let digits2 = [];
  let list1Node = l1; //copy the head of the fake list
  while (list1Node) {
    digits1.push(list1Node.val); //push each value into array
    list1Node = list1Node.next; //move to the next node
  }

  let list2Node = l2;
  while (list2Node) {
    //push each value into array
    digits2.push(list2Node.val);
    list2Node = list2Node.next;
  }

  var lastDigit1 = digits1.length - 1;
  var lastDigit2 = digits2.length - 1;

  var total = "";
  var carry = 0;
  //loop backwards on the math.max of either of 2 arrays
  for (var i = Math.max(lastDigit1, lastDigit2); i >= 0; i--) {
    a = digits1[lastDigit1] || 0;
    b = digits2[lastDigit2] || 0;
    var sum = a + b + carry;

    if (sum > 9) {
      //perform a carry operation to carry one over if sum is more than 9
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    total = sum + total;

    lastDigit1--;
    lastDigit2--;
  }

  return total.split("").map(function(value) {
    return parseInt(value);
  });
};

//REVERSE LINKED LIST
// function reversedLinkList(head) {
//   let prev = null;
//   while (head) {
//     let nextHead = head.next;
//     head.next = prev;
//     prev = head;
//     head = nextHead;
//   }
//   return prev;
// }

function reverseLLRecur(head) {
  if (head.next === null || head === null) return head;
  let formerHead = reverseLLRecur(head.next); //adds to callstack
  head.next.next = head;
  //this doesn't apply until the entire callstack is built

  head.next = null;
  //at each step, .next is set to null,
  //but the root node resurfaces, this is replace with the line above,
  //so "null" only sticks around for the last node

  return formerHead; //once the callstack is completely built, this will only return 1 time
}

function reverseLinkedListHead(head) {
  let start = head;
  let nextItem = start.next;
  while (nextItem !== null) {
    let tempNext = nextItem.next;
    nextItem.next = start;
    start = nextItem;
    nextitem = tempNext;
  }
  head.next = null;
  return start;
}

//REVERSE INTEGER
function reverseInteger(int) {
  let rev = 0;
  while (int !== 0) {
    let pop = int % 10;
    int = Math.floor(int / 10);
    rev = rev * 10 + pop;
  }
  return rev;
}

//MOST TRADED
class MostTraded {
  constructor() {
    this.tradeLogs = {};
  }
  //time: O(n) | space: O(n)
  addToTrade(ticker, volumn) {
    if (this.tradeLogs[ticker]) this.tradeLogs[ticker] += volumn;
    else this.tradeLogs[ticker] = volumn;
    return this;
  }

  //time: O(n^2) -> improved by native sort O(n log n)
  //space: O(n)
  printMostTraded(n) {
    //how to output all values of array
    let sorted = [];
    for (let key in this.tradeLogs) {
      sorted.push([key, this.tradeLogs[key]]);
    }

    //O(n log n) - quick sort if >10 elements
    sorted.sort((a, b) => b[1] - a[1]);

    //simply return how many they wanted
    return sorted.slice(0, n);
  }
}

//FIRST UNIQUE CHARACTER IN A STRING
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

//LINKED LIST CYCLE (which is not the same as loop - loop has extra step)
//1 2 3 4 5 6 7  <-> 5  6 7
function linkedListCycle(list) {
  if (!list) return list;
  let fast = list;
  let slow = list;
  while (slow.next && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }
  return fast;
}

//VALID PARENTHESES
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

//TRAP RAIN WATER
//a)find the left highest value
//b)find right highest value
//c)take the min so you can find what water is trapped
//d)then go thorugh landscape and see if it has room above it to add

//time: O(n) no compouned operations | space: O(n) - just need 1 new arr
function trappingRainWater(landscapes) {
  const maxes = new Array(landscapes.length).fill(0);
  let leftMax = 0;
  //part a)
  for (let i = 0; i < landscapes.length; i++) {
    const column = landscapes[i];
    maxes[i] = leftMax;
    leftMax = Math.max(leftMax, column);
  }

  let rightMax = 0;
  for (let j = landscapes.length - 1; j >= 0; j--) {
    const column = landscapes[j];
    //b)find right highest value
    //dont have to store minHeight in its own array to save space!
    const minHeight = Math.min(rightMax, maxes[j]); //maxes filled with left height;

    //c)take the min so you can find what water is trapped
    if (column < minHeight) {
      maxes[j] = minHeight - column;
    } else {
      maxes[j] = 0;
    }
    rightMax = Math.max(rightMax, column);
  }
  //d)then go thorugh landscape and see if it has room above it to add
  return maxes.reduce((a, b) => a + b, 0);
}

trappingRainWater([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

//STRING COMPRESSION
//time: O(n^2) | space: O(n)
function stringCompression(str) {
  let compressed = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let startOfLetter = i;
    while (char === str[i + 1]) {
      i++;
    }
    compressed += i - startOfLetter + 1 + char;
  }
  console.log(compressed);
  return compressed.length < str.length ? compressed : str;
}

// stringCompression("aaabbbccc");

//MOVE ZEROES
//time: O(n) | space: O(1);
function moveZerosToEnd(arr) {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is
  // non-zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i]; //this shifts up each elem
    }
  }

  // Now all non-zero elements have been shifted to
  // front and 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < arr.length) {
    arr[count++] = 0; //count only increments up, leaving space for 0's, then add to end
  }
  return arr;
}
// moveZerosToEnd([0, 0, 0, 0, 0, 412, 5, 112, 51, 51, 51, 51]);
// moveZerosToEnd([0, 0,0, 12, 0, 12, 41, 0, 5, 112, 51, 1]);
// moveZerosToEnd([0, 0, 112, 51, 4, 3, 2, 1]);

function moveZeroToFront(arr) {
  let zeroPosition = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[zeroPosition];
      arr[zeroPosition] = temp;
      zeroPosition += 1;
    }
  }
  console.log(arr);
}
// moveZeroToFront([112, 51, 4, 3, 2, 1, 0, 0, 0, 0]);

//INTERSECTION OF TWO LINKED LISTS
// 1 -> 2 -> 3 -> 4             8 -> 9
//                   -> 5 -> 6
//           8 -> 9           1 -> 2 -> 3 -> 4

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> | 8 -> 9 -> 5 -> 6
// 8 -> 9 -> 5 -> 6 | -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

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

//VALIDATE BST
//time: O(n) worst case 1 long branch | space: O(n) recursion
function validateBST(tree, min = -Infinity, max = Infinity) {
  //look at each tree's value
  //since the tree must obey the rules of BST, it has to be between two values
  //left <= x < right, if x violates this, then return false;
  if (tree.value > max || tree.value <= min) return false;
  let validLeft = validateBST(tree.left, min, tree.value);
  return validLeft && validateBST(tree.right, tree.value, max);
}

//MIN STACK
class MinStack {
  constructor() {
    this._array = [];
  }

  //time: O(1) | space: O(1)
  push(val) {
    let min = this.min();
    this._array.push({
      value: val,
      min: Math.min(min !== undefined ? min : Infinity, min)
    });
  }

  //time: O(1) | space: O(1)
  pop() {
    if (this._array.length > 0) {
      let item = this._array.pop();
      return item.value;
    }
  }

  //time: O(1) | space: O(1)
  min() {
    if (this._array.length > 0) {
      //is not empty
      let item = this._array[this._array.length - 1]; //give me last elem
      return item.min;
    }
  }
}

/************************************************************************************************/
/*
//*** arrays and strings ***
merge sorted array - learned
third maximum number - learned
reverse words in a string II
intersection of two arrays
intersection of two arrays II
spiral matrix

//*** linked list ***
palindrome linked list - learned
plus one linked list - learned

//*** trees and graphs ***
invert binary tree - learned
binary tree level order traversal
populating next right pointers in each node
populating next right pointers in each node II
lowest common ancestor of a binary tree
convert sorted array to binary search tree
kth smallest element in a BST
island perimeter
number of islands
walls and gates
alien dictionary

//*** sorting and searching ***
search in rotated sorted array
search in rotated sorted array II
sort characters by frequency
kth largest element in array
top k frequency elements

//*** dynamic programming ***
unique paths II
unique binary search trees II
word break

//*** design ***
moving average from data stream
implement stack using queues
encode and decode strings
LRU cache

//*** others ***
sliding window maximum
*/
/************************************************************************************************/

function mergeSortedArr(arr1, arr2) {
  //add space to one of the arrays
  //look at last items of each array
  //compare for whichever is greater, then add the last item to total arr
  //sorted, pointers,
  let final = [];
  let lastIdx1 = arr1.length - 1;
  let lastIdx2 = arr2.length - 1;
  let currIdx = lastIdx1 + lastIdx2 + 1;
  while (currIdx > -1) {
    console.log(currIdx);
    if (arr1[lastIdx1] > arr2[lastIdx2] || !arr2[lastIdx2]) {
      final[currIdx] = arr1[lastIdx1]; //feel like i can use Math.max here
      lastIdx1--;
    } else {
      final[currIdx] = arr2[lastIdx2]; //feel like i can use Math.max here
      lastIdx2--;
    }
    currIdx--;
  }
  console.log(final);
}

// mergeSortedArr([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
// mergeSortedArr([1, 3, 5], [2, 4, 6, 7, 8, 912]);

function mergeSortedArr2(arr1, m, arr2, n) {
  //add numbers from the back and then move as necesary
  let currIdx = m + n - 1;
  let lastIdx1 = m - 1;
  let lastIdx2 = n - 1;
  while (currIdx > -1) {
    if (arr1[lastIdx1] > arr2[lastIdx2] || !arr2[lastIdx2]) {
      arr1[currIdx] = arr1[lastIdx1--];
    } else {
      arr1[currIdx] = arr2[lastIdx2--];
    }
    currIdx--;
  }
  console.log(arr1);
}

// mergeSortedArr2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
// Output: [1,2,2,3,5,6]

// https://leetcode.com/problems/third-maximum-number/description/
// 414. Third Maximum Number
// DescriptionHintsSubmissionsDiscussSolution
// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Example 1: Input: [3, 2, 1] | Output: 1
// Example 2: Input: [1, 2] | Output: 2
// Example 3: Input: [2, 2, 3, 1] | Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

function thirdLargestNum(arr) {
  let threeLargest = [null, null, null];
  for (let num of arr) {
    addToArray(threeLargest, num);
  }

  console.log("threeLargest: ", threeLargest);
  if (arr.length >= 3) {
    return threeLargest[0];
  } else {
    //if (arr.length === 2)
    return threeLargest[2];
  }
}

// /*eslint-disable */
function addToArray(threeLargest, num) {
  if (threeLargest[2] === null || threeLargest[2] < num) {
    shiftUpAndInsert(threeLargest, num, 2);
  } else if (threeLargest[1] === null || threeLargest[1] < num) {
    if (num !== threeLargest[2]) {
      shiftUpAndInsert(threeLargest, num, 1);
    }
  } else if (threeLargest[0] === null || threeLargest[0] < num) {
    if (num !== threeLargest[1] && num !== threeLargest[0]) {
      shiftUpAndInsert(threeLargest, num, 0);
    }
  }
}

function shiftUpAndInsert(arr, insertVal, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) arr[i] = insertVal;
    else arr[i] = arr[i + 1];
  }
}

// console.log(thirdLargestNum([3, 2, 1])); // 1
// console.log(thirdLargestNum([2, 1])); // 2
// console.log(thirdLargestNum([3, 2, 1, 2])); // 1

// https://leetcode.com/problems/palindrome-linked-list/description/
// Given a singly linked list, determine if it is a palindrome.
// Example 1: Input: 1->2 Output: false
// Example 2: Input: 1->2->2->1 Output: true
//Do it in time: O(n) and space: O(1)

// https://github.com/awangdev/LintCode/blob/master/Java/Palindrome%20Linked%20List.java
//time: O(n) need to use 2 runner strategy to get to the midpoint, but doesn't compound
//space: O(1) while we need a var to reverse the second half of LL, we remove the second half from the original after it is copied
function palindromeLinkedList(head) {
  if (head === null || head.next === null) return true;
  //find supposed middle of palindrome
  //doesn't matter if its even or odd really
  //find the node before the palindrome starts
  let mid = findMiddle(head); //mid points to head (keep this in mind)
  //reverse the supposed palindrome second half
  let rightNode = reversedLinkList(mid.next);
  mid.next = null; //this is what separates the LL making it O(1)
  leftNode = head;
  while (leftNode !== null && rightNode !== null) {
    if (leftNode.val !== rightNode.val) return false;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return true;
}

function findMiddle(head) {
  let fast = head.next; //.next?
  let slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reversedLinkList(head) {
  let prev = null;
  while (head) {
    let nextHead = head.next;
    head.next = prev;
    prev = head;
    head = nextHead;
  }
  return prev;
}

/*
even: 1-2-3-4 | 4-3-2-1

odd: 1-2-3- 4 -3-2-1


use 2 runner approach to find the midPoint
then reverse the second link
then remove the second half from the original
then go through each at the same pace
*/

// Given a non-negative number represented as a singly linked list of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.
// Input: 9 - 2 - 1 (basically 129)

//time: O(n) need to get all values at least 1 pass
//space: O(n) need to store all the nums in an array to be manageable
function plusOneLinkedList(head) {
  //adding values to arr to make it more managable
  let intArr = [1, 9, 9];
  let listCopy = head;
  while (listCopy) {
    intArr.push(listCopy.value);
    listCopy = listCopy.next;
  }

  //add 1 to values of linked list
  let total = "";
  let carry = 0;
  for (let lastIdx = intArr.length - 1; lastIdx >= 0; lastIdx--) {
    if (lastIdx === intArr.length - 1) intArr[lastIdx] += 1;

    let sum = intArr[lastIdx] + carry;

    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    total = sum + total;
  }
  console.log("original", intArr);
  console.log("string split", total.split("").map(num => parseInt(num)));

  //Add this back to linked list
  let idx = intArr.length - 1;
  while (head && idx >= 0) {
    head.value = intArr[idx--];
    head = head.next;
  }
  return head;
}

// plusOneLinkedList();

// function plusOne(head) { //not sure if this works
//   //reverse the LL so you can access onesPlace
//   //then reverse it back to give you LL in original order
//   let reversed = reverseLL(head);
//   let copy = reversed;
//   while (copy !== null) {
//     if (copy.val + 1 <= 9) {
//       copy.val += 1;
//       break;
//     } else {
//       copy.val = 0;
//       if (copy.next === null) {
//         copy.next = new ListNode(1);
//         break;
//       }
//       copy = copy.next;
//     }
//   }
//   return reverseLL(reversed);
// }

//time: O(n) - go through all node
//space: O(1) - don't need extra variables to hold n values
function plusOneLL(head) {
  //reverse the linked list, then iterate through it
  let reverse = revLL(head);
  let revReverse = reverse;

  let addOne = 1;
  let carry = 0;
  while (reverse) {
    if (addOne !== 0) {
      reverse.value += 1;
      addOne -= 1;
    }

    reverse.value += carry;
    carry = 0;

    if (reverse.value > 9) {
      reverse.value = 0;
      carry = 1;
    }

    if (reverse.next === null && carry !== 0) {
      reverse.next = new LLNode(1);
      break; //need to exit or it'll go another loop cause .next is not null
    }
    reverse = reverse.next;
  }
  //reverses back reversed LL
  console.log(revLL(revReverse));
}

plusOneLL(testLLForPlusOne.head);

//how far off one string is from the other from being an anagram
var isAnagram = function(str, anagram) {
  if (str.length !== anagram.length) return false;
  let hashmap = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!hashmap[char]) hashmap[char] = 1;
    else hashmap[char] += 1;
  }
  for (let j = 0; j < anagram.length; j++) {
    let anChar = anagram[j];
    if (!hashmap[anChar]) return false;
    else hashmap[anChar] -= 1;
  }
  return true;
};

// console.log(isAnagram("booger", "booger"));
// console.log(isAnagram("booger", "roobge"));
// console.log(isAnagram("booger", "oorbge"));

function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length > 0) {
    let node = queue.shift();
    if (node !== null) {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      queue.push(node.left);
      queue.push(node.right);
    }
  }
}

// Initial problem but pointed out that Math.random can theoretically repeat
// Write a random generator class where every time you call the next number, it does not repeat.
class GenerateRandom {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
    this.seen = new Set();
  }

  nextRandom() {
    //give me a random num i have not seen before
    //Problem with this is that Math.random can still generate the same number over and over, causing an infinite loop. How to resolve that?
    let num = Math.floor(Math.random * this.upper);
    while (!this.seen.has(num)) {
      num = Math.floor(Math.random * this.upper);
    }
    this.seen.add(num);
    return num;
  }
}

//   giveMeOrder() {
//     console.log(this.seen);
//   }
// }

// let testGenerator = new GenerateRandom(1, 10);
// testGenerator.giveMeOrder();

class GenerateRandom {
  constructor(lower, upper) {
    this.upper = upper;
    this.lower = lower;
    this.queue = [];
    this.generateNewQueue(this.queue);
  }

  //Time: O(n) to create new queue
  //Space: O(n) to store nums of queue
  generateNewQueue(queue) {
    //Build range
    for (let i = this.lower; i <= this.upper; i++) {
      queue.push(i);
    }
    return this.randomize(queue);
  }

  //Time: O(n) to randomize numbers
  //Space: O(1) , using same queue from before
  randomize(queue) {
    //Swap the order around
    //Doesn't matter even if math.random is the same number over and over
    let pseudoRandomness = new Date().getMilliseconds();
    // console.log(date)
    for (let k = queue.length - 1; k >= 0; k--) {
      let randomNum = Math.floor(
        (Math.random() * pseudoRandomness) % this.upper
      );
      // let randomNum = Math.floor(
      //   //If Math.random() was theoretically constant
      //   (3 * pseudoRandomness) % this.upper
      // );
      let temp = queue[k];
      queue[k] = queue[randomNum];
      queue[randomNum] = temp;
      console.log(queue, "index", k, "swaps with", randomNum);
    }
    return queue;
  }

  //time: O(1) its just taking off the number from the queue
  //space: O(1)
  nextRandom() {
    if (this.queue.length > 0) {
      console.log(this.queue);
      return this.queue.shift();
    } else {
      //edge case: once you use all numbers, generate new the queue
      this.queue = this.generateNewQueue(this.queue);
      return this.nextRandom();
    }
  }
}

// let testGenerator = new GenerateRandom(1, 10);
// [ 1, 2, 3, 10, 5, 6, 7, 8, 9, 4 ] 'index' 9 'swaps with' 3
// [ 1, 2, 9, 10, 5, 6, 7, 8, 3, 4 ] 'index' 8 'swaps with' 2
// [ 1, 2, 8, 10, 5, 6, 7, 9, 3, 4 ] 'index' 7 'swaps with' 2
// [ 1, 2, 7, 10, 5, 6, 8, 9, 3, 4 ] 'index' 6 'swaps with' 2
// [ 1, 6, 7, 10, 5, 2, 8, 9, 3, 4 ] 'index' 5 'swaps with' 1
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ] 'index' 4 'swaps with' 1
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ] 'index' 3 'swaps with' 3
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ] 'index' 2 'swaps with' 2
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ] 'index' 1 'swaps with' 1
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ] 'index' 0 'swaps with' 0
// [ 1, 5, 7, 10, 6, 2, 8, 9, 3, 4 ]
// [ 5, 7, 10, 6, 2, 8, 9, 3, 4 ]
// [ 7, 10, 6, 2, 8, 9, 3, 4 ]
// [ 10, 6, 2, 8, 9, 3, 4 ]
// [ 6, 2, 8, 9, 3, 4 ]
// [ 2, 8, 9, 3, 4 ]
// [ 8, 9, 3, 4 ]
// [ 9, 3, 4 ]
// [ 3, 4 ]
// [ 4 ]

// testGenerator.nextRandom(); //1
// testGenerator.nextRandom(); //2
// testGenerator.nextRandom(); //3
// testGenerator.nextRandom(); //4
// testGenerator.nextRandom(); //5
// testGenerator.nextRandom(); //6
// testGenerator.nextRandom(); //7
// testGenerator.nextRandom(); //8
// testGenerator.nextRandom(); //9
// testGenerator.nextRandom(); //10
// testGenerator.nextRandom(); //new queue created and given new num
// testGenerator.nextRandom(); //1
// testGenerator.nextRandom(); //2
// testGenerator.nextRandom(); //3
// testGenerator.nextRandom(); //4
// testGenerator.nextRandom(); //5
// testGenerator.nextRandom(); //6
// testGenerator.nextRandom(); //7
// testGenerator.nextRandom(); //8
// testGenerator.nextRandom(); //9
// testGenerator.nextRandom(); //10

// let objTester = { 1: true, 2: true, 3: true, 4: true, 5: true };
// for (let keys in objTester) {
//   console.log(keys);
// }
// console.log();
// for (let keys in objTester) {
//   console.log(keys);
// }
// console.log();
// for (let keys in objTester) {
//   console.log(keys);
// }
