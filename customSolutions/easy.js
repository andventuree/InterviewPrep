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
sumTwoNums3([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5); //[-5,0]

/* --------------------------------------------------------------------- */
