// Easy problems

//1a.
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
sumTwoNums([1, 2, 3, 4, 5], 8); //[3,5]

//1b.
//time: O(n) -> goes thru array once and stores all values
//space: O(n) -> will have differences for every value
function sumTwoNums2(arr, desiredSum) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
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

// Do not edit the line below.
exports.sumTwoNums2 = sumTwoNums2;

sumTwoNums2([1, 2, 3, 4, 5], 8); //[3,5]
