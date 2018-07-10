let { homeworkTonight, tricks } = require("./HwHelper");

// homeworkTonight.genQuestions(5);
// console.log(homeworkTonight._questions);
// homeworkTonight.genQuestions(6, "BST", "AE");
// homeworkTonight.genQuestions(6, "all", "bbg");
// tricks.genQuestions(5);

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

// // **************** Homework for Sun Jul 01 2018 ****************
// // [ Question {name: 'move zeros',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'array' },
// //   Question {name: 'string compression',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'string' },
// //   Question {name: 'most traded',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
// //   Question {name: 'linked list cycle',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL' },
// //   Question {name: 'validate BST',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'BST' } ]

// function moveZeros(arr) {
//   // set up a counter to to move items up 1 by 1 for every non-zero
//   //once you've moved all the numbers up, you can add them to the back
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[count++] = arr[i]; //moves up nums
//   }
//   while (count < arr.length) {
//     arr[count] = 0;
//     count++;
//   }
//   console.log(arr);
// }

// // moveZeros([0, 0, 0, 0, 0, 2, 2, 1, 2, 12]);

// function strCompression(str) {
//   //need to keep track of a letter
//   //then check the number if its the same, then increase it
//   //then add Num + Char to a string,
//   //then compare the two, compressed string and str to see which is shorter
//   let cStr = ""; //needs to be available everywhere
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let counter = 1; //start at 1 b/c each char at least gets 1
//     while (char === str[i + 1]) {
//       i++;
//       counter++;
//     }
//     cStr += counter + char;
//     counter = 1;
//   }
//   console.log(cStr);
//   return cStr.length < str.length ? cStr : str;
// }

// // strCompression("aabbccccc"); //2a2b5c

// class MostTraded {
//   constructor() {
//     this.tradeLogs = {};
//   }
//   //create a hashtable to hold unique trades
//   //have a way to add trades
//   //then have a way to print highest trades given n

//   add(ticker, vol) {
//     if (this.tradeLogs[ticker]) this.tradeLogs[ticker] += vol;
//     else this.tradeLogs[ticker] = vol;
//     return this;
//   }

//   printHighestTrades(n) {
//     let allTrades = [];
//     for (let key in this.tradeLogs) {
//       allTrades.push([key, this.tradeLogs[key]]);
//     }
//     allTrades.sort((a, b) => b[1] - a[1]);
//     return allTrades.slice(0, n);
//   }
// }

// let testTrade = new MostTraded()
//   .add("IBM", 1000)
//   .add("APPL", 500)
//   .add("NFLX", 1000)
//   .add("AMZN", 700)
//   .add("APPL", 600);

// // console.log(testTrade.printHighestTrades(3));
// // console.log(testTrade.printHighestTrades(2));
// // printHighestTrades(3) should print out
// // 'APPL', 1100
// // 'IBM', 1000
// // 'NFLX', 1000

// function findLLCycle(head) {
//   // //Option A) using a set to store the values you've seen , O(n) space
//   // let uniques = new Set();
//   // while (head) {
//   //   if (!uniques.has(head.value)) uniques.add(head.value);
//   //   else return head;
//   //   head = head.next;
//   // }
//   // console.log("theres no cycle");

//   //Option B) using only pointers, O(1) space
//   if (!head) return head;
//   let slow = head;
//   let fast = head;
//   while (slow.next && fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) break; //found the loop, found node that it starts
//   }
//   // if (slow !== fast) return "theres no loop";
//   if (!slow || slow !== fast) return null; //dont know the purpose of this

//   slow = head; //finds the node before it starts
//   while (slow !== fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return fast;
// }

// function validateBST(tree) {
//   //tree, tree.left (min),  tree.right (max)
//   return validateHelper(tree, -Infinity, Infinity);
// }

// function validateHelper(tree, min, max) {
//   if (!tree) return true;
//   if (tree.value < min || tree.value >= max) return false;
//   let validateLeftHelper = validateHelper(tree.left, min, tree.value);
//   return validateLeftHelper && validateHelper(tree.right, tree.value, max);
// }

// // **************** Homework for Mon Jul 02 2018 ****************
// // [ Question {name: 'add nums of 2 linked list',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'LL' },
// //   Question {name: 'move zeros',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'array' },
// //   Question {name: 'string compression',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'string' },
// //   Question {name: 'trap rain water',learnedStatus: true,difficulty: '',source: 'bloomberg',type: '' },
// //   Question {name: 'min stack',learnedStatus: true,difficulty: '',source: 'bloomberg',type: 'stack' } ]

// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class LL {
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
//   print() {
//     let values = [];
//     let node = this.head;
//     while (node) {
//       values.push(node.value);
//       node = node.next;
//     }
//     return values;
//   }
// }

// function addTwoLL(list1, list2) {
//   //need all the values from each list, make array for them
//   //then have some sort of way to add up numbers,
//   //which starts from the singles column (right) then moves left
//   //since these are numbers, i want them to be a string so i can split them later into array as desired
//   let digits1 = [];
//   let digits2 = [];

//   while (list1 !== null) {
//     //assuming the end would be null
//     digits1.push(list1.value);
//     list1 = list1.next;
//   }
//   while (list2 !== null) {
//     digits2.push(list2.value);
//     list2 = list2.next;
//   }
//   console.log(digits1, digits2);
//   let lastIdx1 = digits1.length - 1;
//   let lastIdx2 = digits2.length - 1;
//   let totalStr = "";
//   let carry = 0;
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     let numFrom1 = digits1[lastIdx1--] || 0;
//     let numFrom2 = digits2[lastIdx2--] || 0;
//     let sum = numFrom1 + numFrom2 + carry;
//     if (sum > 9) {
//       sum -= 10;
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//     console.log(sum);

