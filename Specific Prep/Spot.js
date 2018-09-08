// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

// Complexity: time: O(n^2) | space: O(n)
// renamed variables for reability: str = s | order = t
const sortByStrings = (str, order) => {
  let newStrArr = [];
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === order[i]) {
        newStrArr.push(str[j]);
      }
    }
  }
  return newStrArr.join("");
};

// console.log("sortByStrings: ");
// console.log(sortByStrings("good", "odg")); //oodg
// console.log(sortByStrings("weather", "therapyw")); //theeraw

// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// 1. Whenever we encounter any number, push it into the integer stack and in case of any alphabet (a to z) or open bracket (‘[‘), push it onto the character stack.
// 2. Whenever any close bracket (‘]’) is encounter pop the character from the character stack until open bracket (‘[‘) is not found in the character stack. Also, pop the top element from the integer stack, say n. Now make a string repeating the popped character n number of time. Now, push all character of the string in the stack.

// function decodeString(s) {
//   let repeatAmts = [];
//   let charArr = [];
//   let decoded = null;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i]
//     if (parseInt(char)) {
//       repeatAmts.push(parseInt(char));
//     } else if (char === "]") {
//       break;
//     } else {
//       charArr.push(char);
//     }
//   }

//   let encodedChunks = charArr.join("").split("[");
//   while (repeatAmts.length > 0) {
//     decoded = encodedChunks.pop().repeat(repeatAmts.pop());
//     encodedChunks[encodedChunks.length - 1] =
//       encodedChunks[encodedChunks.length - 1] + decoded;
//   }
//
// }

// Complexity: time: O(n^2) | space: O(n)
const decodeString = s => {
  let repeatAmts = [];
  let decodedStr = "";
  let decodedChunk = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (parseInt(char)) {
      //store char if its a number
      repeatAmts.push(parseInt(char));
    } else if (char === "]") {
      //encounter first close brack, start fully decoding strings
      decodedStr = decodedChunk.pop() + decodedStr.repeat(repeatAmts.pop());
    } else if (char === "[") {
      //before next nested section, chunk together current string
      decodedChunk.push(decodedStr);
      decodedStr = "";
    } else {
      //building up a string
      decodedStr += char;
    }
  }

  return decodedStr;
};

// console.log("decodeString: ");
// console.log(decodeString("4[ab]")); //"abababab"
// console.log(decodeString("2[b3[a]]")); //"baaabaaa"
// console.log(decodeString("5[b2[a1[n]]a-]")); //"banana-banana-banana-banana-banana-"

// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// Complexity: time O(amount * denominations) | space: O(amount)
const changePossibilities = (amount, denominations) => {
  let combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    let denom = denominations[i];
    for (let j = 1; j < amount + 1; j++) {
      if (denom <= j) {
        combinations[j] += combinations[j - denom];
      }
    }
  }
  return combinations[amount];
};

// console.log("changePossibilities: ");
// console.log(changePossibilities(4, [1, 2, 3])); //4 combinations to 4

// You have the opportunity to implement a new feature for a music app and are asked to present your idea to internal stakeholders. Describe your feature below, explaining how it works, why it should be implemented and any datapoints or resources you might use in the process.

/*
I believe its human nature to be curious about yourself. As a user of Spotify, I would like to see a snapshot of my music taste profile so I can explore areas that I appear to have mild preferences for that I did not know I had. e.g., lo-fi, indie-folk, indie-rock.

Spotify already has taste profiles saved in the Spotify API so this feature can be brought to life by building a view for it in the application.

Given these hints from my profile, this feature empowers me to actively find music I may like, potentially cultivating a larger appreciation for music and enabling personal growth by self discovery along the way.

Additionally, this view can be further enhanced by routing to specified genres/music categories when clicked on.

The benefit of this feature is it'll entice user's to stay on the application longer during their free time rather than just using Spotify as a music player. More time spent on Spotify can further strengthen its position as the premier music platform.
*/
