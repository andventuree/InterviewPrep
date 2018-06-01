// Easy problems

//time: O(n log n)
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
