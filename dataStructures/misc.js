//linked list
class Node {
  constructor(value) {
    this.value = value;
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
    let formerHead = this.head; //1) hold onto reference
    let newNode = new Node(val); //2) create a new node for val

    this.head = newNode; //3) assign the new head

    if (formerHead) {
      //4) make the connection
      this.head.next = formerHead;
      formerHead.previous = this.head;
    }

    if (!this.tail) this.head = this.tail; //5) if theres 1 node, its also the tail
  }

  removeHead() {
    let formerHead = this.head; //1) hold onto reference
    if (!formerHead) return; //2) if head didnt exist, then just return;

    if (formerHead.next) {
      //3) if head had a next
      this.head = formerHead.next; //then make that head
      this.head.previous = null; //reset new head's previous to null
    } else {
      //if no nodes left, reset it entirely
      this.head = null;
      this.tail = null;
    }
    return formerHead.value;
  }

  addToTail(val) {
    const formerTail = this.tail; //1) hold onto reference
    const newNode = new Node(val); //2) create new node for tail

    this.tail = newNode; //3) reassign tail

    if (formerTail) {
      //4) need to connect them
      this.tail.previous = formerTail;
      formerTail.next = this.tail;
    }

    if (!this.head) this.head = this.tail; //5) if just 1 node, and head is not assigned yet, then its also the head
  }

  removeTail() {
    const formerTail = this.tail; //1) hold onto reference
    if (!this.tail) return; //2) if tail didnt exist, then just return

    if (formerTail.previous) {
      //3) sever connection
      this.tail = formerTail.previous;
      this.tail.next = null;
    } else {
      //4) no nodes left
      this.head = null;
      this.tail = null;
    }

    return formerTail.value; //5) just return value
  }
}

//BST

class BST {
  constructor(val) {
    this.value = val;
    this.smaller = null;
    this.larger = null;
    this.size = 1;
  }

  insert(val) {
    const direction = val < this.value ? "smaller" : "larger";
    if (this[direction]) this[direction].insert(val);
    else this[direction] = new BST(val);
    this.size++;
  }
}
