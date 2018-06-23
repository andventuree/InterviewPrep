// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
//time: O(n) - only going through it once
//space: O(1) - sorted in place
var removeDuplicates = function(nums) {
  let uniqueLength = 0; //unique up until this point
  for (let i = 0; i < nums.length; i++) {
    if (nums[uniqueLength] !== nums[i]) {
      uniqueLength++; //only increment so we have a new space
      swap(uniqueLength, i, nums);
      console.log(nums);
    }
  }
  console.log(uniqueLength + 1, nums);
  return uniqueLength + 1; //add 1 b/c uniqueLength was zero indexed
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// removeDuplicates([1, 1, 2]);

// // https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
// // INCOMPLETE
// var maxProfit = function(prices) {
//   let currentStock = null;
//   let futurePointer = 1;
//   let profit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     //not holding a stock, then buy a stock
//     if (!currentStock) {
//       //but only buy if price goes up in the future
//       if (prices[i] < prices[i + 1]) {
//         currentStock = prices[i];
//       }
//       //holding a stock, then sell
//     } else {
//       //but only sell it tomorrow if price will drop in the future
//       if (prices[i] > prices[i + 1]) {
//         profit += prices[i] - currentStock;
//         currentStock = null;
//       }
//     }
//   }
//   console.log("profit: ", profit);
//   return profit;
// };

// maxProfit([7, 1, 5, 3, 6, 4]); //7, buy day 2 and sell on day 5 = 4 and buy day 4 and sell day 5 = 3
// maxProfit([1, 2, 3, 4, 5]); //4
// maxProfit([7, 6, 4, 3, 1]); //0

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
//time: O(n) - must loop through for splice
//space: O(n) - While it is in place, it needs a temporary var
// var rotate = function(nums, k) {
//   if (k < 0) return "k should be positive";
//   let back = nums.splice(k + 1);
//   const rotatedArr = back.concat(nums);
//   console.log("rotatedArr: ", rotatedArr);
//   return rotatedArr;
// };

//time: O(n * k) pop and unshift are O(n) i think
//space: O(1) no extra space b/c in place
var rotate = function(nums, k) {
  while (k > 0) {
    nums.unshift(nums.pop()); //take the last and add to the front
    k--;
  }
  console.log(nums); //question didnt want anything to be returned
};

// rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
var containsDuplicate = function(nums) {
  return new Set(nums);
};

console.log(
  "[1, 2, 3, 4, 5, 5, 6, 6]",
  containsDuplicate([1, 2, 3, 4, 5, 5, 6, 6])
);
