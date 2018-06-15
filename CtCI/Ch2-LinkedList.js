/* Reading: ch 2 - Linked list

Linked list questions don't vary too much from well known questions.

Runner technique - To save time iterating through, have more than 1 pointer
e.g., Pointer 1 = faster pointer that jumps nodes by 2
Pointer 2 = slower pointer that jumps nodes by 1
By the time Pointer 1 is done iterating through, Pointer 2 is likely at the midpoint

Generally, its easier to deal with LL through recursion. So give that approach an attempt first.

*/

// Linked list implementation
class Node {
  constructor(val) {
    this.value = val;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(val) {
    const formerHead = this.head;
    const newNode = new Node(val);
    this.head = newNode;
    if (formerHead) {
      this.head.next = formerHead;
      formerHead.previous = this.head;
    }
    if (!this.tail) this.tail = this.head;
  }

  removeHead(val) {
    const formerHead = this.head;
    if (!formerHead) return;
    if (formerHead.next) {
      this.head = formerHead.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return formerHead.value;
  }

  addToTail(val) {
    const formerTail = this.tail;
    const newNode = new Node(val);
    this.tail = newNode;
    if (formerTail) {
      formerTail.next = this.tail;
      this.tail.previous = formerTail;
    }
    if (!this.head) this.head = this.tail;
  }

  removeTail(val) {
    const formerTail = this.tail;
    if (!formerTail) return;
    if (formerTail.previous) {
      this.tail = formerTail.previous;
      this.tail.next = null;
    } else {
      this.tail = null;
      this.head = null;
    }
    return formerTail.value;
  }
}
