/* Reading: ch 3 - Stacks and queues

Implementation is just liked linked list, except for how you add and delete from a linked list.

*/
// Stack implementation
// class Node {
//   constructor(val) {
//     this.value = val;
//     this.next = null;
//     this.previous = null;
//   }
// }

// class Stack {
//   //add to tail, remove tail
//   constructor() {
//     this.top = null;
//   }

//   addToTop(val) {
//     const formerTop = this.top;
//     const newNode = new Node(val);
//     this.top = newNode;
//     if (formerTop) {
//       this.top.previous = formerTop;
//       formerTop.next = this.top;
//     }
//   }

//   removeTop() {
//     const formerTop = this.top;
//     if (!formerTop) return;
//     if (formerTop.previous) {
//       this.top = formerTop.previous;
//       this.top.next = null;
//     } else {
//       this.top = null;
//     }
//     return formerTop.value;
//   }

//   peek() {
//     return this.top.value;
//   }
// }

// class Queue {
//   //add to tail, remove head
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   addTail(val) {
//     let formerTail = this.tail;
//     let newNode = new Node(val);
//     this.tail = newNode;
//     if (formerTail) {
//       this.tail.previous = formerTail;
//       formerTail.next = this.tail;
//     }
//     if (!this.head) this.head = this.tail;
//     return this;
//   }

//   removeHead() {
//     let formerHead = this.head;
//     if (!formerHead) return "no head";
//     if (formerHead.next) {
//       this.head = formerHead.next;
//       this.head.previous = null;
//     } else {
//       this.head = null;
//       this.tail = null;
//     }
//     return formerHead.value;
//   }
// }

// let testQueue = new Queue().addTail(5).addTail(8);
// console.log(testQueue.removeHead());
// console.log(testQueue.removeHead());

//3.1
// Three in One: Describe how you could use a single array to implement three stacks.
// Hints: #2, #72, #38, #58

//   0 index | 1 index | 2 index
// [ 7, 2, 1 | 2, 3, 5 | 1, 2, 6 ]
// idx = this._getLength(stack) * 3 + stack - 1 (off by 1 offset)

// let testTripleStack = new TripleStack();
// testTripleStack.push(1, 6).push(1, 6).push(1, 6).push(1, 6).push(1, 6).push(1, 6);
// console.log(testTripleStack._array); // [ 6, , , 6, , , 6, , , 6, , , 6, , , 6 ]
// Dont need to worry about empty items in other stacks

// testTripleStack.push(1, 6).push(1, 6).push(1, 6).push(1, 6).push(2, 7).push(2, 7).push(1, 6);
// console.log(testTripleStack._array); // [ 6, 7, , 6, 7, , 6, , , 6, , , 6 ]

// Pro tip: If you assign a value to a specific index of array, then it'll fill in empty spaces

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
  peek(stack) {
    let length = this._getLength(stack);
    let value;
    if (length > 0) {
      let idx = this._getLength(stack) * 3 + stack - 1;
      value = this._array[idx];
      return value;
    }
  }
  isEmpty(stack) {
    //if you want to see if a stack is empty
    return this._getLength(stack) === 0;
  }
}

//3.2
// Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
//how to create this methods that are native to JS b/c java doesn't auto have this
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

  peek() {
    //show me last item
    if (!this.isEmpty()) {
      let item = this._stack[this._stack.length - 1];
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

// 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
//time: O(1) for enqueuing | O(n) for dequeuing
//space: O(n) -> need to store the dequeue somewhere
class DoubleStackQueue {
  constructor() {
    this.eStack = [];
    this.dStack = [];
  }

  enqueue(value) {
    this.eStack.push(value);
  }

  dequeue() {
    if (this.dStack.length === 0 && this.eStack.length === 0) {
      throw new Error("queue is empty");
    }
    if (this.dStack.length === 0) {
      //fill up dequeue if its empty
      while (this.eStack.length > 0) {
        this.dStack.push(this.eStack.pop()); //effectively reverseing the order of items
      }
    }
    return this.dStack.pop(); //take whatever you can dequeue
  }
}
