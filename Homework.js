let { homeworkTonight, tricks } = require("./HwHelper");

// homeworkTonight.genQuestions(5);
// console.log(homeworkTonight._questions);
// homeworkTonight.genQuestions(6, "BST", "AE");
// homeworkTonight.genQuestions(6, "all", "bbg");
// tricks.genQuestions(5);

// // **************** Homework for Fri Aug 24 2018 ****************
// // Question {name: 'selection sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'return fn that excutes callbacks on input',learned: true,level: '',source: null,type: null }
// // Question {name: 'binary search',learned: true,level: '',source: null,type: null }
// // Question {name: 'delete linked list pointer',learned: true,level: '',source: null,type: null }
// // Question {name: 'shift up nums + add val at specific idx',learned: true,level: '',source: null,type: null }

// const selectionSort = arr => {
//   let currentIdx = 0;
//   for (let i = currentIdx + 1; i < arr.length; i++) {
//     let smallestIdx = currentIdx;
//     let j = i;
//     while (j < arr.length) {
//       if (arr[j] < arr[smallestIdx]) {
//         smallestIdx = j;
//       }
//       j += 1;
//     }
//     let temp = arr[smallestIdx];
//     arr[smallestIdx] = arr[currentIdx];
//     arr[currentIdx] = temp;
//     currentIdx += 1;
//   }
//   return arr;
// };

// // console.log(selectionSort([3, 2, 1]));
// // console.log(selectionSort([3, 23, 4, 5, 1, 2, 6, 1]));

// const compose = callbacks => {
//   return input => {
//     for (let i = callbacks.length - 1; i >= 0; i--) {
//       input = callbacks[i](input);
//     }
//     return input;
//   };
// };

// const binarySearch = (arr, target) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     else if (target < arr[mid]) right = mid - 1;
//     else if (target > arr[mid]) left = mid + 1;
//   }
//   return -1;
// };

// // console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)); //6

// const deleteLinkedListNode = node => {
//   if (node.value === null) return node;

//   node.value = node.next.value;
//   node.next = node.next.next;
// };

// const shiftNumsUpToIdx = (arr, idx, val) => {
//   for (let i = 0; i <= idx; i++) {
//     if (i === idx) arr[i] = val;
//     else arr[i] = arr[i + 1];
//   }
//   console.log(arr);
// };

// // console.log("shiftNumsUpToIdx: ", shiftNumsUpToIdx([1, 2, 3], 2, 5)); //[2,3,5]

// const shiftNumsBackToIdx = (arr, idx, val) => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (i === idx) arr[i] = val;
//     else arr[i] = arr[i - 1];
//   }
//   console.log(arr);
// };
// // console.log("shiftNumsBackToIdx: ", shiftNumsBackToIdx([1, 2, 3], 0, 5)); //[5,1,2]

// // Question {name: 'bubble sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'insertion sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'memo calculation',learned: true,level: '',source: null,type: null }
// // Question {name: 'swap arr spaces',learned: true,level: '',source: null,type: null }

// const bubbleSort = arr => {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// };

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // console.log(bubbleSort([4, 3, 2, 1, 2, 123, 1, 31]));

// const insertionSort = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i;
//     while (j >= 0 && arr[j] < arr[j - 1]) {
//       swap(arr, j, j - 1);
//       j--;
//     }
//   }
//   return arr;
// };

// // console.log(insertionSort([4, 3, 2, 1, 1, 1, 2, 12]));

// const firstDuplicate = arr => {
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (seen[num]) return num;
//     else seen[num] = true;
//   }
// };

// // console.log(firstDuplicate([1, 2, 3, 4, 5, 6, 4]));

// const memoCalc = (arr, target) => {
//   let seen = {};
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let diff = target - num;
//     if (seen[diff]) return [num, diff];
//     else seen[num] = true;
//   }
// };

// // console.log(memoCalc([1, 2, 3, 4, 5], 4)); //[3,1]

// function swapArrSpaces(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// const moveZeros = arr => {
//   let currentIdx = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[currentIdx] = arr[i];
//       currentIdx++;
//     }
//   }
//   while (currentIdx < arr.length) {
//     arr[currentIdx] = 0;
//     currentIdx++;
//   }
//   return arr;
// };

