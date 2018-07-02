// // **************** Homework for Thu Jun 28 2018 ****************
// // [ Question {name: 'BST Traversal',learnedStatus: true,difficulty: 'medium',source: 'AE',type: 'BST' },
// //   Question {name: 'Palindrome Check',learnedStatus: true,difficulty: 'easy',source: 'AE',type: 'string' },
// //   Question {name: 'Insert Sort',learnedStatus: true,difficulty: 'easy',source: 'AE',type: 'sorting' },
// //   Question {name: 'Three Number Sum',learnedStatus: true,difficulty: 'medium',source: 'AE',type: 'array' },
// //   Question {name: 'BST Construction',learnedStatus: true,difficulty: 'medium',source: 'AE',type: 'BST' } ]

// //time: O(n) - need to go through every node
// //space: O(n)
// function preOrderTraversal(tree, arr) {
//   if (tree) {
//     arr.push(tree.value);
//     preOrderTraversal(tree.left, arr);
//     preOrderTraversal(tree.right, arr);
//   }
//   return array;
// }

// function inOrderTraversal(tree, arr) {
//   if (tree) {
//     inOrderTraversal(tree.left, arr);
//     arr.push(tree.value);
//     inOrderTraversal(tree.right, arr);
//   }
//   return array;
// }

// function postOrderTraversal(tree, arr) {
//   if (tree) {
//     postOrderTraversal(tree.left, arr);
//     postOrderTraversal(tree.right, arr);
//     arr.push(tree.value);
//   }
//   return array;
// }

// //time: O(n)
// //space: O(1);
// function palindromeCheck(str) {
//   //have a left pointer and a right pointer,
//   //and move them closer and closer to the middle until they meet
//   let left = 0;
//   while (left <= str.length - 1 - left) {
//     if (str[left] !== str[str.length - 1 - left]) return false;
//     left += 1;
//   }
//   return true;
// }

// // console.log(palindromeCheck("booger"));
// // console.log(palindromeCheck("tacocat"));
// // console.log(palindromeCheck("abcba"));

