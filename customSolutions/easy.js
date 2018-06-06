// Easy problems

/* --------------------------------------------------------------------- */

//1a. Using 2 loops
//time: O(n log n) -> can still be more optimized if sorted
//space: O(2) => O(1)
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

//1b. Using hash table
//time: O(n) -> goes thru array once and stores all values
//space: O(n) -> will have differences for every value
function sumTwoNums2(arr, desiredSum) {
  let store = {}; //use as a hash table
  for (let i = 0; i < arr.length; i++) {
    console.log("current store", store);
    let difference = desiredSum - arr[i];
    if (store[difference]) {
      return [difference, arr[i]].sort((a, b) => {
        return a - b;
      });
    } else {
      store[arr[i]] = true;
    }
  }
  return [];
}

// sumTwoNums2([1, 2, 3, 4, 5], 8); //[3,5]

//1c. Using better left and right pointers
//time: O(n) -> worst case is going through entire array
//space: O(1)
function sumTwoNums3(arr, desiredSum) {
  arr.sort((a, b) => {
    //JS native sort, orders by ascii
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  while (left !== right) {
    let currentSum = arr[left] + arr[right];
    console.log("currentSum", [arr[left], arr[right]]);
    if (currentSum > desiredSum) {
      right--;
    } else if (currentSum < desiredSum) {
      left++;
    } else if (currentSum === desiredSum) {
      console.log("found it", [arr[left], arr[right]]);
      return [arr[left], arr[right]];
    }
  }
  return [];
}

// sumTwoNums3([1, 2, 3, 4, 5], 8); //[3,5]
// sumTwoNums3([1, 2, 3, 4, 5, 6, 7, 8, 9], 17); //[8,9]
// sumTwoNums3([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5); //[-5,0]

/* --------------------------------------------------------------------- */

//2a. Recursive
//time: O(log n) - b/c always cuts out half the tree
//space: O(n) - if there's only 1 branch, you have to run through entire length
function findClosestValueInBst(tree, target) {
  return findClosestHelper(tree, target, Infinity);
}

// function findClosestHelper(tree, target, closest) {
//   //base case
//   if (!tree) return closest;
//   console.log("closest: ", closest);
//   //updates closest if there's a closer value
//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }
//   //traversing BST
//   if (target > tree.value) {
//     return findClosestHelper(tree.right, target, closest);
//   } else if (target < tree.value) {
//     return findClosestHelper(tree.left, target, closest);
//   } else {
//     console.log("final closest: ", closest);
//     return closest;
//   }
// }

//2b. Iterative
//time:
//space:
function findClosestHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  console.log("final closest: ", closest);
  return closest;
}

// For testing
class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    const direction = val > this.value ? "right" : "left";
    //if theres a node in specified direction, then createa a node in that direction
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
    return this; //need for chaining
  }
}

let testBST = new BST(50)
  .insert(57)
  .insert(42)
  .insert(26)
  .insert(87)
  .insert(48)
  .insert(23)
  .insert(20)
  .insert(11) //test
  .insert(12) //test
  .insert(62)
  .insert(34)
  .insert(46)
  .insert(92)
  .insert(10)
  .insert(8)
  .insert(3)
  .insert(5); //test

//Assumption is you're giving a balanced tree to begin with
// findClosestValueInBst(testBST, 5); //5
// findClosestValueInBst(testBST, 92); //92
// findClosestValueInBst(testBST, 95); //87 but really should be 92
// findClosestValueInBst(testBST, 14); //11 but should really be 12

/* --------------------------------------------------------------------- */

//3. depth first search on a tree

//v vectex = each node
//e edge = each level

//time: O(v + e) b/c you definitely have to go thru all nodes (v) and then also you kinda go thru each level (e) at least temporarily
//space: O(v) b/c if the whole tree was just 1 branch, you have to go through all the nodes
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    //start by adding current node to array
    array.push(this.name);
    //then for each child, recursively call search
    this.children.forEach(child => child.depthFirstSearch(array));
    //only return array at the end
    return array;
  }
}

/* --------------------------------------------------------------------- */