//     //needs to be this exact placement for string
//     //sum will convert to string here
//     totalStr = sum + totalStr;
//     //lastIdx1-- //was moved above
//     //lastIdx2--
//   }
//   console.log(totalStr.split("").map(num => parseInt(num)));
// }
// let List129 = new LL()
//   .add(9)
//   .add(2)
//   .add(1);
// let List21 = new LL().add(1).add(2);

// // addTwoLL(List129.head, List21.head);

// function moveZeros(arr) {
//   //we wnat to move all zeros to the back,
//   //we need to count all the zero's we have, then add them to the back
//   //lets instead count the non zeros
//   //shift all the non-zeros up then add zeros to the back
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[count++] = arr[i];
//   }
//   while (count < arr.length) {
//     arr[count] = 0;
//     count++;
//   }
//   console.log(arr);
// }

// // moveZeros([0, 0, 0, 0, 0, 1, 2, 3, 3, 4, 5, 5]);

// function stringCompression(str) {
//   //need to count each letter, so lets compare current letter with the next one
//   //if the next one is the same, we'll increment a counter
//   //we also need to create a string so we can start a new string
//   //new string + counter + char
//   //then return only if its shorter
//   let compressed = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let counter = 1;
//     while (char === str[i + 1]) {
//       counter++;
//       i++; //need to increment i to move it along as well;
//     }
//     compressed += counter + char;
//     counter = 1;
//   }

//   console.log("compressed: ", compressed);
// }

// // stringCompression("aaabbbbccccccc"); //3a4b7c

// function trapRain(landscape) {
//   //first, find the largest left, then largest right, then compare to make minHeight, then is current landscape is shorter thna min height, you can save water there
//   let maxLeftLandscape = [];
//   let maxLeft = 0;
//   for (let i = 0; i < landscape.length; i++) {
//     let column = landscape[i];
//     maxLeft = Math.max(column, maxLeft);
//     maxLeftLandscape.push(maxLeft);
//   }

//   let maxRightLandscape = [];
//   let maxRight = 0;
//   for (let j = landscape.length - 1; j >= 0; j--) {
//     let column = landscape[j];
//     maxRight = Math.max(column, maxRight);
//     maxRightLandscape[j] = maxRight;
//   }

//   // console.log(maxLeftLandscape, maxRightLandscape);
//   // let rainWater = []; //or use a tracker to keep total of all water trapped, saves having to use reduce
//   let totalRain = 0;
//   for (let k = 0; k < landscape.length; k++) {
//     let minHeight = Math.min(maxRightLandscape[k], maxLeftLandscape[k]);
//     let column = landscape[k];
//     if (column < minHeight) {
//       totalRain += minHeight - column;
//     }
//   }
//   console.log(totalRain);
// }

// // trapRain([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

// class MinStack {
//   constructor() {
//     this.array = [];
//   }

//   //push //pop // min //
//   push(val) {
//     let min = this.min();
//     this.array.push({
//       value: val,
//       min: Math.min(min !== undefined ? min : Infinity, val)
//     });
//     return this;
//   }

//   pop() {
//     if (this.array.length > 0) {
//       let item = this.array.pop();
//       console.log(item.value);
//     }
//   }
//   peek() {
//     if (this.array.length > 0) {
//       let item = this.array[this.array.length - 1];
//       console.log(item);
//     }
//   }

//   min() {
//     if (this.array.length > 0) {
//       console.log(this.array[this.array.length - 1].min);
//       return this.array[this.array.length - 1].min;
//     }
//   }
// }

// let testMinStack = new MinStack()
//   .push(2)
//   .push(5)
//   .push(6);

// // testMinStack.min();
// // testMinStack.peek();

// // **************** Tricks for Mon Jul 02 2018 ****************
// // Question {"binary search"}
// // Question {"shift array up by 1"}
// // Question {"swap arr spaces"}
// // Question {"insertion sort"}
// // Question {"selection sort"}
// // Question {"bubble sort"}
// // Question {"add nums by array back to front "}
// // Question {"delete linked list pointer"}
// // Question {"reverse linked list"}
// // Question {"return function that excutes all callback onto input")}

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     else if (target < arr[mid]) right = mid - 1;
//     else if (target > arr[mid]) left = mid + 1;
//   }
//   return left;
// }

// function shiftUp(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[count++] = arr[i];
//   }
//   console.log(arr.slice(0, count));
// }