// function insertionSort(arr) {
//   //use a for loop to go 1 number at a time
//   //then have a second loop that will compare the current number with the previous num,
//   //if it is not sorted, then sort them, then decrement the second loop and
//   //repeat this operation until you reach the beginning
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j] < arr[j - 1]) {
//       swap(j, j - 1, arr);
//       j--;
//     }
//   }
//   console.log(arr);
// }

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // insertionSort([8, 5, 23, 52, 5, 26, 26, 4, 2, 16, 62, 3]);

// function threeNumberSum(arr, target) {
//   //sort it b/c extent is already O(n^2) so O(n log n) wont hurt
//   //once sorted, have a for loop going through, holding onto 1 number
//   //then have pointers for the other two numbers
//   //move pointers when its too large or too small
//   let possibilities = [];
//   arr.sort((a, b) => a - b); //need to sort smallest to largest
//   console.log("arr: ", arr);
//   for (let i = 0; i < arr.length; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       let calculation = arr[i] + arr[left] + arr[right];
//       if (calculation < target) {
//         left += 1;
//       } else if (calculation > target) {
//         right -= 1;
//       } else {
//         possibilities.push([arr[i], arr[left], arr[right]]);
//         left += 1; //remember this needs to keep moving forward
//       }
//     }
//   }
//   console.log("possibilities: ", possibilities);
// }

// // threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

// class BST {
//   constructor(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
//   }
//   //time: O(log n) | space: O(1)
//   insert(val) {
//     let node = this;
//     while (node) {
//       if (node.value > val) {
//         if (node.right) {
//           node = node.right;
//         } else {
//           node.right = new BST(val);
//           break;
//         }
//       } else {
//         //<= goes left side;
//         if (node.left) {
//           node = node.left;
//         } else {
//           node.left = new BST(val);
//           break;
//         }
//       }
//     }
//     return this;
//   }
//   //time: O(log n) - b/c nature of BST | space: O(1)
//   contains(val) {
//     let node = this;
//     while (node) {
//       if (this.value < val) {
//         node = node.right;
//       } else if (this.value > val) {
//         node = node.left;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   }
//   //time: O(log n) | space: O(1);
//   getMinValue() {
//     let node = this;
//     while (node) {
//       if (node.left !== null) {
//         node = node.left;
//       }
//     }
//     return node.value;
//   }
// }

// // **************** Homework for Fri Jun 29 2018 ****************
// // Question {name: 'valid parentheses',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
// // Question {name: 'most traded',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
// // Question {name: 'reverseLinkedList',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL' },
// // Question {name: 'valid parentheses',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
// // Question {name: 'add nums of 2 linked list',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL'}

// //time: O(n) -> go thru all nodes | space: O(n) keeping the same space
// function reverseList(head) {
//   //LL is all about references
//   //have a variable that holds the refernce you're rewiring
//   //such as head.next
//   let prevNode = null;
//   while (head) {
//     let originalNext = head.next;
//     head.next = prevNode;
//     prevNode = head;
//     head = originalNext;
//   }
//   return prevNode;
// }

// //time: O(n + 3 for brackets) but 3 gets dropped | O(n)
// function validParens(str) {
//   //need a DS with order
//   //as we go through each elem, we want to kinda compare to the last thing we've seen
//   //i'm thinking a stack here, LIFO last in first out
//   //as we go, we add open brackets, and when we encounter a close bracket, its gotta match or
//   //its not balanced
//   let openBrackets = "[{(";
//   let closeBrackets = "]})";
//   let bracketPairs = { "]": "[", "}": "{", ")": "(" };
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (openBrackets.includes(str[i])) {
//       stack.push(str[i]);
//     } else if (closeBrackets.includes(str[i])) {
//       if (stack[stack.length - 1] === bracketPairs[str[i]]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// class MostTraded {
//   constructor() {
//     this.tradeLog = {};
//   }

//   //create a trade log, which can be a hashTable which gives us O(1) lookup
//   //as trades are made, calculate the avg and keep track of the max

//   record(ticker, volume) {
//     if (!this.tradeLog[ticker]) this.tradeLog[ticker] = volume;
//     else this.tradeLog[ticker] += volume;
//   }

//   //time: O(n) goes thru entire obj | space: O(n) need to store in array
//   mostTraded(num) {
//     let allTrades = [];
//     for (let ticker in this.tradeLog) {
//       allTrades.push([ticker, this.tradeLog[ticker]]);
//     }
//     //now have all the trades,
//     allTrades.sort((a, b) => b[1] - a[1]); //largest
//     return allTrades.slice(0, num);
//   }
// }

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class SinglyLL {
//   constructor() {
//     this.head = null;
//   }

//   add(val) {
//     let formerHead = this.head;
//     let newNode = new Node(val);
//     this.head = newNode;
//     if (formerHead) this.head.next = formerHead;
//     return this;
//   }

//   remove() {
//     let formerHead = this.head;
//     if (!formerHead) return;
//     if (formerHead.next) this.head = formerHead.next;
//     else this.head = null;
//     return formerHead.value;
//   }
// }
// let List1 = new SinglyLL()
//   .add(9)
//   .add(2)
//   .add(1);
// let List2 = new SinglyLL().add(1).add(2);

// addTwoLinkedList(List1.head, List2.head);

// function addTwoLinkedList(head1, head2) {
//   //first gotta take everything off the LL's
//   //then sum up the last digits
//   //note that you'll have to carry over sums creater than 10
//   //then put it as a string
//   //split
//   //then parse back to numbers

//   let digits1 = [];
//   let digits2 = [];
//   while (head1) {
//     digits1.push(head1.value);
//     head1 = head1.next;
//   }
//   while (head2) {
//     digits2.push(head2.value);
//     head2 = head2.next;
//   }
//   let lastIdx1 = digits1.length - 1;
//   let lastIdx2 = digits2.length - 1;
//   let total = "";
//   let carry = 0;
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     let a = digits1[lastIdx1] || 0;
//     let b = digits2[lastIdx2] || 0;
//     let sum = a + b + carry;

//     if (sum > 9) {
//       sum -= 10;
//       carry += 1;
//     } else {
//       carry = 0;
//     }

//     total = sum + total;

//     lastIdx1--;
//     lastIdx2--;
//   }

//   console.log(total.split("").map(num => parseInt(num)));
// }

// **************** Homework for Sun Jul 01 2018 ****************
// [ Question {name: 'move zeros',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'array' },
//   Question {name: 'string compression',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'string' },
//   Question {name: 'most traded',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
//   Question {name: 'linked list cycle',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL' },
//   Question {name: 'validate BST',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'BST' } ]

function moveZeros(arr) {
  // set up a counter to to move items up 1 by 1 for every non-zero
  //once you've moved all the numbers up, you can add them to the back
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[count++] = arr[i]; //moves up nums
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  console.log(arr);
}

// moveZeros([0, 0, 0, 0, 0, 2, 2, 1, 2, 12]);

function strCompression(str) {
  //need to keep track of a letter
  //then check the number if its the same, then increase it
  //then add Num + Char to a string,
  //then compare the two, compressed string and str to see which is shorter
  let cStr = ""; //needs to be available everywhere
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let counter = 1; //start at 1 b/c each char at least gets 1
    while (char === str[i + 1]) {
      i++;
      counter++;
    }
    cStr += counter + char;
    counter = 1;
  }
  console.log(cStr);
  return cStr.length < str.length ? cStr : str;
}

// strCompression("aabbccccc"); //2a2b5c

class MostTraded {
  constructor() {
    this.tradeLogs = {};
  }
  //create a hashtable to hold unique trades
  //have a way to add trades
  //then have a way to print highest trades given n

  add(ticker, vol) {
    if (this.tradeLogs[ticker]) this.tradeLogs[ticker] += vol;
    else this.tradeLogs[ticker] = vol;
    return this;
  }

  printHighestTrades(n) {
    let allTrades = [];
    for (let key in this.tradeLogs) {
      allTrades.push([key, this.tradeLogs[key]]);
    }
    allTrades.sort((a, b) => b[1] - a[1]);
    return allTrades.slice(0, n);
  }
}

let testTrade = new MostTraded()
  .add("IBM", 1000)
  .add("APPL", 500)
  .add("NFLX", 1000)
  .add("AMZN", 700)
  .add("APPL", 600);

// console.log(testTrade.printHighestTrades(3));
// console.log(testTrade.printHighestTrades(2));
// printHighestTrades(3) should print out
// 'APPL', 1100
// 'IBM', 1000
// 'NFLX', 1000

function findLLCycle(head) {
  // //Option A) using a set to store the values you've seen , O(n) space
  // let uniques = new Set();
  // while (head) {
  //   if (!uniques.has(head.value)) uniques.add(head.value);
  //   else return head;
  //   head = head.next;
  // }
  // console.log("theres no cycle");

  //Option B) using only pointers, O(1) space
  if (!head) return head;
  let slow = head;
  let fast = head;
  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break; //found the loop, found node that it starts
  }
  // if (slow !== fast) return "theres no loop";
  if (!slow || slow !== fast) return null; //dont know the purpose of this

  slow = head; //finds the node before it starts
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}

function validateBST(tree) {
  //tree, tree.left (min),  tree.right (max)
  return validateHelper(tree, -Infinity, Infinity);
}

function validateHelper(tree, min, max) {
  if (!tree) return true;
  if (tree.value < min || tree.value >= max) return false;
  let validateLeftHelper = validateHelper(tree.left, min, tree.value);
  return validateLeftHelper && validateHelper(tree.right, tree.value, max);
}

// **************** Homework for Mon Jul 02 2018 ****************
// [ Question {name: 'add nums of 2 linked list',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL' },
//   Question {name: 'move zeros',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'array' },
//   Question {name: 'string compression',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'string' },
//   Question {name: 'trap rain water',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
//   Question {name: 'min stack',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'stack' } ]

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LL {
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
    if (formerHead.next) this.head = formerHead.next;
    else this.head = null;
    return formerHead.value;
  }
  print() {
    let values = [];
    let node = this.head;
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    return values;
  }
}