// console.log(moveZeros([1, 2, 3, 0, 0, 4, 5])); //[ 1, 2, 3, 4, 5, 0, 0 ]

// // Question {name: 'bubble sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'shift array up by 1',learned: true,level: '',source: null,type: null }
// // Question {name: 'reverse linked list',learned: true,level: '',source: null,type: null }
// // Question {name: 'add nums by array back to front ',learned: true,level: '',source: null,type: null }

// function bubSort(arr) {
//   let isSorted = false;
//   while (!isSorted) {
//     isSorted = true;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swap(arr, i, i + 1);
//         isSorted = false;
//       }
//     }
//   }
//   return arr;
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// // console.log(bubSort([3, 2, 1]));

// function shiftNumsUpBy1(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   return arr;
// }

// // console.log(shiftNumsUpBy1([1, 2, 3])); //[2,3,3]

// function reverseLinkedList(head) {
//   let prevNode = head;
//   while (head) {
//     let temp = head.next;
//     head.next = prevNode;
//     prevNode = head;
//     head = temp;
//   }
//   return prevNode;
// }

// function reverseLinkedListRecur(head) {
//   if (head === null || head.next === null) return head;
//   let temp = reverseLinkedListRecur(head.next);
//   head.next.next = head;
//   head.next = null;
//   return head;
// }

// function addDigits(list1, list2) {
//   let lastDigit1 = list1.length - 1;
//   let lastDigit2 = list2.length - 1;
//   let carry = 0;
//   let total = "";
//   for (let i = Math.max(lastDigit1, lastDigit2); i >= 0; i--) {
//     let a = list1[lastDigit1] || 0;
//     let b = list2[lastDigit2] || 0;
//     let sum = a + b + carry;
//     if (sum > 9) {
//       carry = 1;
//       sum -= 10;
//     } else {
//       carry = 0;
//     }
//     total = sum + total;
//     lastDigit1--;
//     lastDigit2--;
//   }
//   return total.split("");
// }

// // console.log(addDigits([1, 2, 3], [1, 2, 7]));

// // **************** Homework for Fri Aug 24 2018 ****************
// // Question {name: 'Balanced Brackets',learned: true,level: 'medium',source: 'AE',type: 'stacks' }
// // Question {name: 'first unique character in a string',learned: true,level: '',source: 'bbg',type: 'string' }
// // Question {name: 'reverse integer',learned: true,level: '',source: 'bbg',type: '' }
// // Question {name: 'Kadanes Algo - Max Sum',learned: true,level: 'medium',source: 'AE',type: null }

// const balancedBrackets = brackets => {
//   let stack = [];
//   let pair = { "}": "{", "]": "[", ")": "(" };
//   for (let i = 0; i < brackets.length; i++) {
//     let bracket = brackets[i];
//     let lastBracket = stack[stack.length - 1];
//     if (bracket === "]") {
//       if (lastBracket !== pair[bracket]) return false;
//       stack.pop();
//     } else if (bracket === "}") {
//       if (lastBracket !== pair[bracket]) return false;
//       stack.pop();
//     } else if (bracket === ")") {
//       if (lastBracket !== pair[bracket]) return false;
//       stack.pop();
//     } else {
//       stack.push(bracket);
//     }
//   }
//   return stack.length === 0;
// };

// // console.log(balancedBrackets("[{}()]")); //true
// // console.log(balancedBrackets("[{{}([[[{}]]])}]")); //true
// // console.log(balancedBrackets("[{}(]")); //false

// const oneUniqueChar = str => {
//   let seen = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) seen[char] += 1;
//     else seen[char] = 1;
//   }
//   return Object.keys(seen).filter(key => seen[key] === 1);
// };

// // console.log(oneUniqueChar("aaaabbbcddeee"));

// const reverseInt = int => {
//   let reverse = "";
//   while (int > 0) {
//     let onesPlace = int % 10;
//     int = Math.floor(int / 10);
//     reverse = reverse + onesPlace;
//   }
//   return reverse;
// };

// // console.log(reverseInt(123));
// // console.log(reverseInt(1234567));

// const maxSum = arr => {
//   let maxTotal = arr[0];
//   let maxSoFar = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     maxSoFar = Math.max(arr[i], maxSoFar + arr[i]);
//     maxTotal = Math.max(maxTotal, maxSoFar);
//   }
//   return maxTotal;
// };

// // console.log(maxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])); //19

// // **************** Homework for Sat Aug 25 2018 ****************
// // Question {name: 'selection sort',learned: true,level: '',source: null,type: null }
// // Question {name: 'return fn that excutes callbacks on input',learned: true,level: '',source: null,type: null }
// // Question {name: 'add nums by array back to front ',learned: true,level: '',source: null,type: null }

// const selectionSort = arr => {
//   let currentIdx = 0;
//   for (let i = currentIdx + 1; i < arr.length; i++) {
//     let smallestIdx = currentIdx;
//     let j = i;
//     while (j < arr.length) {
//       if (arr[j] < arr[smallestIdx]) {
//         smallestIdx = j;
//       }
//       j++;
//     }
//     let temp = arr[smallestIdx];
//     arr[smallestIdx] = arr[currentIdx];
//     arr[currentIdx] = temp;
//     currentIdx += 1;
//   }
//   return arr;
// };

// console.log(selectionSort([4, 3, 2, 1]));

// const compose = callbacks => {
//   return input => {
//     for (let i = callbacks.length - 1; i >= 0; i--) {
//       input = callbacks[i](input);
//     }
//     return input;
//   };
// };

// const addFromBack = (list1, list2) => {
//   let lastIdx1 = list1.length - 1;
//   let lastIdx2 = list2.length - 1;
//   let carry = 0;
//   let total = "";
//   for (let i = Math.max(lastIdx1, lastIdx2); i >= 0; i--) {
//     let a = list1[lastIdx1--] || 0;
//     let b = list2[lastIdx2--] || 0;
//     let sum = a + b + carry;

//     if (sum > 9) {
//       carry = 1;
//       sum -= 10;
//     } else {
//       carry = 0;
//     }
//     total = sum + total;
//   }
//   return total;
// };

// // console.log(addFromBack([1, 2, 3], [1, 2, 7]));

// Question {name: 'add nums of 2 linked list',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'min stack',learned: true,level: '',source: 'bbg',type: 'stack' }
// Question {name: 'Breath-First Search',learned: true,level: 'medium',source: 'AE',type: 'graphs' }
// Question {name: 'Three Number Sum',learned: true,level: 'medium',source: 'AE',type: 'array' }

// const addTwoLinkedLists = (list1, list2) => {
//   let digits1 = [];
//   while (list1) {
//     digits1.push(list1.value);
//     list1 = list1.next;
//   }
//   let digits2 = [];
//   while (list2) {
//     digits2.push(list2.value);
//     list2 = list2.next;
//   }
// };

class MinStack {
  constructor() {
    this._stack = [];
  }

  getLength() {
    return this._stack.length - 1;
  }

  add(val) {
    let min = this.min();
    this._stack.push({
      value: val,
      min: Math.min(min !== undefined ? min : Infinity, val)
    });
  }

  min() {
    if (!this.isEmpty()) {
      return this._stack[this.getLength()].min;
    }
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}

const preOrderBFS = (tree, arr) => {
  if (tree) {
    arr.push(tree.value);
    if (tree.left) preOrderBFS(tree.left, arr);
    if (tree.right) preOrderBFS(tree.right, arr);
  }
  return arr;
};

const inOrderBFS = (tree, arr) => {
  if (tree) {
    if (tree.left) inOrderBFS(tree.left, arr);
    arr.push(tree.value);
    if (tree.right) inOrderBFS(tree.right, arr);
  }
  return arr;
};

const postOrderBFS = (tree, arr) => {
  if (tree) {
    if (tree.left) postOrderBFS(tree.left, arr);
    if (tree.right) postOrderBFS(tree.right, arr);
    arr.push(tree.value);
  }
  return arr;
};

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

// **************** Homework for Mon Aug 27 2018 ****************
// {name: 'Find Closest Value in BST',learned: true,level: 'easy',source: 'AE',type: 'BST' }
// {name: 'Number of Ways to Make Change',learned: true,level: 'medium',source: 'AE',type: 'DP' }
//// {name: 'Invert Binary Tree',learned: true,level: 'medium',source: 'AE',type: 'BT' }
//// {name: 'Selection Sort',learned: true,level: 'easy',source: 'AE',type: 'sorting' }
// {name: 'Water Area / Trap Rain',learned: true,level: 'hard',source: 'AE',type: 'DP' }

//time: O(log n) - b/c you can always remove half of results
//space: O(1) - only 1 constant
const findClosestValue = (node, target) => {
  let closest = node.value;
  while (node) {
    let diff = target - closest;
    if (target - node.value < target - closest) {
      closest = node.value;
    }

    if (node.value === target) {
      return target;
    } else if (node.value < target) {
      node = node.right;
    } else if (node.value > target) {
      node = node.left;
    }
  }
  return closest;
};

//time: O(n * d)
//space: O(n) - based on target
const numWaysForChange = (target, denominations) => {
  let ways = new Array(target + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    let denom = denominations[i];
    for (let j = 1; j <= target; j++) {
      if (denom <= j) {
        ways[j] += ways[j - denom];
      }
    }
  }
  return ways[target];
};

// console.log(numWaysForChange(10, [1, 5, 10, 25])); //4

//time: O(n) - several passes but never compounds
//space: O(n) - 3 arrays but thats constant
const trapWater = landscape => {
  let leftMaxes = [];
  let maxLeft = 0;
  for (let i = 0; i < landscape.length; i++) {
    let columnHeight = landscape[i];
    if (columnHeight > maxLeft) maxLeft = columnHeight;
    leftMaxes[i] = maxLeft;
  }
  let rightMaxes = [];
  let maxRight = 0;
  for (let j = landscape.length - 1; j >= 0; j--) {
    let columnHeight = landscape[j];
    if (columnHeight > maxRight) maxRight = columnHeight;
    rightMaxes[j] = maxRight;
  }

  // console.log("leftMaxes: ", leftMaxes);
  // console.log("rightMaxes: ", rightMaxes);
  let totalRain = 0;
  for (let k = 0; k < landscape.length; k++) {
    let minColumn = Math.min(leftMaxes[k], rightMaxes[k]);
    if (landscape[k] < minColumn) {
      totalRain += minColumn - landscape[k];
    }
  }
  return totalRain;
};

// console.log(trapWater([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));

// **************** Homework for Tue Aug 28 2018 ****************
// Question {name: 'move zeros',learned: true,level: '',source: 'bbg',type: 'array' }
// Question {name: 'min stack',learned: true,level: '',source: 'bbg',type: 'stack' }
// Question {name: 'add nums of 2 linked list',learned: true,level: '',source: 'bbg',type: 'LL' }

//time: O(n) only need one pass
const moveZeros = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count += 1;
    }
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  return arr;
};

// console.log(moveZeros([11, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]));

//time: O(1) look up time for min value;
//space: O(n) - depends how many values you put in
class MinStack2 {
  cosntructor() {
    this._stack = [];
  }
  add(val) {
    let min = this.min();
    this._stack.push({
      value: val,
      min: Math.min(min === undefined ? Infinity : min, val)
    });
  }

  pop() {
    if (this._stack.length > 0) {
      let item = this._stack.pop();
      return item.value;
    }
  }
  min() {
    return this._stack[this._stack.length - 1].min;
  }
}

//time: O(n * m) - trying out each denomination for each number
//space: O(n) - n being the target sum, we needed array as a tracker
const waysForChange = (n, denominations) => {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    let denom = denominations[i];
    console.log(denom);
    for (let j = 1; j <= n; j++) {
      if (denom <= j) {
        ways[j] += ways[j - denom];
      }
    }
  }
  return ways[n];
};

// console.log(waysForChange(10, [1, 5, 10, 25]));

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

// **************** Homework for Tue Aug 28 2018 ****************
// Question {name: 'linked list cycle',learned: true,level: '',source: 'bbg',type: 'LL' }
// Question {name: 'getNumberOfIslands',learned: true,level: 'hard',source: 'pramp',type: 'graphs' }
// Question {name: 'flatten dictionary',learned: true,level: 'medium',source: 'pramp',type: 'object' }

//time: O(n) - going through entire linked list
const findLinkedListCycle = list => {
  let fast = list;
  let slow = list;
  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  return fast;
};

// const isOutOfBounds = (queue, rows, cols, x, y) => {
//   if (x >= 0 && x < rows && y >= 0 && y < cols) queue.push([x, y]);
// };

// const findLand = (matrix, rows, cols, x, y) => {
//   let queue = [[x, y]];
//   while (queue.length) {
//     let item = queue.shift();
//     let originalX = item[0];
//     let originalY = item[1];
//     if (matrix[originalX][originalY] === 1) {
//       matrix[originalX][originalY] = -1;
//       isOutOfBounds(queue, rows, cols, originalX - 1, originalY);
//       isOutOfBounds(queue, rows, cols, originalX + 1, originalY);
//       isOutOfBounds(queue, rows, cols, originalX, originalY - 1);
//       isOutOfBounds(queue, rows, cols, originalX, originalY + 1);
//     }
//   }
// };

// const getNumIsland = matrix => {
//   let counter = 0;
//   let x = matrix.length - 1;
//   let y = matrix[0].length - 1;
//   for (let i = 0; i < x; i++) {
//     for (let j = 0; j < y; j++) {
//       if (matrix[i][j] === 1) {
//         findLand(matrix, x, y, i, j);
//         counter++;
//       }
//     }
//   }
//   return counter;
// };

// console.log(
//   getNumIsland([
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 1, 1],
//     [1, 0, 0, 1, 0],
//     [0, 1, 1, 0, 0],
//     [1, 0, 1, 0, 1]
//   ])
// );


// **************** Homework for Thu Sep 06 2018 ****************
// Question {name: 'selection sort',learned: true,level: '',source: null,type: null }
// Question {name: 'binary search',learned: true,level: '',source: null,type: null }
// Question {name: 'bubble sort',learned: true,level: '',source: null,type: null }
// Question {name: 'delete linked list pointer',learned: true,level: '',source: null,type: null }
// Question {name: 'reverse linked list',learned: true,level: '',source: null,type: null }


// const selectionSort = arr => {

// }

function selectionSort( arr) {
  let currentIdx = 0;
  for (let i = currentIdx + 1; i < arr.length; i++){
    let smallestIdx = currentIdx;
    let j = i;
    while (j < arr.length){
      if (arr[j] < arr[smallestIdx] ) {
        smallestIdx = j;
      }
      j++
    }
    let temp = arr[currentIdx];
    arr[currentIdx] = arr[smallestIdx];
    arr[smallestIdx] = temp;
  }
  return arr;
}

// console.log(selectionSort([3,2,1]))

function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while (left <= right){
    let mid = Math.floor((left + right)/2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
  }
  return -1;
}

// console.log(binarySearch([1,2,3,4,5], 2));


function bubbleSort(arr){
  let isSorted = false;
  while (!isSorted){
    isSorted = true;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i + 1]){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([3,2,1]))

function deleteLL(node){
  if (!node) return;
  node.value = node.next.value;
  node.next = node.next.next;
}


function reverseLL(head){
  let prevValue = head;
  while (head){
    let tempNext = head.next;
    head.next = prevValue;
    prevValue = head;
    head = tempNext;
  }
  return prevValue;
}


function reverseLLRecursive(head){
  if (head === null || head.next === null) return head;
  let temp = reverseLLRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return head;
}


// **************** Homework for Mon Sep 17 2018 ****************
// Question {name: 'first unique character in a string',learned: true,level: '',source: 'bbg',type: 'string' }
// Question {name: 'merging 2 packages',learned: true,level: 'easy',source: 'pramp',type: 'array' }
// Question {name: 'Smallest Difference',learned: true,level: 'medium',source: 'AE',type: 'array' }
// Question {name: 'reverse integer',learned: true,level: '',source: 'bbg',type: '' }
// Question {name: 'BST Traversal',learned: true,level: 'medium',source: 'AE',type: 'BST' }

const firstUniqueChar = str => {
  let hasSeen = {};
  for (let i = 0; i < str.length; i++){
    let char = str[i];
    if (hasSeen[char]) hasSeen[char]++;
    else hasSeen[char] = 1;
  }

  for (let j = 0; j < str.length; j++){
    let char2 = str[j];
    if (hasSeen[char2] === 1) return char2;
  }
  return false;
}




