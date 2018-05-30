/*
  Uni-directional
  head -> next -> next -> tail

  Bi-directional
  head -> next -> next ->
      <- prev <- prev <- tail
*/

// Bi-directional
class Node {
  constructor(v) {
    this.value = v;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(v) {
    const newNode = new Node(v); //1) create node w/ value
    const formerHead = this.head; //2) hold onto reference to old head so it doesn't disappear

    this.head = newNode; //3) reassign new head

    if (formerHead) { //4) >1 node
      formerHead.previous = newNode; //4.1) extend LL by referring to the newNode
      newNode.next = formerHead; //4.2) connect newNode to LL
    }

    if (!this.tail) this.tail = newNode; //5) if 1st node, tail is also the newNode
  }

  addToTail(v) {
    const newNode = new Node(v); //1) create node w/ value
    const formerTail = this.tail; //2) hold onto old tail reference so it doesn't disappear

    this.tail = newNode; //3) reassign new tail

    if (formerTail) { //4) >1 node
      formerTail.next = newNode; //4.1) extend LL by referring to the newNode
      newNode.previous = formerTail; //4.2) connect newNode to LL
    }
    if (!this.head) this.head = this.tail; //5) if 1st node, head + tail is itself
  }

  removeHead() {
    const removedHead = this.head; //1) hold onto reference
    if (!removedHead) return; //2) if !head, do nothing
    if (removedHead.next) { //3) if >1 node,
      this.head = removedHead.next; //3.1) new head was the next reference
      this.head.previous = null; //3.2) reset the previous of newHead
    } else { //4) no more nodes left
      this.head = null;
      this.tail = null;
    }
    return removedHead.value; //5) return value of removed
  }

  removeTail() {
    const removedTail = this.tail; //1) hold onto reference
    if (!removedTail) return; //2) if !tail, do nothing
    if (removedTail.previous) { //3) if >1 node,
      this.tail = removedTail.previous; //3.1) new tail was the previous reference
      this.tail.next = null; //3.2) reset the next of newTail
    } else { //4) no more nodes left
      this.head = null;
      this.tail = null;
    }
    return removedTail.value; //5) return value of removed
  }

}
