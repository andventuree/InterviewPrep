//Quick sort

function quickSort(arr) {
  helper(arr, 0, arr.length - 1);
  console.log("arr: ", arr);
  return arr;
}

function helper(arr, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
      swap(leftIdx, rightIdx, arr);
    }
    if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++;
    if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, arr);
  const leftSubArrIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubArrIsSmaller) {
    helper(arr, startIdx, rightIdx - 1);
    helper(arr, rightIdx + 1, endIdx);
  } else {
    helper(arr, rightIdx + 1, endIdx);
    helper(arr, startIdx, rightIdx - 1);
  }
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSort([12, 31, 23, 12, 31, 231, 2012, 30, 453254, 2]);
