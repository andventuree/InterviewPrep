// types: array, string, stacks, BT, BST, LL, tries, graphs, heaps, DP, recursion, sorting, search
// source: leetcode, AE, ctci, bbg

class Question {
  constructor(learned, level = null, name, source = null, type = null) {
    this.name = name;
    this.learned = learned;
    this.level = level;
    this.source = source;
    this.type = type;
  }
}

class QuestionList {
  constructor() {
    this._questions = [];
  }

  //time: O(1) | space: O(1)
  add(learned, level, name, source, type) {
    this._questions.push(new Question(learned, level, name, source, type));
    return this;
  }

  //time: O(n) | space: O(n)
  genQuestions(num, type, source) {
    let list = this._questions.filter(quest => quest.learned);
    if (type || source) list = this.addFilters(list, type, source);
    let maxQuestions = list.length;
    let uniques = new Set("-"); //need to give set a value to give it size to trigger while loop
    let numOfQuestions = Math.min(num, maxQuestions);
    while (uniques.size <= numOfQuestions) {
      if (numOfQuestions === 0) {
        console.log(`No questions by these criteria: ${type} ${source}`);
      }
      let questionNum = Math.floor(Math.random() * maxQuestions);
      if (!uniques.has(questionNum)) uniques.add(list[questionNum]);
      else break;
    }

    let date = this.dateToday();
    console.log(`**************** Homework for ${date} ****************`);
    uniques.forEach(quest => console.log(quest));
  }

  addFilters(list, type, source) {
    if (type !== "all") {
      list = list.filter(quest => quest.type === type);
    }
    if (source !== null) {
      list = list.filter(quest => quest.source === source);
    }
    return list; //dont need to return this
  }

  dateToday() {
    return new Date().toDateString();
  }
}

let homeworkTonight = new QuestionList()
  .add(true, "easy", "Two Number Sum", "AE", "array")
  .add(true, "easy", "Find Closest Value in BST", "AE", "BST")
  .add(true, "easy", "Depth First Search", "AE", "graphs")
  // .add(false, "easy", "Nth Fib", "AE", "recursion") //started but didnt fully understand
  .add(true, "easy", "Binary Search", "AE", "search")
  .add(true, "easy", "Find 3 Largest Num Sum", "AE", "search")
  .add(true, "easy", "Bubble Sort", "AE", "sorting")
  .add(true, "easy", "Insert Sort", "AE", "sorting")
  .add(true, "easy", "Selection Sort", "AE", "sorting")
  .add(true, "easy", "Palindrome Check", "AE", "string")
  .add(true, "easy", "Caesar Cipher Encryptor", "AE", "string")
  //Medium ------------------------------------------
  .add(true, "medium", "Three Number Sum", "AE", "array")
  .add(true, "medium", "Smallest Difference", "AE", "array")
  .add(true, "medium", "BST Construction", "AE", "BST")
  .add(true, "medium", "Validate BST", "AE", "BST")
  .add(true, "medium", "BST Traversal", "AE", "BST")
  .add(true, "medium", "Invert Binary Tree", "AE", "BT") //like BFS of BST
  // .add(false, "medium", "Max Subset Sum No Adjacent", "AE", "DP")
  .add(true, "medium", "Number of Ways to Make Change", "AE", "DP")
  // .add(false, "medium", "Min Number of Coins", "AE", "DP")
  // .add(false, "medium", "Levenshtein Distance", "AE", "DP")
  .add(true, "medium", "Kadanes Algo - Max Sum", "AE")
  .add(true, "medium", "Breath-First Search", "AE", "graphs") //basically tree with children
  // .add(false, "medium", "River Sizes", "AE", "graphs")
  // .add(false, "medium", "Min Heap Construction", "AE", "heaps") //started but didnt fully understand
  .add(true, "medium", "Remove kth Node from End", "AE", "LL")
  .add(true, "medium", "Permutations", "AE", "recursion")
  // .add(false, "medium", "Powerset", "AE", "recursion")
  // .add(false, "medium", "Search in Sorted Matrix", "AE", "search")
  .add(true, "medium", "Balanced Brackets", "AE", "stacks")
  // .add(false, "medium", "Longest Palindrome SubString", "AE", "string")
  // .add(false, "medium", "Suffix Trie Construction", "AE", "tries")
  //Hard ------------------------------------------
  .add(true, "hard", "Water Area / Trap Rain", "AE", "DP")
  .add(true, "hard", "Find loop", "AE", "LL");

//bbg popular questions
homeworkTonight
  //Most common ------------------------------------------
  .add(true, "", "add nums of 2 linked list", "bbg", "LL")
  .add(true, "", "reverseLinkedList", "bbg", "LL")
  .add(true, "", "reverse integer", "bbg", "")
  .add(true, "", "most traded", "bbg", "")
  .add(true, "", "first unique character in a string", "bbg", "string")
  .add(true, "", "linked list cycle", "bbg", "LL")
  .add(true, "", "valid parentheses", "bbg", "") //same as AE balanced brackets
  .add(true, "", "trap rain water", "bbg", "") //same as AE water area
  .add(true, "", "string compression", "bbg", "string")
  .add(true, "", "move zeros", "bbg", "array")
  .add(true, "", "intersection of two linked lists", "bbg", "LL")
  .add(true, "", "validate BST", "bbg", "BST")
  .add(true, "", "min stack", "bbg", "stack");
//Less common ------------------------------------------
// .add(true, "", "merge sorted array", "bbg", "array")
// .add(true, "", "third maximum number", "bbg", "array")
// .add(true, "", "palindrome linked list", "bbg", "LL")
// .add(true, "", "plus one linked list", "bbg", "LL")
// .add(true, "", "valid anagram", "bbg", "string")
// .add(true, "", "invert binary tree", "bbg", "BST");

//ctci
homeworkTonight.add();

//Pramp
homeworkTonight
  .add(true, "hard", "getNumberOfIslands", "pramp", "graphs") //matrix
  .add(true, "hard", "root", "pramp", "binary search")
  .add(true, "medium", "shiftedArray", "pramp", "array")
  .add(true, "easy", "merging 2 packages", "pramp", "array")
  .add(true, "easy", "pancake sort", "pramp", "stack") //backwards insertion sort
  .add(true, "medium", "flatten dictionary", "pramp", "object");

let tricks = new QuestionList()
  .add(true, "", "binary search")
  .add(true, "", "shift array up by 1")
  .add(true, "", "swap arr spaces")
  .add(true, "", "insertion sort")
  .add(true, "", "selection sort")
  .add(true, "", "bubble sort")
  .add(true, "", "add nums by array back to front ")
  .add(true, "", "delete linked list pointer")
  .add(true, "", "reverse linked list")
  .add(true, "", "return fn that excutes callbacks on input")
  .add(true, "", "memo calculation")
  .add(true, "", "shift up nums + add val at specific idx")
  .add(true, "", "pancake sort (stack)");

module.exports = {
  homeworkTonight,
  tricks
};
