//time: O(n)? b/c given array is only 2 and algo only goes through range once
//space: O(1) only storing total
// function sumAll(arr) {
//   let total = 0;
//   arr.sort((a, b) => a - b);
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     total += i;
//   }
//   return total;
// }

// sumAll([1, 4]);

//time: O(n * m) b/c you're going through each arr
//space: O(n) worst case is all elements are unique
function diffArray(arr1, arr2) {
  let unique = [];
  arr1.filter(elem => {
    if (arr2.indexOf(elem) === -1) unique.push(elem);
  });
  arr2.filter(elem => {
    if (arr1.indexOf(elem) === -1) unique.push(elem);
  });
  console.log(unique);
  return unique;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]

// diffArray(
//   ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
//   ["diorite", "andesite", "grass", "dirt", "dead shrub"]
// ); // ["diorite", "pink wool"]

//time: O(n * m) - goes thru array and compares each elem with rest of arguments
//space: O(n) - filter returns an array
function destroyer(arr) {
  let destroyThese = Array.from(arguments).slice(1);
  return arr.filter(elem => {
    return !destroyThese.includes(elem);
  });
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let allMatch = null;
  for (var i in collection) {
    allMatch = true;
    for (var key in source) {
      if (source[key] !== collection[i][key]) {
        allMatch = false;
      }
    }
    if (allMatch) arr.push(collection[i]);
  }
  // Only change code above this line
  console.log("final arr", arr);
  return arr;
}

// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// ); //[{ first: "Tybalt", last: "Capulet" }]
// whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// ); // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, cookie: 2 }
// ); // [{ "apple": 1, "bat": 2, "cookie": 2 }]
// whatIsInAName(
//   [
//     { apple: 1, bat: 2 },
//     { apple: 1 },
//     { apple: 1, bat: 2, cookie: 2 },
//     { bat: 2 }
//   ],
//   { apple: 1, bat: 2 }
// ); // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
// whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // []
