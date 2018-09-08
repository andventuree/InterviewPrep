/*
mergeSort([4,3,6,1])
  array = [4,3,6,1]
  splits = [[4,3],[6,1]]
  left = [4,3]
  right = [6,1]
  mergeSort(left) ~>
    mergeSort([4,3])
      array = [4,3]
      splits = [[4],[3]]
      left = [4]
      right = [3]
      mergeSort(left) ~>
        mergeSort(4)
          array = [4]
          return array
      ~> [4]
      mergeSort(right) ~>
        mergeSort([3])
          array = [3]
          return array
      ~> [3]
      return merge(mergeSort(left), mergeSort(right)) ~>
        merge([4],[3])
          left = [4]
          right = [3]
          merged = [] ~> [3] ~> [3,4]
          leftIdx = 0 ~> 1
          rightIdx = 0 ~> 1
          return merged
      ~> [3,4]
  ~> [3,4]
  mergeSort(right) ~>
    mergeSort([6,1])
      array = [6,1]
      splits = [[6],[1]]
      left = [6]
      right = [1]
      mergeSort(left) ~>
        mergeSort(6)
          array = [6]
          return array
      ~> [6]
      mergeSort(right) ~>
        mergeSort([1])
          array = [1]
          return array
      ~> [1]
      return merge(mergeSort(left), mergeSort(right)) ~>
        merge([6],[1])
          left = [6]
          right = [1]
          merged = [] ~> [3] ~> [3,4]
          leftIdx = 0 ~> 1
          rightIdx = 0 ~> 1
          return merged
      ~> [1,6]
  ~> [1,6]
  return merge(mergeSort(left), mergeSort(right)) ~>
    merge([[3,4],[1,6]])
      left = [3,4]
      right = [1,6]
      merged = [] ~> [1] ~> [1,3] ~> [1,3,4] ~> [1,3,4,6]
      leftIdx = 0 ~> 1 ~> 2
      rightIdx = 0 ~> 1 ~> 2
      return merged
  ~> [1,3,4,6]
~> [1,3,4,6]
*/

const mergeSort = function(array) {
  if (array.length < 2) return array; // base case
  const splits = split(array),
    left = splits[0],
    right = splits[1];
  return merge(mergeSort(left), mergeSort(right)); // merge sorted!
};

const split = function(array) {
  const center = array.length / 2,
    left = array.slice(0, center),
    right = array.slice(center);
  return [left, right];
};

const merge = function(left, right) {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
};