function addTwoLL(list1, list2) {
  //need all the values from each list, make array for them
  //then have some sort of way to add up numbers,
  //which starts from the singles column (right) then moves left
  //since these are numbers, i want them to be a string so i can split them later into array as desired
  let digits1 = [];
  let digits2 = [];

  while (list1 !== null) {
    //assuming the end would be null
    digits1.push(list1.value);
    list1 = list1.next;
  }
  while (list2 !== null) {
    digits2.push(list2.value);
    list2 = list2.next;
  }
  console.log(digits1, digits2);
  let lastIdx1 = digits1.length - 1;
  let lastIdx2 = digits2.length - 1;
  let totalStr = "";
  let carry = 0;
  for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
    let numFrom1 = digits1[lastIdx1--] || 0;
    let numFrom2 = digits2[lastIdx2--] || 0;
    let sum = numFrom1 + numFrom2 + carry;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    console.log(sum);

    //needs to be this exact placement for string
    //sum will convert to string here
    totalStr = sum + totalStr;
    //lastIdx1-- //was moved above
    //lastIdx2--
  }
  console.log(totalStr.split("").map(num => parseInt(num)));
}
let List129 = new LL()
  .add(9)
  .add(2)
  .add(1);
let List21 = new LL().add(1).add(2);

// addTwoLL(List129.head, List21.head);

