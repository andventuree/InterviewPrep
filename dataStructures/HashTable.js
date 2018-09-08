//This is a formal HashTable. Generally, you can simply use an object with arrays at each index.
//Answer with this if asked to produce a class HashTable

class HashNode {
  constructor(key, val) {
    this.key = key;
    this.value = val;
  }
}

class HashTable {
  constructor(num) {
    this.buckets = new Array(num);
    this.numBuckets = num;
  }

  set(key, value) {
    let hash = this.hash(key);
    this.buckets[hash] = this.buckets[hash] || [];
    this.buckets[hash].push(new HashNode(key, value));
  }

  get(key) {
    let hash = this.hash(key);
    let arr = this.buckets[hash];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) return arr[i].value;
    }
    return false;
  }

  hasKey(key) {
    let hash = this.hash(key);
    let arr = this.buckets[hash];
    if (!arr) return false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].key === key) return true;
    }
    return false;
  }

  hash(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum % this.numBuckets;
  }
}

let testHashTable = new HashTable(10);
testHashTable.set("booger", "i picked first");
testHashTable.set("ham", "not a fan of");
testHashTable.set("xyz", "abc");
console.log(
  testHashTable
); /* HashTable {
  buckets: [ [ [Object] ], , , [ [Object] ], , , , , [ [Object] ],  ],
  numBuckets: 10 } */
console.log(testHashTable.get("ham")); //not a fan
console.log(testHashTable.hasKey("ham")); //true
console.log(testHashTable.hasKey("cheese")); //false
