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

//time: O(n * m) - b/c collection and source can have diff num of keys
//space: O(n) - worst case would store all elements of collection
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let allMatch = null;
  for (let i in collection) {
    allMatch = true;
    for (let key in source) {
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

//time: not sure time complexity of regex but likely O(2n) => O(n);
//space: O(1) - only store string
function spinalCase(str) {
  str = str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+|_+/g, "-")
    .toLowerCase();
  return str;
}

// spinalCase("This Is Spinal Tap");
// spinalCase("thisIsSpinalTap"); // "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show"); // "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh"); // "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things"); // "all-the-small-things".

function translatePigLatin(str) {
  let vowels = "aeiou";
  let consonants = "bcdfghjklmnpqrstvwxyz";
  if (vowels.indexOf(str[0])) return (str += "way");
  let vowelIndex = 0;

  return str;
}

// translatePigLatin("consonant");
// translatePigLatin("california"); // "aliforniacay"
// translatePigLatin("paragraphs"); // "aragraphspay"
// translatePigLatin("glove"); // "oveglay"
// translatePigLatin("algorithm"); // "algorithmway"
// translatePigLatin("eight"); // "eightway"

//time: O(n^3) - double for loops and indexOf is another loops!
//improved with:
//time: O(n^2) - only 2 for loops, used hash table instead of indexOf
//space: O(n) - only takes uniques so not more than all the arrays provided
function uniteUnique(arr) {
  let args = Array.from(arguments);
  let store = {};
  arr.forEach(elem => (store[elem] = true));
  let finalArr = arr;
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      // console.log(args[i][j], args[i]);
      if (!store[args[i][j]]) {
        //used a hashtable instead of indexOf
        store[args[i][j]] = true;
        finalArr.push(args[i][j]);
      }
    }
    console.log("!!!!", store);
  }
  arr = finalArr;
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //[1,3,2,5,4]

//time: O(n) - need to look through all elems
//space: O(1) - doesn't really need to stoe anything
function fearNotLetter(str) {
  let missingLetter;
  console.log("start");
  for (let i = 0; i < str.length - 1; i++) {
    let currentChar = str[i].charCodeAt(0);
    let nextChar = str[i + 1].charCodeAt(0);
    if (currentChar + 1 !== nextChar) {
      missingLetter = String.fromCharCode(currentChar + 1);
    }
  }
  return missingLetter;
}

fearNotLetter("abce");

function steamrollArray(arr) {
  return arr.reduce(
    (r, e) =>
      Array.isArray(e) ? (r = r.concat(steamrollArray(e))) : r.push(e) && r,
    []
  );
}

//time: O(n) - need to go through every elem to check
//space: O(n) - worst case, first elem is true and we want all of them
function dropElements(arr, func) {
  let newArr = [];
  let i = 0;
  while (!func(arr[i])) {
    i += 1;
  }
  newArr = arr.slice(i);
  return newArr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});

//time: O(n) - need to go through each letter but no compounding
//space: O(n) - need to temp store each letter
function binaryAgent(str) {
  let binaryArr = str.split(" ");
  let letterArr = binaryArr.map(bi =>
    String.fromCharCode(parseInt(bi, 2).toString(10))
  );
  return letterArr.join("");
}

// binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// );

//time: O(n) - does only 1 pass through
//space: O(1) - not storing anything
function truthCheck(collection, pre) {
  let allTrue = true;
  collection.forEach(elem => {
    if (!elem[pre]) allTrue = false;
  });
  return allTrue;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//time: O(1) - does only 1 pass through
//space: O(1) - not storing anything
function addTogether() {
  let args = Array.from(arguments);
  if (args.length === 1) {
    if (typeof args[0] !== "number") return;
    let x = args[0];
    return y => {
      if (typeof y !== "number") return;
      return x + y;
    };
  } else if (args.length === 2) {
    if (typeof args[0] !== "number" || typeof args[1] !== "number") return;
    return args.reduce((a, b) => a + b);
  }
}

// addTogether(2, 3);

//time: O(1) - only 2 values in array and length never increases
//space: O(1) - only 2 values in array
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFullName = function() {
    return firstName + " " + lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(first) {
    firstName = first;
  };
  this.setLastName = function(last) {
    lastName = last;
  };
  this.setFullName = function(fullName) {
    // console.log(firstAndLast);
    let splitName = fullName.split(" ");
    firstName = splitName[0];
    lastName = splitName[1];
  };
};

// var bob = new Person("Bob Ross");
// console.log(bob.getFullName());
// bob.setFirstName("Haskell");
// console.log("Haskell Ross:", bob.getFullName()); //"Haskell Ross"
// bob.setLastName("Curry");
// console.log("Haskell Curry:", bob.getFullName()); //"Haskell Curry"
// bob.setFullName("Haskell Curry");
// console.log("Haskell Curry:", bob.getFullName()); //"Haskell Curry"
// bob.setFullName("Haskell Curry");
// console.log("Haskell:", bob.getFirstName()); //"Haskell"
// bob.setFullName("Haskell Curry");
// console.log("Curry:", bob.getLastName()); //"Curry"

//time: O(n) - must may through each obj passed in from array
//space: O(n) - new array is created
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let array = [];

  array = arr.map(function(obj) {
    var createdObj = {};
    createdObj.name = obj.name;
    createdObj.orbitalPeriod = Math.round(
      2 * Math.PI * Math.pow(Math.pow(obj.avgAlt + earthRadius, 3) / GM, 0.5)
    );
    return createdObj;
  });
  return array;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
