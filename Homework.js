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

// Question {name: 'bubble sort',learned: true,level: '',source: null,type: null }
// Question {name: 'shift array up by 1',learned: true,level: '',source: null,type: null }
// Question {name: 'reverse linked list',learned: true,level: '',source: null,type: null }
// Question {name: 'add nums by array back to front ',learned: true,level: '',source: null,type: null }

function bubSort(arr) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSorted = false;
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(bubSort([3, 2, 1]));

function shiftNumsUpBy1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  return arr;
}

// console.log(shiftNumsUpBy1([1, 2, 3])); //[2,3,3]

function reverseLinkedList(head) {
  let prevNode = head;
  while (head) {
    let temp = head.next;
    head.next = prevNode;
    prevNode = head;
    head = temp;
  }
  return prevNode;
}

function reverseLinkedListRecur(head) {
  if (head === null || head.next === null) return head;
  let temp = reverseLinkedListRecur(head.next);
  head.next.next = head;
  head.next = null;
  return head;
}

function addDigits(list1, list2) {
  let lastDigit1 = list1.length - 1;
  let lastDigit2 = list2.length - 1;
  let carry = 0;
  let total = "";
  for (let i = Math.max(lastDigit1, lastDigit2); i >= 0; i--) {
    let a = list1[lastDigit1] || 0;
    let b = list2[lastDigit2] || 0;
    let sum = a + b + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    total = sum + total;
    lastDigit1--;
    lastDigit2--;
  }
  return total.split("");
}

// console.log(addDigits([1, 2, 3], [1, 2, 7]));

// **************** Homework for Fri Aug 24 2018 ****************
// Question {name: 'Balanced Brackets',learned: true,level: 'medium',source: 'AE',type: 'stacks' }
// Question {name: 'first unique character in a string',learned: true,level: '',source: 'bbg',type: 'string' }
// Question {name: 'reverse integer',learned: true,level: '',source: 'bbg',type: '' }
// Question {name: 'Kadanes Algo - Max Sum',learned: true,level: 'medium',source: 'AE',type: null }

const balancedBrackets = brackets => {
  let stack = [];
  let pair = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0; i < brackets.length; i++) {
    let bracket = brackets[i];
    let lastBracket = stack[stack.length - 1];
    if (bracket === "]") {
      if (lastBracket !== pair[bracket]) return false;
      stack.pop();
    } else if (bracket === "}") {
      if (lastBracket !== pair[bracket]) return false;
      stack.pop();
    } else if (bracket === ")") {
      if (lastBracket !== pair[bracket]) return false;
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  return stack.length === 0;
};

// console.log(balancedBrackets("[{}()]")); //true
// console.log(balancedBrackets("[{{}([[[{}]]])}]")); //true
// console.log(balancedBrackets("[{}(]")); //false

const oneUniqueChar = str => {
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) seen[char] += 1;
    else seen[char] = 1;
  }
  return Object.keys(seen).filter(key => seen[key] === 1);
};

// console.log(oneUniqueChar("aaaabbbcddeee"));

const reverseInt = int => {
  let reverse = "";
  while (int > 0) {
    let onesPlace = int % 10;
    int = Math.floor(int / 10);
    reverse = reverse + onesPlace;
  }
  return reverse;
};

// console.log(reverseInt(123));
// console.log(reverseInt(1234567));

const maxSum = arr => {
  let maxTotal = arr[0];
  let maxSoFar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxSoFar = Math.max(arr[i], maxSoFar + arr[i]);
    maxTotal = Math.max(maxTotal, maxSoFar);
  }
  return maxTotal;
};

// console.log(maxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])); //19