// // shiftUp([0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6]);

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function swapObj(obj) {
//   let left = obj.left;
//   obj.left = obj.right;
//   obj.right = left;
// }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j] < arr[j - 1]) {
//       j--;
//     }
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let currIdx = 0; currIdx < arr.length - 1; currIdx++) {
//     //will not need to sort the last item
//     let smallest = currIdx;
//     for (let nextIdx = currIdx + 1; nextIdx < arr.length; nextIdx++) {
//       if (arr[nextIdx] < arr[smallest]) smallest = nextIdx;
//     }
//     swap(currIdx, smallest, arr);
//   }
//   console.log(arr);
// }

// // selectionSort([12, 31, 3, 12, 312, 3, 12, 2, 1, 1, 1, 1]);
// //O(n^2)
// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i + 1] < arr[i]) {
//         swap(i, i + 1, arr);
//         isSorted = false;
//       }
//     }
//   }
//   console.log(arr);
// }

// // bubbleSort([12, 31, 3, 12, 312, 3, 12, 2, 1, 1, 1, 1]);

// function manuallyAddNums(nums1, nums2) {
//   let lastIdx1 = nums1.length - 1;
//   let lastIdx2 = nums2.length - 1;
//   let carry = 0;
//   let stringTotal = "";
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     let a = nums1[lastIdx1--] || 0;
//     let b = nums2[lastIdx2--] || 0;
//     let sum = a + b + carry;

//     if (sum > 9) {
//       sum -= 10;
//       carry += 1;
//     } else {
//       carry = 0;
//     }

//     stringTotal = sum + stringTotal;
//   }
//   console.log(stringTotal.split("").map(num => parseInt(num)));
// }

// // manuallyAddNums([1, 2, 3], [2, 9]);

// function deleteLLNode(node) {
//   if (!node) return node;
//   node.value = node.next.value;
//   node.next = node.next.next;
// }

// function reverseLL(head) {
//   let prevNode = null;
//   if (!head) {
//     let originalNextNode = head.next;
//     head.next = prevNode;
//     prevNode = head;
//     head = originalNextNode;
//   }
// }

// // function GSQuestion(callbacks) {
// //   return function(input) {
// //     for (let i = 0; i < callbacks; i++) {
// //       input = callbacks[i](input);
// //     }
// //     return input;
// //   };
// // }

// let a = function(num) {
//   return num + 2;
// };
// let b = function(num) {
//   return num * 3;
// };
// let c = function(num) {
//   return 10;
// };
// let callbacks = [a, b, c];
// let composeWithValue = compose(callbacks);
// // console.log(composeWithValue(1)); //32

// function compose(callbacks) {
//   return function(value) {
//     for (let i = callbacks.length - 1; i >= 0; i--) {
//       value = callbacks[i](value);
//     }
//     return value;
//   };
// }

// **************** Homework for Tue Jul 03 2018 ****************
// num of ways to make change
// kadanes
// find 3 largest num sum
// find closest value in BST

// function waysToMakeChange(amt, denoms) {
//   let ways = new Array(amt + 1).fill(0);
//   ways[0] = 1;
//   //create an array 0 - amt, ways to add up to each of these nums given denominations
//   //fill array with 0's, except index 0 which will be 1, only 1 way to get 0
//   //then loop through to look at how many times a coin can fit in current idx;
//   //then we'll return the last idx b/c that should group together all ways
//   for (let i = 0; i < denoms.length; i++) {
//     let denom = denoms[i];
//     for (let j = 1; j < ways.length; j++) {
//       if (denom <= j) ways[j] += ways[j - denom];
//     }
//     console.log(ways);
//   }
//   console.log(ways[amt]);
// }

// // waysToMakeChange(10, [1, 5, 10, 25]); //4
// // waysToMakeChange(5, [1, 5, 10, 25]); //2
// //  0, 1, 2, 3, 4, 5
// // [1, 0, 0, 0, 0, 0];
// /*
//   denom 1 | j 1
//     +  +  +  +  +  +
//     0  0  0  0  0  +

// */

// function kadanesMaxSum(arr) {
//   //want to keep track of total
//   //iterate through and add to total
//   //if total < current num, then we can drop the total and update with curr num
//   //then return current num at the end
//   let maxSoFar = arr[0];
//   let maxTotal = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     maxSoFar = Math.max(maxSoFar + arr[i], arr[i]);
//     maxTotal = Math.max(maxTotal, maxSoFar);
//   }
//   console.log(maxTotal);
// }

// // ex [1, 2, 3, 4, 5, -15, 5] | maxSoFar 15 -15 => 0 + 5 then itll thnk 5 is max
// //need maxTotal
// // kadanesMaxSum([1, 2, 3, 4, 5, -15, 5]);

// function threeNumSum(arr, target) {
//   //first, sort the array
//   //then have a pointer in the left right and adjacent to left
//   //this will only need 1 loop b/c we're using pointers
//   //once we've found the correct target, we return
//   let combinations = [];
//   arr.sort((a, b) => a - b); //smallest to largest
//   for (let i = 0; i < arr.length; i++) {
//     let left = i + 1;
//     let right = arr.length - 1;
//     while (left < right) {
//       let total = arr[left] + arr[i] + arr[right];
//       if (target > total) {
//         left++;
//       } else if (target < total) {
//         right--;
//       } else if (target === total) {
//         combinations.push([arr[left], arr[i], arr[right]]);
//         left++;
//       }
//     }
//   }
//   console.log(combinations);
// }

// // threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

// function findClosest(tree, target) {
//   // return closestHelper(tree, target, Infinity);
//   let closest = tree.value;
//   while (tree !== null) {
//     let diff = Math.abs(target - closest);
//     if (Math.abs(tree.value - target) < diff) closest = tree.value;

//     if (target < tree.value) tree = tree.left;
//     else if (target > tree.value) tree = tree.right;
//     else break;
//   }
//   return closest;
// }

// /*  6 target
//     5 tree
//   3   9
// */

// //tree, tree.left, tree.right, .value and update closest if difference is smaller
// //then we move left or right depending on difference

// // **************** Homework for Tue Jul 03 2018 ****************
// // [ Question {name: 'Bubble Sort',learned: true,level: 'easy',source: 'AE',type: 'sorting' },
// //   Question {name: 'Find 3 Largest Num Sum',learned: true,level: 'easy',source: 'AE',type: 'search' },
// //   Question {name: 'trap rain water',learned: true,level: '',source: 'bloomberg',type: '' },
// //   Question {name: 'Invert Binary Tree',learned: true,level: 'medium',source: 'AE',type: 'BT' },
// //   Question {name: 'Palindrome Check',learned: true,level: 'easy',source: 'AE',type: 'string' } ]

// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i - 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = temp;
//         isSorted = false;
//       }
//     }
//   }
//   console.log(arr);
// }

// // bubbleSort([4, 123, 125, 1, 51, 21, 2, 11, 1, 21]);

// //have an array to hold 3 numbers,
// //look at each number (searching)
// //compare with numbers we stored if num is bigger, add to the end and shift everything up (sorting)
// //[0, 1, 2]
// //[18, 141, 541]
// //[141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7] => [18,141,541]
// //duplicates, negatives, unsorted => no binary search

// function largestNumSum(arr) {
//   let largestThree = [null, null, null];
//   for (let num of arr) {
//     findLargest(largestThree, num);
//   }
//   console.log(largestThree);
// }

// function findLargest(largestThree, num) {
//   if (largestThree[2] === null || num > largestThree[2]) {
//     shiftUpAndInsert(largestThree, num, 2);
//   } else if (largestThree[1] === null || num > largestThree[1]) {
//     shiftUpAndInsert(largestThree, num, 1);
//   } else if (largestThree[0] === null || num > largestThree[0]) {
//     shiftUpAndInsert(largestThree, num, 0);
//   }
// }

// function shiftUpAndInsert(largestThree, num, specifiedIdx) {
//   for (let i = 0; i <= specifiedIdx; i++) {
//     if (i === specifiedIdx) largestThree[specifiedIdx] = num;
//     else largestThree[i] = largestThree[i + 1];
//   }
// }

// // largestNumSum([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]); // [18,141,541]

// // landscape [0, 8, 0, 0, 5, 0, 0, 10,  0,  0,  1,  1,  0,  3]
// // leftMax   [0, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10]   min
// // rightMax  [10, 10, 10, 10, 10, 10,  10, 10,  3,  3,  3,  3, 3,  3]
// // minHeight [0, 8, 8, 8, 8, 8, 8, 10,  3,  3,  3,  3,  3,  3] Math.min(leftMax[i], rightmax[i])
// // trapped   [0, 0, 8, 8, 3, 8, 8, 0, 3, 3, 2, 2, 3, 0]

// function trapRain(landscapes) {
//   let leftMaxes = [];
//   let leftMax = 0;
//   for (let i = 0; i < landscapes.length; i++) {
//     if (landscapes[i] > leftMax) {
//       leftMax = landscapes[i];
//     }
//     leftMaxes.push(leftMax);
//   }
//   console.log("leftMaxes: ", leftMaxes);

//   let rightMaxes = [];
//   let rightMax = 0;
//   for (let j = landscapes.length - 1; j >= 0; j--) {
//     if (landscapes[j] > rightMax) {
//       rightMax = landscapes[j];
//     }
//     rightMaxes[j] = rightMax;
//   }
//   console.log("rightMaxes: ", rightMaxes);

//   let trapped = 0;
//   for (let k = 0; k < landscapes.length; k++) {
//     let column = landscapes[k];
//     let minHeight = Math.min(leftMaxes[k], rightMaxes[k]);
//     if (column < minHeight) trapped += minHeight - column;
//   }

//   console.log("trapped: ", trapped);
// }
// // trapRain([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

// /*
//       7
//     5   10
//   2  3    15

//       7
//    10    5
//     15  3  2

//   Queue: [7,5,10,2,3,15]

// */

// //given a tree, we want to look at each child
// //then swap left and rights
// //then look and their children too
// //repeat -> suggests a while loop

// function invertBinaryTree(tree) {
//   let queue = [tree];
//   while (queue.length > 0) {
//     let node = queue.shift(); //b/c is a queue
//     if (node !== null) {
//       queue.push(node.left); //add its children to queue
//       queue.push(node.right); //add its children to queue
//       swapLeftAndRight(node);
//     }
//   }
// }

// function swapLeftAndRight(node) {
//   let left = node.left;
//   node.left = node.right;
//   node.right = left;
// }

// /* 'tacocat'
//     tacocat => true
//    'booger'
//    b    r => false
//     */

// function palindromeCheck(str) {
//   let left = 0;
//   // let right = str.length - left - 1; //primitive => not dynamic
//   while (left <= str.length - 1 - left) {
//     if (str[left] !== str[str.length - 1 - left]) return false;
//     left++;
//   }
//   return true;
// }

// // console.log(palindromeCheck("tacocat"));

// // **************** tricks for Wed Jul 04 2018 ****************
// // [ Question {name: 'shift up nums + add val at specific idx',learned: true,level: '',source: null,type: null },
// // Question {name: 'reverse linked list',learned: true,level: '',source: null,type: null },
// // Question {name: 'return fn that excutes callbacks on input',learned: true,level: '',source: null,type: null },
// // Question {name: 'delete linked list pointer',learned: true,level: '',source: null,type: null },
// // Question {name: 'bubble sort',learned: true,level: '',source: null,type: null },
// // Question {name: 'shift array up by 1',learned: true,level: '',source: null,type: null } ]

// function shiftUpAndInsert(arr, insertVal, idx) {
//   for (let i = 0; i <= idx; i++) {
//     if (i === idx) arr[i] = insertVal;
//     //insert into desired spot
//     else arr[i] = arr[i + 1]; //shift nums up by 1
//   }
// }

// //1 - 2 - 3 - 4 -> 5 <- 5

// //reverse the LL and make a cycle
// function reverseLL(head) {
//   //this should work, need to confirm
//   let lastNode = head;
//   while (head) {
//     let formerNext = head.next;
//     head.next = lastNode;
//     lastNode = head;
//     head = formerNext;
//   }
//   return lastNode;
// }

// function reverseLLRecur(head) {
//   if (head.next === null || head === null) return head; //head.next === null is to quit at the end
//   let formerHead = reverseLLRecur(head.next);
//   head.next.next = head;
//   head.next = null;
//   return formerHead; //it actually only reaches this 1 time
// }

// function funcProgramming(callbacks) {
//   return function(input) {
//     for (let i = callbacks.length - 1; i >= 0; i--) {
//       input = callbacks[i](input);
//     }
//     return input;
//   };
// }

// function deleteLLPointer(node) {
//   if (node === null) return node;
//   node.value = node.next.value;
//   node.next = node.next.next;
// }

// function bubbleSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }

// function shiftUpBy1(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (i === arr.length - 1) arr.pop();
//     else arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// }

// // shiftUpBy1([12, 3, 123, 1]);

// // **************** Homework for Thu Jul 05 2018 ****************
// // [ Question {name: 'memo calculation',learned: true },
// //   Question {name: 'shift up nums + add val at specific idx',learned: true },
// //   Question {name: 'shift up nums + add val at specific idx',learned: true },
// //   Question {name: 'binary search',learned: true },
// //   Question {name: 'add nums by array back to front ',learned: true } ]

// function memoCalculation(arr, target) {
//   //store index of num or true,
//   let set = {};
//   for (let i = 0; i < arr.length; i++) {
//     let diff = Math.abs(arr[i] - target);
//     console.log("diff: ", diff);
//     if (!set[diff]) set[arr[i]] = true;
//     else console.log([arr[i], diff]);
//   }
//   console.log(set);
//   // console.log([]);
// }

// // memoCalculation([1, 2, 3, 4, 5, 6], 9);
// // memoCalculation([1, 2, 3, 4, 5, 6], 11);

// // hashset {} to store unique values;

// function shiftUpAndAdd(arr, insertVal, specificIdx) {
//   for (let i = 0; i <= specificIdx; i++) {
//     //specificIdx off by 1 like arr.length;
//     if (i === specificIdx) arr[specificIdx] = insertVal;
//     else arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// }

// // shiftUpAndAdd([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10000000, 5);

// function shiftUp(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) arr[i] = 123123123123;
//     else arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// }

// // shiftUp([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function binarySearch(arr, target) {
//   //template 1
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return console.log(mid);
//     else if (target > arr[mid]) left = mid + 1;
//     else if (target < arr[mid]) right = mid - 1;
//   }
//   return console.log("didi not match");
// }

// // binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3); //3
// // binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5); //4
// // binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); //4

// function addZerosToBack(arr) {
//   let zeroCounter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[zeroCounter++] = arr[i];
//   }
//   while (zeroCounter < arr.length) {
//     arr[zeroCounter++] = 0;
//   }
//   console.log(arr);
// }

// // addZerosToBack([0, 0, 0, 0, 0, 0, 1, 2, 31, 23, 12, 2]);

// // STILL NEED TO FIGURE OUT BEST WAY TO TAKES VALUES OUT OF AN OBJ

// // **************** Homework for Thu Jul 05 2018 ****************
// // [ Question {name: 'reverse integer',learned: true,level: '',source: 'bloomberg',type: '' },
// //   Question {name: 'move zeros',learned: true,level: '',source: 'bloomberg',type: 'array' },
// //   Question {name: 'trap rain water',learned: true,level: '',source: 'bloomberg',type: '' },
// //   Question {name: 'min stack',learned: true,level: '',source: 'bloomberg',type: 'stack' } ]

// function reverseInt(num) {
//   let reversed = 0;
//   while (num !== 0) {
//     let onesPlace = num % 10;
//     num = Math.floor(num / 10);
//     reversed = reversed * 10 + onesPlace;
//   }
//   console.log(reversed);
// }

// // reverseInt(987654);

// function moveZeros(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) arr[count++] = arr[i];
//   }

//   while (count < arr.length) {
//     arr[count++] = 0;
//   }
//   console.log(arr);
// }

// // moveZeros([0, 0, 0, 0, 0, 0, 1231, 41, 24, 124, 124]);

// function shiftUp(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) arr[i] = "dont need this index, can pop";
//     else arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// }

// // shiftUp([1, 123, 12, 312, 31, 231, 23, 123, 123, 1]);

// function trapRains(landscapes) {
//   let maxLefts = [];
//   let maxLeftTracker = landscapes[0];
//   for (let i = 0; i < landscapes.length; i++) {
//     let column = landscapes[i];
//     if (column > maxLeftTracker) maxLeftTracker = column;
//     maxLefts.push(maxLeftTracker);
//   }

//   let maxRights = [];
//   let maxRight = landscapes[landscapes.length - 1];
//   for (let k = landscapes.length - 1; k >= 0; k--) {
//     let column = landscapes[k];
//     if (maxRight < column) maxRight = column;
//     maxRights[k] = maxRight;
//   }

//   let totalRain = 0;
//   for (let j = 0; j < landscapes.length; j++) {
//     let minHeight = Math.min(maxLefts[j], maxRights[j]);
//     let column = landscapes[j];
//     if (column < minHeight) totalRain += minHeight - column;
//   }
//   console.log(totalRain);
// }

// // trapRains([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]); //48

// class MinStack {
//   constructor() {
//     this.stack = [];
//   }
//   push(val) {
//     let min = this.min();
//     this.stack.push({
//       value: val,
//       min: Math.min(min !== undefined ? min : Infinity, val)
//     });
//     return this;
//   }

//   pop() {
//     if (this.stack.length > 0) {
//       let item = this.stack.pop();
//       return item.value;
//     }
//   }

//   min() {
//     if (this.stack.length > 0) {
//       let item = this.stack[this.stack.length - 1]; //return last item
//       return item.min;
//     }
//   }
// }

// // **************** Homework for Fri Jul 06 2018 ****************
// // Question {name: 'most traded',learned: true,level: '',source: 'bloomberg',type: '' }
// // Question {name: 'linked list cycle',learned: true,level: '',source: 'bloomberg',type: 'LL' }
// // Question {name: 'reverse integer',learned: true,level: '',source: 'bloomberg',type: '' }
// // Question {name: 'reverseLinkedList',learned: true,level: '',source: 'bloomberg',type: 'LL' }
// // Question {name: 'add nums of 2 linked list',learned: true,level: '',source: 'bloomberg',type: 'LL' }
// // Question {name: 'first unique character in a string',learned: true,level: '',source: 'bloomberg',type: 'string' }

// function reversedLL(head) {
//   let lastNode = null;
//   while (head) {
//     let trueNext = head.next;
//     head.next = lastNode;
//     lastNode = head;
//     head = trueNext;
//   }
//   return lastNode;
// }

// function LLcycle(head) {
//   if (!head) return head;

//   let slow = head;
//   let fast = head;
//   while (slow.next && fast.next && fast.next.next) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) break; // found loop
//   }
//   //now find first node

//   //this is a check to see it didnt exit b/c there was no loop
//   if (!slow || slow !== fast) return "there was no loop ";

//   slow = head;
//   while (slow !== fast) {
//     slow.next;
//     fast.next;
//   }
//   return fast;
// }

// function addLLs(headA, headB) {
//   let digits1 = [1, 2, 9];
//   let digits2 = [2, 1];
//   // while (headA) {
//   //   digits1.push(headA);
//   //   headA = headA.next;
//   // }
//   // while (headB) {
//   //   digits2.push(headB);
//   //   headB = headB.next;
//   // }

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
//       carry = 1;
//     } else {
//       carry = 0;
//     }

//     total = sum + total;
//     console.log("total: ", total);
//     lastIdx1--;
//     lastIdx2--;
//   }
//   console.log(total.split("").map(num => parseInt(num)));
// }

// // addLLs();

// // **************** Homework for Fri Jul 06 2018 ****************
// // Question {name: 'selection sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'shift array up by 1',learned: true,level: '',source: null,type: null }
// // Question {name: 'binary search',learned: true,level: '',source: null,type: null }
// // Question {name: 'insertion sort',learned: true,level: '',source: null,type: null }

// // function selectionSort(arr) {
// //   let currIdx = 0;
// //   while (currIdx < arr.length - 1) {
// //     let smallestIdx = currIdx;
// //     for (let i = currIdx + 1; i < arr.length; i++) {
// //       if (arr[smallestIdx] > arr[i]) smallestIdx = i;
// //     }

// //     // swap(smallestIdx, currIdx, arr)
// //     let temp = arr[smallestIdx];
// //     arr[smallestIdx] = arr[currIdx];
// //     arr[currIdx] = temp;
// //     currIdx++;
// //   }

// //   console.log(arr);
// // }

// function selectionSort(arr) {
//   let currIdx = 0;
//   while (currIdx < arr.length - 1) {
//     let smallestIdx = currIdx;
//     for (let i = currIdx + 1; i < arr.length; i++) {
//       if (arr[smallestIdx] > arr[i]) smallestIdx = i;
//     }
//     let temp = arr[smallestIdx];
//     arr[smallestIdx] = arr[currIdx];
//     arr[currIdx] = temp;
//     currIdx++;
//   }
//   console.log(arr);
// }

// // selectionSort([1, 2, 3, 52, 3, 23, 2, 3, 2, 14, 1, 2, 3, 1, 10, 0, 0, 4]);

// function shiftUp(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== arr.length - 1) arr[i] = arr[i + 1];
//     else arr[i] = "jsaldfkjsalkdfjask";
//   }
//   console.log(arr);
// }

// // shiftUp([1, 2, 3, 4, 5, 6]);

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) left = mid + 1;
//     else if (arr[mid] > target) right = mid - 1;
//   }
//   return -1;
// }

