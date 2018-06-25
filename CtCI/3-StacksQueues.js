/* Reading: ch 3 - Stacks and queues

Implementation is just liked linked list, except for how you add and delete from a linked list.

*/
// Stack implementation
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.previous = null;
  }
}

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
