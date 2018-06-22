// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
//time: O(n) - only going through it once
//space: O(1) - sorted in place
var removeDuplicates = function(nums) {
  let uniqueLength = 0; //unique up until this point
  for (let i = 0; i < nums.length; i++) {
    if (nums[uniqueLength] !== nums[i]) {
      uniqueLength++;
      swap(uniqueLength, i, nums);
    }
  }
  console.log(nums);
  console.log(uniqueLength);
  return uniqueLength + 1; //add 1 b/c uniqueLength was zero indexed
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
