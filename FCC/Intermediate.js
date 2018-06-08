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
// translatePigLatin("california"); // "aliforniacay".
// translatePigLatin("paragraphs"); // "aragraphspay".
// translatePigLatin("glove"); // "oveglay".
// translatePigLatin("algorithm"); // "algorithmway".
// translatePigLatin("eight"); // "eightway".

// Incomplete - https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
//what you have to do is assign a firstName and lastName prop once an instance is created (NOT DONE)
//then you want to edit as necessary (DONE)
//
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
