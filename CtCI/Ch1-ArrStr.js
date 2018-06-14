/* Reading: ch 1 - Strings and arrays
String questions can also be flipped as array questions and vice versa. Strings are technically arrays under the hood.

Hash table - Great to use when finding unique characters but you can run into collision. How to resolve collisions?

a) hash table + linked list or dynamic array

b) binary search tree + hash table

Array list (dynamically resizing array) - Be aware that when you exceed the size of the initially set up static array, it'll need an O(n) operation to find you more memory to increase the size of your array.
FYI, this does not apply to javascript b/c it uses dynamically sized arrays by default so the above is already happening under the hood.

String buffer - Using += or concat is an O(n) operation. Rather, put your characters into an array then join them at the very end.
>>> However, notes from 1.6 compressStr says concat is actually optimized and is faster than .join():
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
>>>Interviewer may not know it is heavily optimized so it could be beneficial to do it with array
b/c interview knows other languages

*/

// 1.1 Implement an algo to determine if a string has all unique characters. What if you cannot use additional data structures?

//with another data structure
//time: O(n) b/c of sort
//space: O(n)
function unique(str) {
  let char = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!char.has(str[i])) char.add(str[i]);
    else return false;
  }
  return true;
}

// console.log(unique("booger"));
// console.log(unique("boger"));

//w/o another data structure
//time: O(n log n) b/c of sort
//space: O(n)
function uniqueNoDS(str) {
  let sorted = str.split("").sort(); //uses quick sort which is O(n log n) when > 10 chars
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) return false;
  }
  return true;
}

// console.log(uniqueNoDS("booger"));

// 1.2 Reverse a string

//iterative
//time: O(n) split the string
//space: O(n) b/c of arr
function iterativeReverse(str) {
  let left = 0;
  let arr = str.split(""); //string buffer
  while (left <= arr.length - 1 - left) {
    swap(left, arr.length - 1 - left, arr);
    left += 1;
  }
  return arr.join("");
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(iterativeReverse("booger"));

//recursive
//time: O(n)
//space: O(n)
function recursiveReverse(str) {
  let arr = str.split("");
  helper(arr, 0);
  return arr.join("");
}

function helper(arr, left) {
  if (left >= arr.length - 1 - left) {
    return arr;
  } else {
    swap2(left, arr.length - 1 - left, arr);
    helper(arr, left + 1);
  }
}

function swap2(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// console.log(recursiveReverse("booger"));

// 1.3 Given two strings, write a method to decide if one is a permutation of the other.
// 1.2 In 6th edition

//compare letters from one string with the other
//time: O(n^2) - need 2 for...in loops for object
//space: O(n) - 2 objs
function isPermutation(initial, isPerm) {
  if (initial.length !== isPerm.length) return false; //will automatically catch if 1 has more characters

  const charStore1 = {};
  const charStore2 = {};
  objectTracker(charStore1, initial.split(""));
  objectTracker(charStore2, isPerm.split(""));
  for (let key1 in charStore1) {
    for (let key2 in charStore2) {
      if (!charStore1[key2]) return false;
      if (!charStore2[key1]) return false;
    }
  }
  return true;
}

function objectTracker(charStore, arr) {
  arr.forEach(elem => {
    if (charStore[elem]) charStore[elem] = charStore[elem] + 1;
    else charStore[elem] = 1;
  });
}

// console.log(isPermutation("booger", "booger")); //true
// console.log(isPermutation("booger", "boger")); //false
// console.log(isPermutation("zhuling", "lingzhu")); //true
// console.log(isPermutation("abc", "abcc")); //false

//time: O(n log n)
//space: O(n)
function isPermutationSorted(str1, str2) {
  if (str1.length !== str2.length) return false;
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  return arr1.every((char, i) => char === arr2[i]);
}

// console.log(isPermutationSorted("booger", "booger")); //true
// console.log(isPermutationSorted("booger", "boger")); //false

// 1.4 Write a method to insert %20 for each space in a string
//time: O(n) each split and join is an O(n) operation
//time: O(1) no extra space was used
function insertDelimiter(str) {
  return str
    .trim()
    .split(" ")
    .join("%20");
}

console.log(insertDelimiter("boo boo      "));

// 1.5 String compression a2b1c5a3, if compression doesn't save space, don't use it
// 1.6 of 6th edition

//copied
function compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = "";
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
    cStr += i - start + 1 + char;
  }

  return cStr.length < str.length ? cStr : str;
}
