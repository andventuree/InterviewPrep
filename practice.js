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

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

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

testQueue.print(); //[3,4,5]
