//*****************************************************************
//Questions compiled from Glass Door on GS Software Engineering
//*****************************************************************

// Write a program to check whether given tree is binary search tree
function validBST(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, min, max) {
  if (tree.value < min || tree.value >= max) return false;
  let validLeft = helper(tree.left, min, tree.value);
  return validLeft && helper(tree.right, tree.value, max);
}

// In a linked list, find nth element from the end

// System design question to design alert processing system

// Implement cache where each element in cache have its own expiry time
// use an object and have a loop that check when something is old

// Explain complexity. - its the theory of what the worst case scenario run time would be

// Move all zeroes to the beginning of given array. This needs to be in linear time.
function upFrontZeros(arr) {
  let zeroPointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      swap(zeroPointer, i, arr);
      zeroPointer++;
    }
  }
  console.log(arr);
  return arr;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// upFrontZeros([1, 2, 32, 42, 42, 5, 0, 0, 0, 0]);
// Explain again why linear time is literally the only important thing in the universe.
// Its b/c anything above it compounds incredibly quickly, especially since GS deals with billions of $ and millions of transactions, it goes fast

// What is your favorite type of complexity and why is it O(n)?

// IsAnagram
function isAnagram(str) {
  //this is an algo for duplicates
  let uniqueStore = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!uniqueStore.has(str[i])) uniqueStore.add(str[i]);
    else return console.log("false");
  }
  console.log(uniqueStore);
}

// isAnagram("booger"); //false
// isAnagram("boger"); //Set { 'b', 'o', 'g', 'e', 'r' }

// Count unique substring of length k

// Implement a BST with the methods put(t), contains(t) and in_order_traversal. Get the failing unit tests to pass.
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  put(val) {
    let node = this;
    while (node) {
      // console.log(node);
      if (node.value < val) {
        if (node.right) node = node.right;
        else {
          node.right = new BST(val);
          break;
        }
      } else {
        if (node.left) node = node.left;
        else {
          node.left = new BST(val);
          break;
        }
      }
    }
    return this;
  }

  contains(val) {
    let node = this;
    while (node) {
      if (node.value < val) {
        node = node.right;
      } else if (node.value > val) {
        node = node.left;
      } else if (node.value === val) {
        return true;
      }
    }
    return false;
  }

  inOrderTraversal() {
    let node = this;
    let results = [];
    this.helper(node, results);
    return results;
  }

  helper(tree, arr) {
    if (tree) {
      tree.helper(tree.left, arr);
      arr.push(tree.value);
      tree.helper(tree.right, arr);
    }
    return arr;
  }
}

const testBST = new BST(10)
  .put(5)
  .put(12)
  .put(16)
  .put(2)
  .put(8);
// console.log(testBST.inOrderTraversal());
// console.log(testBST.contains(5));
// console.log(testBST.contains(13));

// print all the characters that needs to be present to make a sentence an pangram

// A kid wants to travel up n steps. She can only go 1, 2 or 3 steps at a time. How many different ways can she get to the nth step?

//time: O(3 options * n) => O(n), or O(n * d) if there is more than 3 options
//space: O(n) b/c of all the options
// function nWaysToNSteps(n) {
//   //ways to get to n given constraints
//   let ways = new Array(n + 1).fill(0);
//   ways[0] = 1; //only 1 way to get 0
//   let moveOptions = [1, 2, 3];
//   for (let i = 0; i < moveOptions.length; i++) {
//     let move = moveOptions[i];
//     for (let j = 1; j < ways.length; j++) {
//       // console.log(ways);
//       console.log(move, j, move <= j);
//       if (move <= j) {
//         ways[j] = ways[j] + ways[j - move]; //ways[j-move] gives you all the options of making that number at that index! you dont add to ways the result of j-move, you add the value
//       }
//     }
//   }
//   console.log(ways);
//   //only need the last index at the end b/c that incorporates all the lower nums
//   return ways[n];
// }

// console.log(nWaysToNSteps(3)); //[1,2], [1,1,1], [3]
// console.log(nWaysToNSteps(4)); //[1,1,1,1], [1,1,2], [1,3], [2,2]
// console.log(nWaysToNSteps(5)); //[1,1,1,1,1], [1,1,1,2], [1,2,2], [1,1,3], [2,3]

// Coderpad interview: Given an array of non negative integers, find the smallest sub array that at least equals to a value x that is also passed to the function. Find the student with highest average score
// Coderpad: given an array scores[][] = [[“jerry”,”65”],[“bob”,”91”], [“jerry”,”23”], [“Eric”,”83”]]

// How to solve it:
// Add all elements to the Hashmap ,
// if key matches append the score to a list,
// now iterate through keys and keep track of avg and key,
// return max avg and key in the end

//find highest avg, in O(n), scores need to be above a minimum (provided)

//clue: you need to calc avg every time so you only do 1 pass
//clue: to stay optimal, memoization
//time: O(n) b/c of memoization | space: O(n) need to store all results
function highestAvgScore(arr, min) {
  let record = {};
  let maxStudent = null;
  let maxAvg = 1;
  arr.forEach(entry => {
    let name = entry[0];
    let score = +entry[1]; //convert to number
    if (score >= min) {
      if (!record[name]) {
        record[name] = { score, n: 1 };
      } else {
        record[name].score = record[name].score * record[name].n; //increases score again
        record[name].n += 1;
        record[name].score = (record[name].score + score) / record[name].n; //updates avg
      }

      if (record[name].score > maxAvg) {
        maxAvg = record[name].score;
        maxStudent = name;
      }
    }
  });
  console.log(record);
  console.log([maxStudent, maxAvg]);
  return [maxStudent, maxAvg];
}