//3a. recursive - STILL NEEDS WORK!
//time:
//space:
// function getNthFib(n, memo = { 1: 0, 2: 1 }) {
//   if (memo[n]) {
//     console.log(`have in memo[${n}]: `, memo[n]);
//     return memo[n];
//   } else {
//     memo[n] = getNthFib(n - 1, memo) + getNthFib(n, memo);
//     console.log(`memo[${n}]: `, memo[n]);
//     return memo[n];
//   }
// }

//3b. iterative
//time: O(n) - will need to go through every num at least once to calculate
//space: O(1) - only looking at 2 values with each iteration
// function getNthFib(n) {
//   let prevTwo = [0, 1];
//   counter = 3;
//   while (counter <= n) {
//     console.log("prevTwo: ", prevTwo);

//     //calculate the next value
//     let nextFib = prevTwo[0] + prevTwo[1];
//     //then move the second latest value over by 1
//     prevTwo[0] = prevTwo[1];
//     //then insert latest calculated value
//     prevTwo[1] = nextFib;
//     counter++;
//   }
//   console.log("final prevTwo: ", prevTwo);
//   //ternary is necessary to handle base case of 0
//   return n > 1 ? prevTwo[1] : prevTwo[0];
// }

// getNthFib(6);

/* --------------------------------------------------------------------- */

//4. iteratively
//time: O(log n) - never have to go through all of n
//space: O(1) - only thing we're storing is 3 pointers which takes up 3 space
function binarySearchIterative(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let midpoint = Math.floor((left + right) / 2);
    let potentialMatch = array[midpoint];
    console.log("potentialMatch: ", potentialMatch);
    if (potentialMatch === target) {
      console.log("correct match: ", potentialMatch);
      return midpoint;
    }
    if (target < potentialMatch) {
      right = midpoint - 1;
    } else if (target > potentialMatch) {
      left = midpoint + 1;
    }
  }
  return -1;
}

//4b. recursive
//time: O(log n) - never have to go through all of n
//space: O(log n) - recursive takes more space b/c it add mores frame onto call stack
function binarySearchRecursive(array, target) {
  //Pro tip: if you need more parameters, make a helper function
  return bsHelper(array, target, 0, array.length - 1);
}

function bsHelper(array, target, left, right) {
  if (left > right) return -1; //left pointer passing right means you've gone too far
  let midpoint = Math.floor((left + right) / 2);
  let potentialMatch = array[midpoint];
  console.log("potentialMatch: ", potentialMatch);
  if (target === potentialMatch) {
    console.log("correct match: ", potentialMatch);
    return midpoint;
  } else if (target < potentialMatch) {
    return bsHelper(array, target, left, midpoint - 1);
  } else {
    return bsHelper(array, target, midpoint + 1, right);
  }
}

// binarySearchIterative([1, 2, 3, 4, 5, 34, 63, 66, 79, 90, 495, 590, 678], 2);
// binarySearchRecursive([1, 5, 23, 111], 111);

/* --------------------------------------------------------------------- */
//Pro tip: If you have an unsorted array, sorting on average will be O(n^2) to sort

//5.
//time: O(n^2)
//space: O(1) - b/c you're not storing anymore than 2 things at a time
function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      //unlike insertion sort, this algo focuses on going forward
      //hence accting for the length - 1
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        console.log("array: ", array);
        isSorted = false;
      }
    }
  }
  console.log("final array: ", array);
  return array;
}

function swap(i, j, array) {
  let larger = array[i];
  let smaller = array[j];
  array[i] = smaller;
  array[j] = larger;
  return array;
}

// bubbleSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

/* --------------------------------------------------------------------- */

//6.
//Insertion sort - moving 1 number at a time, so its always sorted up til a point.

//time: O(n^2)
//space: O(1) - b/c you're not storing anymore than 2 things at a time
// function insertionSort(array) {
//   //loop through array once
//   for (let i = 1; i < array.length; i++) {
//     // this will keep moving array up so you dont repeat operations
//     // i also means it is sorted up until that point
//     // Unlike bubble sort, this algo focus on going backwards
//     // hence accting for the let i = 1
//     let j = i;
//     console.log(i, array);
//     // looking at each number and swapping them as necessary
//     while (j > 0 && array[j - 1] > array[j]) {
//       insertSwap(j, j - 1, array);
//       console.log("need to swap ", array[j], array[j - 1], array);
//       j -= 1;
//     }
//   }
//   console.log("final array", array);
//   return array;
// }

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j -= 1) {
      insertSwap(j - 1, j, array);
    }
  }
  console.log("sorted array:", array);
  return array;
}

// insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

function insertSwap(i, j, array) {
  let larger = array[i];
  let smaller = array[j];
  array[i] = smaller;
  array[j] = larger;
  return array;
}

// insertionSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

/* --------------------------------------------------------------------- */

// 7.
//time: O(n^2) - b/c you must go thru arr 1 times, and multiple times for comparing
//space: O(1) - not storing too much
// function selectionSort(array) {
//   let currentIdx = 0;
//   while (currentIdx < array.length - 1) {
//     //- 1 b/c you dont need to swap the last num
//     let smallestIdx = currentIdx;
//     for (let i = currentIdx + 1; i < array.length; i++) {
//       if (array[smallestIdx] > array[i]) {
//         smallestIdx = i;
//       }
//     }
//     //use currentIdx b/c its sorted up until that point
//     swapHelper(currentIdx, smallestIdx, array);
//     currentIdx++;
//   }
//   console.log("sorted", array);
//   return array;
// }

//shorter and more consistent with insertion sort
function selectionSort(array) {
  for (let currentIdx = 0; currentIdx < array.length - 1; currentIdx++) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swapHelper(currentIdx, smallestIdx, array);
  }
  console.log("final sorted array", array);
  return array;
}

function swapHelper(i, j, array) {
  let largerNum = array[i];
  let smallerNum = array[j];
  array[i] = smallerNum;
  array[j] = largerNum;
}

// selectionSort([9, 8, 2, 4, 1, 4, 5, 2, 1]); //[ 1, 1, 2, 2, 4, 4, 5, 8, 9 ]

/* --------------------------------------------------------------------- */

//8a.
//time: O(n)
//space: O(n) or O(m) if your alphabet has more chars
// function caesarCipherEncryptor(str, key) {
//   let newLetters = [];
//    //why not make this a string?
//    ////because concatentation is actually an O(n) operation for each +=,
//    //so that bloats the time complexity without you knowing it
//   let newKey = key % 26;
//   for (let letter in str) {
//     newLetters.push(getNewLetter(str[letter], newKey));
//     console.log(newLetters);
//   }
//   return newLetters.join(","); //return final string
// }

// function getNewLetter(letter, key) {
//   let newLetterCode = letter.charCodeAt(0) + key;
//   if (newLetterCode <= 122) return String.fromCharCode(newLetterCode);
//   else return String.fromCharCode(96 + (newLetterCode % 122));
// }

//8b. if given an alphabet, this solution works in terminal but doesn't work on algo expert atm.
//time: same
//space: same
// function caesarCipherEncryptor(str, key) {
//   let newLetters = [];
//   //why not make this a string?
//   //because concatentation is actually an O(n) operation for each +=,
//   //so that bloats the time complexity without you knowing it
//   let newKey = key % 26;
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   for (let letter in str) {
//     newLetters.push(getNewLetter(str[letter], newKey, alphabet)); //then add to string
//     console.log(newLetters);
//   }
//   return newLetters.join(","); //return final string
// }

// function getNewLetter(letter, key, alphabet) {
//   let newLetterCode = alphabet.indexOf(letter) + key;
//   if (newLetterCode <= 25) return alphabet[newLetterCode];
//   else return alphabet[-1 + (newLetterCode % 25)];
// }

// // caesarCipherEncryptor("booger", 0);
// // caesarCipherEncryptor("abc", 3);
// // caesarCipherEncryptor("xyz", 2);
// // caesarCipherEncryptor("xyz", 5);

// /* --------------------------------------------------------------------- */

// //9a. + 9b. are naive iterative examples

// //9c. recursive
// function isPalindrome(string) {}

// //9d. iterative
// //time: O(n) - need to go through entire string at least half
// //space: O(1) - only storing pointers
// // function isPalindrome(string) {
// //   let left = 0;
// //   let right = string.length - 1;
// //   while (left <= right) {
// //     if (string[left] !== string[right]) {
// //       return false;
// //     }
// //     left += 1;
// //     right -= 1;
// //   }
// //   console.log(true);
// //   return true;
// // }

// isPalindrome("absba");
