let { homeworkTonight, tricks } = require("./HwHelper");

// homeworkTonight.genQuestions(5);
// tricks.genQuestions(5);
// homeworkTonight.genQuestions(6, "all", "bbg");

const threeNumberSum = (arr, targetSum) => {
  let combinations = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let calculation = arr[i] + arr[left] + arr[right];
      if (calculation > targetSum) {
        right -= 1;
      } else if (calculation < targetSum) {
        left += 1;
      } else {
        combinations.push([arr[i], arr[left], arr[right]]);
        left += 1;
      }
    }
  }
  return combinations;
};

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //[ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
