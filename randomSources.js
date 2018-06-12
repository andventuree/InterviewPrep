function sumSubArr(arr, size) {
  let queue = [];
  let currentCalc = 0;
  let max = 0;
  let maxIdx = 0;
  for (let i = 0; i < size; i++) {
    queue.push(arr[i]);
    currentCalc += arr[i];
  }
  max = currentCalc;

  for (let j = 0 + size; j < arr.length; j++) {
    let removeVal = queue.shift();
    queue.push(arr[j]);
    currentCalc -= removeVal;
    currentCalc += arr[j];
    if (max < currentCalc) {
      max = currentCalc;
      maxIdx += 1;
    }
  }
  return maxIdx;
}

console.log(sumSubArr([1, 2, 3, 4, 5], 2)); //last 2 numbers, so index 3
console.log(sumSubArr([1, 2, 3, 4, 5], 3)); //last 3 numbers, so index 2
console.log(sumSubArr([1, 2, 3, 4, 5], 1)); //last 1 numbers, so index 4