// // console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 14, 15], 13)); //12 off by 1 b/c 0 index

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j >= 0 && arr[j] < arr[j - 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = temp;
//       j--;
//     }
//   }
//   console.log(arr);
// }

// // insertionSort([12, 212, 312, 124, 512, 6, 7, 14, 15]);

// // **************** Homework for Sat Jul 07 2018 ****************
// // Question {name: 'Kadanes Algo - Max Sum',learned: true,level: 'medium',source: 'AE',type: null }
// // Question {name: 'Remove kth Node from End',learned: true,level: 'medium',source: 'AE',type: 'LL' }
// // Question {name: 'first unique character in a string',learned: true,level: '',source: 'bloomberg',type: 'string' }
// // Question {name: 'Smallest Difference',learned: true,level: 'medium',source: 'AE',type: 'array' }
// // Question {name: 'Number of Ways to Make Change',learned: true,level: 'medium',source: 'AE',type: 'DP' }

// function kadaneMaxSum(arr) {
//   let maxSoFar = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     maxSoFar = Math.max(num, maxSoFar + num);
//     max = Math.max(max, maxSoFar);
//   }
//   console.log("max: ", max);
// }

// // kadaneMaxSum([1, 2, 3, 4, -5]);

// function removeKthNode(head, k) {
//   if (!head) return head;
//   let kth = head;
//   let end = head;
//   //could also use a for loop to make new var
//   while (k > 0) {
//     //fast forwad kth node
//     end = end.next;
//     k--;
//   }

//   while (end.next !== null) {
//     //if next is null, you've reached the end
//     //not when the current node is null;
//     //would otherwise be off by 1
//     end = end.next;
//     kth = kth.next;
//   }
//   return kth;
// }

// // function smallestDiff(arr1, arr2) {
// //   arr1.sort((a, b) => a - b);
// //   arr2.sort((a, b) => a - b);
// //   let i = 0;
// //   let j = 0;
// //   let smallest = Math.abs(arr1[i] - arr2[j]);
// //   let pair = [];
// //   while (i < arr1.length && j < arr2.length) {
// //     let currCalc = Math.abs(arr1[i] - arr2[j]);
// //     if (currCalc < smallest) {
// //       smallest = currCalc;
// //       pair = [arr1[i], arr2[j]];
// //     }
// //     if (arr1[i] > arr2[j]) j++;
// //     else if (arr1[i] < arr2[j]) i++;
// //     else break;
// //   }
// //   console.log(pair);
// // }

// function smallestDiff(a1, a2) {
//   //first sort the arrays so we'lll be able to use pointers - better than 2 for loops
//   //then keep track of current calculation
//   //use a while loop to check that before it gets to the end,
//   //if there are smaller compbinations, record it
//   a1.sort((a, b) => a - b);
//   a2.sort((a, b) => a - b);
//   let i = 0;
//   let j = 0;
//   let smallest = Math.abs(a1[i] - a2[j]);
//   let pair = [];
//   while (i < a1.length && j < a2.length) {
//     let calc = Math.abs(a1[i] - a2[j]);
//     if (calc < smallest) {
//       smallest = calc;
//       pair = [a1[i], a2[j]];
//     }
//     if (a1[i] < a2[j]) i++;
//     else if (a1[i] > a2[j]) j++;
//     else break;
//   }
//   console.log(pair);
// }

// // smallestDiff([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]); //28, 26

// function nWayToAmt(amt, denoms) {
//   let ways = new Array(amt + 1).fill(0);
//   ways[0] = 1;
//   for (let i = 0; i < denoms.length; i++) {
//     let denom = denoms[i];
//     for (let j = 1; j < ways.length; j++) {
//       console.log("ways: ", ways);
//       if (denom <= j) ways[j] += ways[j - denom];
//     }
//   }
//   console.log(ways[amt]);
// }

// // nWayToAmt(10, [1, 5, 10, 20]); //4

// // **************** Homework for Sun Jul 08 2018 ****************
// // Question {name: 'Find 3 Largest Num Sum',learned: true,level: 'easy',source: 'AE',type: 'search' }
// // Question {name: 'reverseLinkedList',learned: true,level: '',source: 'bloomberg',type: 'LL' }
// // Question {name: 'min stack',learned: true,level: '',source: 'bloomberg',type: 'stack' }
// // Question {name: 'Find loop',learned: true,level: 'hard',source: 'AE',type: 'LL' }
// // Question {name: 'most traded',learned: true,level: '',source: 'bloomberg',type: '' }

// function threeLargestSum(arr) {
//   let largest = [null, null, null];
//   //brute force
//   //largest as a tracker, use an array [];
//   //then look at each number, and see if its larger than the items in our array
//   //if it is, then we'll shift everything up
//   //then by the end, we'll have a sorted array;
//   //time: O(n) || space: O(1);
//   for (let num of arr) {
//     if (largest[2] === null || num > largest[2]) {
//       shiftUpAndInsert(largest, num, 2);
//     } else if (largest[1] === null || num > largest[1]) {
//       shiftUpAndInsert(largest, num, 1);
//     } else if (largest[0] === null || num > largest[1]) {
//       shiftUpAndInsert(largest, num, 0);
//     }
//   }
//   console.log(largest);
// }

// function shiftUpAndInsert(arr, insertVal, specificIdx) {
//   for (let i = 0; i <= specificIdx; i++) {
//     if (i === specificIdx) arr[i] = insertVal;
//     else arr[i] = arr[i + 1];
//   }
// }

// // threeLargestSum([12, 123, 63465, 345634, 34563, 3453, 234222]); //[ 63465, 234222, 345634 ]

// function reverseLL(head) {
//   let prevNode = null;
//   while (head) {
//     let tempNextHolder = head.next;
//     head.next = prevNode;
//     prevNode = head;
//     head = tempNextHolder;
//   }
//   console.log(prevNode);
// }

// class LLNode {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//   }
// }

// class LL {
//   constructor() {
//     this.head = null;
//   }
//   add(val) {
//     let formerHead = this.head;
//     let newNode = new LLNode(val);
//     this.head = newNode;
//     if (formerHead) this.head.next = formerHead;
//     return this;
//   }
//   print() {
//     let values = [];
//     let currNode = this.head;
//     while (currNode) {
//       values.push(currNode.value);
//       currNode = currNode.next;
//     }
//     console.log(values);
//     return values;
//   }
// }

// let testLL = new LL()
//   .add(5)
//   .add(4)
//   .add(3)
//   .add(2)
//   .add(1);

// function reversedLLRecur(head) {
//   if (head.next === null || head === null) return head;
//   let formerHead = reverseLLRecur(head.next);
//   head.next.next = head; //this comes from if stmt
//   head.next = null; //used to catch the if stmt
//   return formerHead;
// }
// // testLL.print();
// // console.log("recursive, optimal", reversedLLRecur(testLL.head));
// // console.log(reverseLL(testLL.head));

// // 1 - 2 - 3 - 4 - 5 -> null
// //                  5.next = null.next = 5
// //first build a callstack til 5
// //then hold onto reference of formerHead

// class MinStack2 {
//   constructor() {
//     this.stack = [];
//   }

//   min() {
//     if (this.stack.length > 0) {
//       let item = this.stack[this.stack.length - 1];
//       return item.min;
//     }
//   }

//   add(val) {
//     let min = this.min();
//     this.stack.push({
//       value: val,
//       min: Math.min(min !== undefined ? min : Infinity, val)
//     });
//   }
//   pop() {
//     if (this.stack.length > 0) {
//       let item = this.stack[this.stack.length - 1];
//       return item.value;
//     }
//   }
// }

// function findLLloop(list) {
//   if (!list) return list;

//   let fast = list;
//   let slow = list;
//   while (slow.next && fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next;
//     if (slow === fast) break;
//   }

//   if (!slow || slow !== fast) return "no looop~";
//   slow = list;
//   while (slow !== fast) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return fast;
// }

// class MostTradedStocks {
//   constructor() {
//     this.tradeLogs = {};
//   }

//   add(ticker, vol) {
//     if (!this.tradeLogs[ticker]) this.tradeLogs[ticker] = vol;
//     else this.tradeLogs[ticker] += vol;
//   }

//   print(n) {
//     let uniqueTickers = [];
//     for (let ticker in this.tradeLogs) {
//       uniqueTickers.push(ticker, this.tradeLogs[ticker]);
//     }
//     uniqueTickers.sort((a, b) => b[1] - a[1]);
//     console.log(uniqueTickers.slice(0, n));
//   }
// }

// **************** Homework for Tue Jul 10 2018 ****************
// Question {name: 'third maximum number',learned: true,level: '',source: 'bbg',type: 'array' }
// Question {name: 'merge sorted array',learned: true,level: '',source: 'bbg',type: 'array' }
// Question {name: 'invert binary tree',learned: true,level: '',source: 'bbg',type: 'BST' }
// Question {name: 'valid anagram',learned: true,level: '',source: 'bbg',type: 'string' }
// Question {name: 'palindrome linked list',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'plus one linked list',learned: true,level: '',source: 'bbg',type: 'LL' }

function thirdMaxNum(arr) {
  let threeMaxes = [null, null, null];
  for (let num of arr) {
    addMaxes(threeMaxes, num);
  }
  if (arr.length >= 3) {
    return threeMaxes[0]; //return 3rd largest
  } else if (arr.length === 2) {
    return threeMaxes[1]; //return 2nd largest
  } else {
    return threeMaxes[0]; // return only number
  }
}

function addMaxes(threeMaxes, num) {
  if (threeMaxes[2] === null || threeMaxes[2] < num) {
    shiftUpAddIn(threeMaxes, num, 2);
  } else if (threeMaxes[1] === null || threeMaxes[1] < num) {
    if (num !== threeMaxes[2]) shiftUpAddIn(threeMaxes, num, 1);
  } else if (threeMaxes[0] === null || threeMaxes[0] < num) {
    if (num !== threeMaxes[1]) shiftUpAddIn(threeMaxes, num, 0);
  }
}
function shiftUpAddIn(threeMaxes, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) threeMaxes[i] = num;
    else threeMaxes[i] = threeMaxes[i + 1];
  }
}

