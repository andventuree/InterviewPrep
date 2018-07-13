// //time:
// //space:
// function sumSubArr(arr, size) {
//   let queue = [];
//   let currentCalc = 0;
//   let max = 0;
//   let maxIdx = 0;
//   for (let i = 0; i < size; i++) {
//     queue.push(arr[i]);
//     currentCalc += arr[i];
//   }
//   max = currentCalc;

//   for (let j = 0 + size; j < arr.length; j++) {
//     let removeVal = queue.shift();
//     queue.push(arr[j]);
//     currentCalc -= removeVal;
//     currentCalc += arr[j];
//     if (max < currentCalc) {
//       max = currentCalc;
//       maxIdx += 1;
//     }
//   }
//   return maxIdx;
// }

// console.log(sumSubArr([1, 2, 3, 4, 5], 2)); //last 2 numbers, so index 3
// console.log(sumSubArr([1, 2, 3, 4, 5], 3)); //last 3 numbers, so index 2
// console.log(sumSubArr([1, 2, 3, 4, 5], 1)); //last 1 numbers, so index 4

// //iterative
// //time: O(n)
// //space: O(1)
// // const reverseStr = s => {
// //   let reversed = [];
// //   for (let i = s.length - 1; i >= 0; i--) {
// //     reversed.push(s[i]);
// //   }
// //   return reversed.join("");
// // };

// // const reverseStr = s => {
// //   let reversed = s.split("");
// //   let left = 0;
// //   while (left < s.length - left) {
// //     swap(left, s.length - left, reversed);
// //     left += 1;
// //   }
// //   return reversed.join("");
// // };

// // recursive
// // time: O(n)
// // space: O(n)
// const helper = (arr, left) => {
//   if (left >= arr.length - left) return arr;
//   arr = swap(left, arr.length - left - 1, arr);
//   return helper(arr, left + 1);
// };

// const reverseStr = s => {
//   return console.log("helper", helper(s.split(""), 0).join(""));
// };

// console.log(reverseStr("booger"));
// console.log(reverseStr("boger"));

// function swap(i, j, arr) {
//   let front = arr[j];
//   let back = arr[i];
//   arr[i] = front;
//   arr[j] = back;
//   return arr;
// }

// a = 100 + 1.0 / 3 - 100;
// b = 1.0 / 3;
// console.log("a: ", a); //a: 0.3333333333333286
// console.log("b: ", b); //b: 0.3333333333333333
// console.log(a == b); //false b/c of rounding

class MostTraded {
  constructor() {
    this.tradeLogs = {};
  }
  //time: O(n) | space: O(n)
  addToTrade(ticker, volumn) {
    if (this.tradeLogs[ticker]) this.tradeLogs[ticker] += volumn;
    else this.tradeLogs[ticker] = volumn;
    return this;
  }

  //time: O(n^2) -> improved by native sort O(n log n)
  //space: O(n)
  printMostTraded(n) {
    //how to output all values of array
    let sorted = [];
    for (let key in this.tradeLogs) {
      sorted.push([key, this.tradeLogs[key]]);
    }

    //O(n log n) - quick sort if >10 elements
    sorted.sort((a, b) => b[1] - a[1]);

    //simply return how many they wanted
    return sorted.slice(0, n);
  }
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let testTrade = new MostTraded()
  .addToTrade("IBM", 1000)
  .addToTrade("APPL", 500)
  .addToTrade("NFLX", 1000)
  .addToTrade("AMZN", 700)
  .addToTrade("APPL", 600);

console.log(testTrade.printMostTraded(3));
console.log(testTrade.printMostTraded(2));
// printMostTraded(3) should print out
// 'APPL', 1100
// 'IBM', 1000
// 'NFLX', 1000

//Question: each line of text can only fit 20 chars, and you can't split words
// function wordWrap(str) {
//   let totalCount = 0;
//   const arr = str.split(' '), formattedStr = [];

//   arr.forEach((word, index) => {
//    totalCount += word.length;
//    if (totalCount >= 20) {
//       formattedStr.push('\n', word, ' ');
//       totalCount = word.length;
//    } else {
//       formattedStr.push(word, ' ');
//    }
//   });
//   return formattedStr.join('');
//  }