function moveZeros(arr) {
  //we wnat to move all zeros to the back,
  //we need to count all the zero's we have, then add them to the back
  //lets instead count the non zeros
  //shift all the non-zeros up then add zeros to the back
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[count++] = arr[i];
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  console.log(arr);
}

// moveZeros([0, 0, 0, 0, 0, 1, 2, 3, 3, 4, 5, 5]);

function stringCompression(str) {
  //need to count each letter, so lets compare current letter with the next one
  //if the next one is the same, we'll increment a counter
  //we also need to create a string so we can start a new string
  //new string + counter + char
  //then return only if its shorter
  let compressed = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let counter = 1;
    while (char === str[i + 1]) {
      counter++;
      i++; //need to increment i to move it along as well;
    }
    compressed += counter + char;
    counter = 1;
  }

  console.log("compressed: ", compressed);
}

// stringCompression("aaabbbbccccccc"); //3a4b7c

function trapRain(landscape) {
  //first, find the largest left, then largest right, then compare to make minHeight, then is current landscape is shorter thna min height, you can save water there
  let maxLeftLandscape = [];
  let maxLeft = 0;
  for (let i = 0; i < landscape.length; i++) {
    let column = landscape[i];
    maxLeft = Math.max(column, maxLeft);
    maxLeftLandscape.push(maxLeft);
  }

  let maxRightLandscape = [];
  let maxRight = 0;
  for (let j = landscape.length - 1; j >= 0; j--) {
    let column = landscape[j];
    maxRight = Math.max(column, maxRight);
    maxRightLandscape[j] = maxRight;
  }

  // console.log(maxLeftLandscape, maxRightLandscape);
  // let rainWater = []; //or use a tracker to keep total of all water trapped, saves having to use reduce
  let totalRain = 0;
  for (let k = 0; k < landscape.length; k++) {
    let minHeight = Math.min(maxRightLandscape[k], maxLeftLandscape[k]);
    let column = landscape[k];
    if (column < minHeight) {
      totalRain += minHeight - column;
    }
  }
  console.log(totalRain);
}

// trapRain([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

class MinStack {
  constructor() {
    this.array = [];
  }

  //push //pop // min //
  push(val) {
    let min = this.min();
    this.array.push({
      value: val,
      min: Math.min(min !== undefined ? min : Infinity, val)
    });
    return this;
  }

  pop() {
    if (this.array.length > 0) {
      let item = this.array.pop();
      console.log(item.value);
    }
  }
  peek() {
    if (this.array.length > 0) {
      let item = this.array[this.array.length - 1];
      console.log(item);
    }
  }

  min() {
    if (this.array.length > 0) {
      console.log(this.array[this.array.length - 1].min);
      return this.array[this.array.length - 1].min;
    }
  }
}

let testMinStack = new MinStack()
  .push(2)
  .push(5)
  .push(6);

// testMinStack.min();
// testMinStack.peek();
