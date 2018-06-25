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

// function swap(i, j, arr) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

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

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
//time: O(n)
//space: O(1)
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      //this problem doesnt mean you have to buy a stock the day before you sell.
      //simply, you add up hypothetical profits
      profit += prices[i] - prices[i - 1];
    }
  }
  // return profit;
  console.log("profit: ", profit);
};

// maxProfit([7, 1, 5, 3, 6, 4]); //7
// maxProfit([1, 2, 3, 4, 5]); //4
// maxProfit([7, 6, 4, 3, 1]); //0

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
var containsDuplicate = function(nums) {
  return new Set(nums);
};

// console.log(
//   "[1, 2, 3, 4, 5, 5, 6, 6]",
//   containsDuplicate([1, 2, 3, 4, 5, 5, 6, 6])
// );

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

//time:
//space: O(n) - need a new object
var containsDuplicate = function(nums) {
  let tracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]]) return true;
    else tracker[nums[i]] = true;
  }
  return false;
};

// containsDuplicate([1, 1, 1, 1, 1]); //false

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
var singleNumber = function(nums) {};

//time: O(n) - goes through entire arr
//space: O(1) - doesn't take up any space, makes use of XOR
// var singleNumber = function(nums) {
//   for (let i = 1; i &lt; nums.length; i++) {
//       nums[0] ^= nums[i]; //uses XOR
//   }
//   return nums[0];
// };

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
//time: O(n)
//space: O(1)
var intersect = function(nums1, nums2) {
  let tracker = {};
  let intersections = [];
  nums1.forEach(num => {
    if (tracker[num]) tracker[num]++;
    else tracker[num] = 1;
  });
  nums2.forEach(num2 => {
    if (tracker[num2]) {
      tracker[num2]--;
      intersections.push(num2);
    }
  });
  return intersections;
};

// console.log(intersect([1, 2, 2, 1], [2, 2])); //[2,2]
// console.log(intersect([1], [1, 1])); //[1]
// console.log(intersect([1, 2], [(1, 1)])); //[1]

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
// var plusOne = function(digits) {
//   let result = 0;
//   let places = 1;
//   for (let i = digits.length - 1; i >= 0; i--) {}
// };

// console.log(plusOne([1, 2, 3])); //1234
// console.log(plusOne([4, 3, 2, 1])); //4322
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //
// console.log(plusOne([9])); //

// if (digits[digits.length - 1] + 1 > 9) {
//   if (digits.length === 1) {
//     return (digits = [1, 0]);
//   }
//   digits[digits.length - 2] += 1;
//   digits[digits.length - 1] = 0;
// } else {
//   digits[digits.length - 1] += 1;
// }
// return digits;

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
//time: O(n^2) 1st loop to hold current num and 2nd loop to move that num back
//space: O(1) no extra space really needed
var moveZeroes = function(nums) {
  let moves = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (nums[i] === 0 && j < nums.length - 1) {
      swap(i, j + 1, nums);
      j++;
      moves++;
    }
  }
  console.log("moves: ", moves);
  return nums;
};

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(moveZeroes([0, 0, 0, 0, 1, 2, 34, 5, 5, 12]));

// var frontZeros = function(nums) {
//   let zeroPlace = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       swap(i, zeroPlace, nums);
//       zeroPlace++;
//     }
//   }
//   return nums;
// };

// console.log(frontZeros([1, 2, 34, 5, 6, 0, 0, 0]));

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/
// var twoSum = function(nums, target) {
//   //return value
//   let seen = {};
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (seen[diff]) {
//       return [diff, nums[i]];
//     } else {
//       seen[nums[i]] = true;
//     }
//   }
//   return [];
// };

var twoSum = function(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (seen[diff] !== undefined) {
      //b/c 2 will have 0 index, it'll be falsy
      return [seen[diff], i];
    } else {
      seen[nums[i]] = i;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
