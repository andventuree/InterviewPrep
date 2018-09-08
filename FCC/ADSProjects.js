//1.
function palindrome(str) {
  let cleanStr = str.replace(/[\W_]+/g, "").toLowerCase();
  console.log(cleanStr);
  let left = 0;
  let right = cleanStr.length - 1;
  while (left <= right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

//3.
function rot13(str) {
  // LBH QVQ VG!
  let converteredLetters = [];
  for (let letter in str) {
    converteredLetters.push(newLetter(str[letter], 13));
  }
  return converteredLetters.join("");
}

function newLetter(letter, key) {
  if (["!", ".", "?", " "].indexOf(letter) !== -1) return letter;
  let newLetterCode = letter.charCodeAt(0) + key;
  if (newLetterCode <= 90) {
    return String.fromCharCode(newLetterCode);
  } else {
    return String.fromCharCode(64 + (newLetterCode % 90));
  }
}
// Change the inputs below to test
// rot13("SERR PBQR PNZC");
// rot13("SERR CVMMN!");

//2.
function convertToRoman(num) {
  return num;
}

// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1,000

convertToRoman(2); //should return "II"
convertToRoman(3); //should return "III"
convertToRoman(4); //should return "IV"
convertToRoman(5); //should return "V"
convertToRoman(400); //should return "CD"
convertToRoman(500); //should return "D"
convertToRoman(501); //should return "DI"
convertToRoman(649); //should return "DCXLIX"
convertToRoman(798); //should return "DCCXCVIII"
convertToRoman(891); //should return "DCCCXCI"
