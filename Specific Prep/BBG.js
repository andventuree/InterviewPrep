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
// console.log(subscribers * CostOfTerminal * 0.65);
// console.log((subscribers * CostOfTerminal) / employee);

// 7, 800, 000, 000;

//ADD NUMBERS OF 2 LINKED LISTS
let addTwoNumbers = function(l1, l2) {
  //initialize 2 empty arrays
  let digits1 = [];
  let digits2 = [];
  let item = l1; //copy the head of the fake list
  while (item) {
    digits1.push(item.val); //push each value into array
    item = item.next; //move to the next node
  }

  let item2 = l2;
  while (item2) {
    //push each value into array
    digits2.push(item2.val);
    item2 = item2.next;
  }

  var index1 = digits1.length - 1;
  var index2 = digits2.length - 1;

  var total = "";
  var tens = 0;
  var carry = 0;
  //loop backwards on the math.max of either of 2 arrays
  for (var i = Math.max(index1, index2); i > 0; i--) {
    a = digits1[index1 - 1];
    b = digits2[index2 - 1];
    var sum = a + b + carry;

    if (sum > 9) {
      //perform a carry operation to carry one over if sum is more than 9
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    total = sum + total;

    index1--;
    index2--;
  }

  if (carry) {
    total = carry + total;
  }

  return total.split("").map(function(value) {
    return parseInt(value);
  });
};

//REVERSE LINKED LIST
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

function reverseLLRecur(head) {
  if (head.next === null || head === null) return head;
  let formerHead = reverseLLRecur(head.next);
  head.next.next = head;
  head.next = null;
  return formerHead;
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
