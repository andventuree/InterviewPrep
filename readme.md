## Interview Prep

Disclaimer: These are simply my notes for approach for analyzing algorithms. Happy to make changes or consider any suggestions provided.

### Interview observations:

<details><summary>Click Here</summary>

1. Generally, you'll need to be able to tackle easy/medium of these problems for typical companies:
   string/array manipulation (strings are secretly arrays)
   linked list
   trees (binary, binary search)
   stacks and queues

2. For JS developers, beware that your interview may be confused if you communicate data structures in only `objects` and `arrays`. In other programming languages, objects and arrays can broken down further.
   Objects: Hash table, hash set, hash map
   Arrays: Linked list, stacks, queues

3. Worst case for most sorting algorithms is typically O(n^2) b/c you're comparing one data structure to another and then rearranging it.

4. Functional programming

```
function outerFn(callbackArr) {
  //xyz, is available to inner function
  return function(input) {
    for (let i = callbackArr.length - 1; i >= 0; i--) {
      input = callbacks[i](values); //this invovkes function
    }
    return input;
  };
}
```

5. When given a string / array manipulation problem, complexity is at least O(n) b/c you'll have to look at each value in the string/array.

6. Companies want you to think outside the box. If you've already provided the most optimal approach, consider providing other solutions that are not as optimized.

#### Space trade-off for time

1. Sorted array implies using pointers - Remove 1 O(n) time
   When an array is sorted, 1 order of complexity can be removed from the naive approach. So think of ways to systematically use the array.

2. Memoization - Remove 1 O(n) time
   On the first pass on an array, use O(n) extra space to store the values into an object to get constant look up time. This will save you from making a second O(n) pass through an array to confirm if a value exists.
   Use memoization when duplicates matter
   See pro tip/tricks 6 below.

</details>

### Pro tips/tricks:

<details><summary>Click Here</summary>

1. Not enough parameters
   If given a problem and you're not allowed to change the parameters of the original function, make a helper that accepts more parameters.
   Time: Depends on operations in helper fn
   Space: Same as above
   Common use case: Recursion

```
function findClosestValueInBst(tree, target) {
  return findClosestHelper(tree, target, Infinity);
}

function findClosestHelper(tree, target, closestValue){ /* some operation happens */ };
```

2. String concatenation
   It may be tempting to use `str += letter` when asked to create a new string. But as an JS expert, you should know the inner workings of concatentation is an O(n) operation. This can add unnecessary complexity to your algorithm. Rather, create an array (aka string buffer) to store your characters and the desired order then join them at the end.
   However, there is speculation that JS is already optimized here so a string buffer does not make a difference. Either way, note this during an interview to at least communicate an awarenss of the issue.
   Time:
   Space:

```
let newLetters = [];
newLetters.push( /* some operation to add new letters */ )
return newLetters.join(",");
```

3. Array switcheroo
   Need to swap the places of two elements in an array? Use a helper function to clean up your logic.
   Time: O(1) - constant operation
   Space: O(1) - only holds a temporary variable that does not last beyond the iteration

```
function swap(index1, index2, array){
  let largerNum = arr[index1]; //assuming number at index1 is larger
  arr[index1] = arr[index2];
  arr[index2] = largerNum;
}
```

As arrays are passed by reference, calling this helper in your code will mutate the given array and give you the desired effect.
Also ES6 destructuring array isn't quite the same.

4. Binary Search
   You can use binary search whenever what you're working with is sorted or in order (e.g., array, number).
   Time: O(log n) - b/c you can remove half of the collection with each iteration
   Space: O(1) - only creates 3 (constant) variables which are not stored forever

```
function binarySearch(arr, target){
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end){
    let mid = Math.floor((begin + end) / 2)
    if (target = arr[mid]) return mid;
    else if (target > arr[mid]) begin = midpoint + 1;
    else if (target < arr[mid]) end = midpoint - 1;
  }
  return false;
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 8)
//This binary search determines if a target is contained in the array.
```

5. How to compare JS objects
   Cannot compare objects simply with `object1 === object2` as objects are simply references to places in memory. Therefore, a system approach must be used to compare all the properties of an object to another.