// highestAvgScore(
//   [["jerry", "65"], ["bob", "91"], ["jerry", "23"], ["Eric", "83"]],
//   10
// );

// highestAvgScore(
//   [
//     ["jerry", "65"],
//     ["bob", "91"],
//     ["bob", "1000"],
//     ["jerry", "23"],
//     ["Eric", "83"]
//   ],
//   50
// );

// highestAvgScore(
//   [
//     ["jerry", "65"],
//     ["jerry", "65"],
//     ["jerry", "65"],
//     ["jerry", "65"],
//     ["bob", "91"],
//     ["bob", "1000"],
//     ["Eric", "83"]
//   ],
//   10
// );

// Write an algorithm to Reverse Linked

// First question : Given a sorted array which has been rotated k times , need to find k?
//time: O(n) only need 1 pass to find that point
//space: O(1) doesn't take space
function findTimesRotated(arr) {
  for (let i = 1; i < arr.length; i++) {
    //check if the previous num is larger than current, how far that is from index 0 is the times rotated, asssuming it rotates 1 position each time
    if (arr[i - 1] > arr[i]) return i;
  }
}

// console.log(findTimesRotated([8, 1, 2, 3, 4, 5, 6])); //rotated 1
// console.log(findTimesRotated([6, 8, 1, 2, 3, 4, 5])); //rotated 2
// console.log(findTimesRotated([5, 6, 8, 1, 2, 3, 4])); //rotated 3

// Second Question : Given a binary tree find the maximum sum from leaf to leaf?
// Third Question : Same as Second now i need to optimize it to work from any node to node?

// ******************** More Practice ********************

function nWays(n) {
  let moves = [1, 2, 3];
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < ways.length; j++) {
      if (moves[i] <= j) {
        ways[j] += ways[j - moves[i]];
      }
    }
  }
  return ways[n];
}

// nWays(1);

function timesRotated(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < arr[i - 1]) return i;
  }
}
// console.log(timesRotated([8, 1, 2, 3, 4, 5, 6])); //rotated 1
// console.log(timesRotated([6, 8, 1, 2, 3, 4, 5])); //rotated 2
// console.log(timesRotated([5, 6, 8, 1, 2, 3, 4])); //rotated 3

function highestScore(arr) {
  let maxStudent = null;
  let maxScore = 0;
  let record = {};
  arr.forEach(student => {
    let name = student[0];
    let currScore = +student[1]; //remember numbers given in strings
    if (!record[name]) {
      record[name] = { score: currScore, n: 1 };
    } else {
      record[name].score = record[name].n * record[name].score;
      record[name].n += 1;
      record[name].score = (record[name].score + currScore) / record[name].n; //same student, new currScore
    }
    if (record[name].score > maxScore) {
      maxScore = record[name].score;
      maxStudent = name;
    }
  });
  console.log(maxStudent, maxScore);
}

// highestScore([
//   ["jerry", "65"],
//   ["bob", "91"],
//   ["bob", "1000"],
//   ["jerry", "23"],
//   ["Eric", "83"]
// ]);

// const rotated = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) return i;
//   }
// };

// Phone assessment

// started off asking about proejcts: banana hunt
// said you helped with rendering obj's then loading bananas

// looking for someone competent, smart, good at api design and good at UI

// 1. print out a string of all the properties of an object, but not the instance(inherited ones)

function Employee(firstName, lastName) {
  this.firstname = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return this.firstName + this.lastName;
  };
  this.nestedObj = {
    booger: "ham",
    1: 2
  };
  Employee.prototype.numbers = 123;
}

// let Andrew = new Employee("andrew", "wong");
// console.log(convertToString(Andrew)); //"andrew, wong, 2, ham, "

function convertToString(obj) {
  return helper(obj, []);
}

function helper(obj, finalValues) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] !== "function") {
      if (typeof obj[key] === "object") {
        return helper(obj[key], finalValues);
      } else {
        finalValues.push(obj[key]);
      }
    }
  }
  return finalValues.join(", ") + ", ";
}

// 2. given a list of functions as an array, return a function that uses those callbacks with a provided input value;

let a = function(num) {
  return num + 2;
};
let b = function(num) {
  return num * 3;
};
let c = function(num) {
  return 10;
};
// let callbacks = [a, b, c];
// let composeWithValue = compose(callbacks);
// console.log(composeWithValue(1)); //32

function compose(callbacks) {
  return function(value) {
    for (let i = callbacks.length - 1; i >= 0; i--) {
      value = callbacks[i](value);
    }
    return value;
  };
}

// 3. challenge questions
// input: [a.b.c], [1]
// output: return the following obj
// {
//   a : {
//     b: {
//       c: 1
//     }
//   }
// }

// input: [a.b[0].c], [1]
// output:
// {
//   a : {
//     b: [{
//       c: 1
//     }
//   }]
// }

// function nestedObjCreator(props, values) {
//   let finalObj = {};
//   props.forEach((obj, i) => {
//     let currentObj = {};
//     let objStructure = obj.split(".");
//     let propToValue = objStructure.length - 1;

//     while (objStructure.length > 1) {
//       let anotherObj = {};
//       let nestedProp = objStructure.pop();
//       if (objStructure.length - 1 === propToValue) {
//         anotherObj[nestedProp] = values[i];
//       } else {
//         currentObj[nestedProp] = currentObj;
//       }
//     }

//     finalObj[objStructure[0]] = currentObj;
//   });
//   console.log(finalObj);
// }

// nestedObjCreator(["a.b.c"], [1]);
