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

class Stack {
  constructor() {
    this.top = null;
  }

  addToTop(val) {
    const formerTop = this.top;
    const newNode = new Node(val);
    this.top = newNode;
    if (formerTop) {
      this.top.previous = formerTop;
      formerTop.next = this.top;
    }
  }

  removeTop() {
    const formerTop = this.top;
    if (!formerTop) return;
    if (formerTop.previous) {
      this.top = formerTop.previous;
      this.top.next = null;
    } else {
      this.top = null;
    }
    return formerTop.value;
  }

  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  remove() {
    let formerHead = this.head;
    if (formerHead) {
      this.head = formerHead.next;
    } else {
      return;
    }
    return formerHead.value;
  }

  add(val) {
    const formerTail = this.tail;
    const newNode = new Node(val);
    this.tail = newNode;
    if (formerTail) {
      formerTail.next = this.tail;
      this.tail.previous = formerTail;
    }
    if (!this.head) this.head = this.tail;
  }
}