```
Code implementation to be provided
```

6. Memoization
   See time/space trade-off observation 2 above.

```
function findFirstDuplicat(arr){
  let memo = {};
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    if (memo[num]) return num;
    else memo[num] = 1; //or can use boolean true
  }
  return 'no duplicates'
}
```

7. Constant look up for a value based on entire data structure. Applied when using Objects, Trees, Nodes
   For example, you're looking for the smallest value in a given data structure and you want to find it in constant time. Add a property on the object or node of the data structure that keeps track of this value.

```
   class MinStack {
  constructor() {
    this._stack = []; //use an array
  }

  push(value) {
    //add value, also retain whether it is min
    let min = this.min();
    this._stack.push({
      value: value,
      //each node knows the min value, so it'll always be O(1)
      //compares whether min is smaller than value
      //if min is undefined, then its a large value so then value will be the min
      min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value)
    });
  }

  pop() {
    //give me last item
    if (!this.isEmpty()) {
      let item = this._stack.pop();
      return item.value;
    }
  }

  min() {
    //find the min,
    if (!this.isEmpty()) {
      let item = this._stack[this._stack.length - 1];
      return item.min;
    }
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}
```

8. JS Arrays, when you insert a value at an index that is not in order, it'll make empty spaces for values before that point.

```
class TripleStack {
  constructor() {
    this._array = [];
    this._length = [0, 0, 0];
  }
  _getLength(stack) {
    return this._length[stack - 1];
  }
  push(stack, value) {
    //find the right stack and right space to add a value
    let idx = this._getLength(stack) * 3 + stack - 1; //Memorize formula
    this._array[idx] = value; //adds value at precise place, not the same as "push"!
    ++this._length[stack - 1]; //-1 to acct for off by 1
    return this;
  }
  pop(stack) {
    let length = this._getLength(stack);
    let value;
    if (length > 0) {
      let idx = (length - 1) * 3 + stack - 1; //Memorize formula
      value = this._array[idx];
      this._array[idx] = undefined;
      --this._length[stack - 1]; //-1 to acct for off by 1
    }
    return value;
  }
  isEmpty(stack) {
    //if you want to see if a stack is empty
    return this._getLength(stack) === 0;
  }
}
```

9. Linked list is all about pointers (references to the next obj).
   Generally, you're proivded a singly linked list meaning you can either traverse from head OR tail. Sometimes, you'll need to reverse the linked list.

```
function reverseLinkedList(head){ //iterative
  let prevNode = null;
  while (head) {
    let originalNextNode = head.next;
    head.next = prevNode;
     // one thing to realize: we dont need to change head.value, cause each node already has that, rather, you're only updating the next "pointer/reference"
    prevNode = head; //makes the whole head available for later
    head = originalNextNode; //moves along while loop
  }
  return prevNode
}
```

10. Shifting up values in an array

```
function moveZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0) arr[count++] = arr[i];
  }

  while (count < arr.length) arr[count++] = 0;
  return arr;
}
```

```
function shiftUpAndInsertValue (arr, insertVal, specificIdx) {
  for(let i = 0; i <= specificIdx; i++) {
    if (i === specificIdx) arr[i] = insertVal;
    else arr[i] = arr[i + 1] //shifts up values
  }
}
```

11. Iterating through 2 arrays (or linked lists) that are different lengths
    Perfect for problems using the length of an array.

```
var index1 = digits1.length - 1;
var index2 = digits2.length - 1;
//loop backwards on the math.max of either of 2 arrays
for (var i = Math.max(index1, index2); i > 0; i--) {}
```

Linked lists

```
function findLinkedListIntersection(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;
  while (head1.value !== head2.value ) {
    head1 = head1.next === null ? list2.head : head1.next;
    head2 = head2.next === null ? list1.head : head2.next;
  }
  return head1;
}
```

</details>

### Hints

<details><summary>Click Here</summary>

1. When you're provided 2 array to compare (array) , that should hint that time complexity is likely an O(n^2) b/c you'll have to go through each structure

</details>
