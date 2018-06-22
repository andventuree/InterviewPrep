// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
var removeDuplicates = function(nums) {
  let swapUniqueHere = 0;
  let = 0;
  for (let i = 0; i < nums.length - 1; i++){
    if (nums[i] !== nums[i + 1]) {
      // swapUniqueHere += 1;

    } else {
      i+= 1;
    }
  }
  return swapUniqueHere;
};

function swap(i, j, arr){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = arr[i];
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
