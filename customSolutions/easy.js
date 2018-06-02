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

//3a. recursive
//time:
//space:
function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  if (memo[n]) {
    console.log(`have in memo[${n}]: `, memo[n]);
    return memo[n];
  } else {
    memo[n] = getNthFib(n - 1, memo) + getNthFib(n, memo);
    console.log(`memo[${n}]: `, memo[n]);
    return memo[n];
  }
}

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

getNthFib(6);
