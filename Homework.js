class Question {
  constructor(learnedStatus, difficulty, name, source) {
    this.learnedStatus = learnedStatus;
    this.difficulty = difficulty;
    this.name = name;
    this.source = source;
  }
}

class QuestionList {
  constructor() {
    this._questions = [];
  }

  add(learnedStatus, difficulty, name, source) {
    this._questions.push(new Question(learnedStatus, difficulty, name, source));
    return this;
  }

  generateRand(num) {
    //get list of completed questions
    //then give me a random ones from that list
    let practiceList = this._questions.filter(quest => {
      if (quest.learnedStatus) return quest;
    });
    let max = practiceList.length - 1;
    let hwQuestions = [];
    for (let i = 0; i < num; i++) {
      let questionIdx = Math.floor(Math.random() * max);
      hwQuestions.push(practiceList[questionIdx]);
    }
    let currentDate = new Date().toDateString();
    console.log(
      `**************** Homework for ${currentDate} ****************`
    );
    console.log(hwQuestions);
  }
}

let homeworkTonight = new QuestionList()
  .add(true, "easy", "Two Number Sum", "AE")
  .add(true, "easy", "Find Closest Value in BST", "AE")
  .add(true, "easy", "Depth First Search", "AE")
  .add(false, "easy", "Nth Fib", "AE")
  .add(true, "easy", "Binary Search", "AE")
  .add(false, "easy", "Find 3 Largest Num Sum", "AE")
  .add(true, "easy", "Bubble Sort", "AE")
  .add(true, "easy", "Insert Sort", "AE")
  .add(true, "easy", "Selection Sort", "AE")
  .add(true, "easy", "Palindrome Check", "AE")
  .add(true, "easy", "Caesar Cipher Encryptor", "AE")
  .add(true, "medium", "Three Number Sum", "AE")
  .add(true, "medium", "Smallest Difference", "AE")
  .add(true, "medium", "BST Construction", "AE")
  .add(true, "medium", "Validate BST", "AE")
  .add(true, "medium", "BST Traversal", "AE")
  .add(false, "medium", "Invert Binary Tree", "AE")
  .add(false, "medium", "Max Subset Sum No Adjacent", "AE")
  .add(true, "medium", "Number of Ways to Make Change", "AE")
  .add(false, "medium", "Min Number of Coins", "AE")
  .add(false, "medium", "Levenshtein Distance", "AE")
  .add(true, "medium", "Kadanes Algo - Max Sum", "AE")
  .add(false, "medium", "Breath-First Search", "AE")
  .add(false, "medium", "River Sizes", "AE")
  .add(false, "medium", "Min Heap Construction", "AE")
  .add(false, "medium", "Remove kth Node from End", "AE")
  .add(true, "medium", "Permutations", "AE")
  .add(false, "medium", "Powerset", "AE")
  .add(false, "medium", "Search in Sorted Matrix", "AE")
  .add(false, "medium", "Balanced Brackets", "AE")
  .add(false, "medium", "Longest Palindrome SubString", "AE")
  .add(false, "medium", "Suffix Trie Construction", "AE");

homeworkTonight.generateRand(5);