// console.log(thirdMaxNum([1, 2, 3, 7, 8])); //3
// console.log(thirdMaxNum([2, 3])); //2
// console.log(thirdMaxNum([3, 2, 1, 2])); //1

function mergeSortedArr(arr1, m, arr2, n) {
  let i = m + n - 1;
  let idx1 = m - 1;
  let idx2 = n - 1;
  while (idx1 > -1 && idx2 > -1) {
    if (arr1[idx1] > arr2[idx2] || !arr2[idx2]) {
      arr1[i] = arr1[idx1];
      idx1--;
    } else {
      arr1[i] = arr2[idx2];
      idx2--;
    }
    i--;
  }
  console.log(arr1);
}

// mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); //[1,2,2,3,5,6]

function invertBST(tree) {
  let queue = [tree];
  while (queue.length > 0) {
    let currNode = queue.shift();
    if (currNode !== null) {
      let tempLeft = currNode.left;
      currNode.left = currNode.right;
      currNode.right = tempLeft;

      queue.push(currNode.left);
      queue.push(currNode.right);
    }
  }
}

function validAnagram(str, anagram) {
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
    else hashmap[anChar]--;
  }
  return true;
}

function palinLinkedList(head) {
  if (!head === null || !head.next === null) return true; //its a palindrome if there's no value
  //find midpoint,
  //cut the linked list in half
  //go through each node at the same time

  let mid = findMid(head); //finds the point before palindrome starts
  let rightNode = revLL(mid.next);
  mid.next = null;
  let leftNode = head;
  while (leftNode && rightNode) {
    //as long as they're not null,
    //if they weren't equal, it would skip to true => leftNode !== rightNode is not right
    if (leftNode.value !== rightNode.value) return false;
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return true;
}

function findMid(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

function revLL(head) {
  if (head === null || head.next === null) return head;
  let tempHead = revLL(head.next);
  head.next.next = head;
  head.next = null;
  return tempHead;
}

function addOneToLL(head) {
  let digits = [1, 9, 9];
  let getValuesCopy = head; //b.c i dont want to lose the reference to head;
  // while (getValuesCopy) {
  //   digits.push(getValuesCopy.value);
  //   getValuesCopy = getValuesCopy.next;
  // }
  let total = "";
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) digits[i] += 1;
    let sum = digits[i] + carry;
    if (sum > 9) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    total = sum + total;
  }

  console.log(total.split("").map(num => parseInt(num)));
}

// addOneToLL();

class LLNode {
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
    let newNode = new LLNode(val);
    this.head = newNode;
    if (formerHead) this.head.next = formerHead;
    return this;
  }
  print() {
    let values = [];
    let node = this.head;
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }
}

let testLLForPlusOne = new LL()
  .add(9)
  .add(9)
  .add(1);

// testLLForPlusOne.print();

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
