// **************** Homework for Thu Jun 28 2018 ****************
// [ Question {
//     name: 'BST Traversal',
//     learnedStatus: true,
//     difficulty: 'medium',
//     source: 'AE',
//     type: 'BST' },
//   Question {
//     name: 'Palindrome Check',
//     learnedStatus: true,
//     difficulty: 'easy',
//     source: 'AE',
//     type: 'string' },
//   Question {
//     name: 'Insert Sort',
//     learnedStatus: true,
//     difficulty: 'easy',
//     source: 'AE',
//     type: 'sorting' },
//   Question {
//     name: 'Three Number Sum',
//     learnedStatus: true,
//     difficulty: 'medium',
//     source: 'AE',
//     type: 'array' },
//   Question {
//     name: 'BST Construction',
//     learnedStatus: true,
//     difficulty: 'medium',
//     source: 'AE',
//     type: 'BST' } ]

//time: O(n) - need to go through every node
//space: O(n)
function preOrderTraversal(tree, arr) {
  if (tree) {
    arr.push(tree.value);
    preOrderTraversal(tree.left, arr);
    preOrderTraversal(tree.right, arr);
  }
  return array;
}

function inOrderTraversal(tree, arr) {
  if (tree) {
    inOrderTraversal(tree.left, arr);
    arr.push(tree.value);
    inOrderTraversal(tree.right, arr);
  }
  return array;
}

function postOrderTraversal(tree, arr) {
  if (tree) {
    postOrderTraversal(tree.left, arr);
    postOrderTraversal(tree.right, arr);
    arr.push(tree.value);
  }
  return array;
}

//time: O(n)
//space: O(1);
function palindromeCheck(str) {
  //have a left pointer and a right pointer,
  //and move them closer and closer to the middle until they meet
  let left = 0;
  while (left <= str.length - 1 - left) {
    if (str[left] !== str[str.length - 1 - left]) return false;
    left += 1;
  }
  return true;
}

// console.log(palindromeCheck("booger"));
// console.log(palindromeCheck("tacocat"));
// console.log(palindromeCheck("abcba"));

function insertionSort(arr) {
  //use a for loop to go 1 number at a time
  //then have a second loop that will compare the current number with the previous num,
  //if it is not sorted, then sort them, then decrement the second loop and
  //repeat this operation until you reach the beginning
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1, arr);
      j--;
    }
  }
  console.log(arr);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// insertionSort([8, 5, 23, 52, 5, 26, 26, 4, 2, 16, 62, 3]);

function threeNumberSum(arr, target) {
  //sort it b/c extent is already O(n^2) so O(n log n) wont hurt
  //once sorted, have a for loop going through, holding onto 1 number
  //then have pointers for the other two numbers
  //move pointers when its too large or too small
  let possibilities = [];
  arr.sort((a, b) => a - b); //need to sort smallest to largest
  console.log("arr: ", arr);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let calculation = arr[i] + arr[left] + arr[right];
      if (calculation < target) {
        left += 1;
      } else if (calculation > target) {
        right -= 1;
      } else {
        possibilities.push([arr[i], arr[left], arr[right]]);
        left += 1; //remember this needs to keep moving forward
      }
    }
  }
  console.log("possibilities: ", possibilities);
}

// threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]

class BST {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
  //time: O(log n) | space: O(1)
  insert(val) {
    let node = this;
    while (node) {
      if (node.value > val) {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new BST(val);
          break;
        }
      } else {
        //<= goes left side;
        if (node.left) {
          node = node.left;
        } else {
          node.left = new BST(val);
          break;
        }
      }
    }
    return this;
  }
  //time: O(log n) - b/c nature of BST | space: O(1)
  contains(val) {
    let node = this;
    while (node) {
      if (this.value < val) {
        node = node.right;
      } else if (this.value > val) {
        node = node.left;
      } else {
        return true;
      }
    }
    return false;
  }
  //time: O(log n) | space: O(1);
  getMinValue() {
    let node = this;
    while (node) {
      if (node.left !== null) {
        node = node.left;
      }
    }
    return node.value;
  }
}
