/*
  Uni-directional
  head -> next -> next -> tail
*/

//cycle =/= loop
// 1 - 2 - 3 - 4 - 5 - 3 - 4 - 5 loop - starts off then hits a point that cycles in the middle
// 1 - 2 - 3 - 4 - 1 - 2 - 3 - 4 cycle - goes round and round

class SingleNode {
  constructor(v) {
    this.value = v;
    this.next = null;
    console.log("single node being added: ", v);
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(v) {
    const newNode = new SingleNode(v); //1) create node w/ value
    const formerHead = this.head; //2) hold onto reference to old head so it doesn't disappear

    this.head = newNode; //3) reassign new head

    if (formerHead) {
      //4) >1 node
      newNode.next = formerHead; //4.1) connect newNode to LL
    }

    if (!this.tail) this.tail = newNode; //5) if 1st node, tail is also the newNode
  }

  // addToTail(v) {
  //   const newNode = new SingleNode(v); //1) create node w/ value
  //   const formerTail = this.tail; //2) hold onto old tail reference so it doesn't disappear

  //   this.tail = newNode; //3) reassign new tail

  //   if (formerTail) {
  //     //4) >1 node
  //     formerTail.next = newNode; //4.1) extend LL by referring to the newNode
  //   }
  //   if (!this.head) this.head = this.tail; //5) if 1st node, head + tail is itself
  // }

  removeHead() {
    const removedHead = this.head; //1) hold onto reference
    if (!removedHead) return; //2) if !head, do nothing
    if (removedHead.next) {
      //3) if >1 node,
      this.head = removedHead.next; //3.1) new head was the next reference
    } else {
      //4) no more nodes left
      this.head = null;
      this.tail = null;
    }
    return removedHead.value; //5) return value of removed
  }

  // removeTail() {
  //   const removedTail = this.tail; //1) hold onto reference
  //   if (!removedTail) return; //2) if !tail, do nothing
  //   if (removedTail.previous) {
  //     //3) if >1 node,
  //     this.tail.next = null; //3.1) reset the next of newTail
  //   } else {
  //     //4) no more nodes left
  //     this.head = null;
  //     this.tail = null;
  //   }
  //   return removedTail.value; //5) return value of removed
  // }

  print() {
    console.log(this);
  }
}

// let singleList = new SinglyLinkedList();
// singleList.addToHead(1);
// singleList.addToHead(2);
// singleList.addToHead(3);
// singleList.addToHead(4);
// singleList.addToHead(5);
// singleList.print();

/*
  Bi-directional
  head -> next -> next ->
      <- prev <- prev <- tail
*/

class Node {
  constructor(v) {
    this.value = v;
    this.previous = null;
    this.next = null;
    console.log("node being added: ", v);
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

    if (formerHead) {
      //4) >1 node
      formerHead.previous = newNode; //4.1) extend LL by referring to the newNode
      newNode.next = formerHead; //4.2) connect newNode to LL
    }

    if (!this.tail) this.tail = newNode; //5) if 1st node, tail is also the newNode
  }

  addToTail(v) {
    const newNode = new Node(v); //1) create node w/ value
    const formerTail = this.tail; //2) hold onto old tail reference so it doesn't disappear

    this.tail = newNode; //3) reassign new tail

    if (formerTail) {
      //4) >1 node
      formerTail.next = newNode; //4.1) extend LL by referring to the newNode
      newNode.previous = formerTail; //4.2) connect newNode to LL
    }
    if (!this.head) this.head = this.tail; //5) if 1st node, head + tail is itself
  }

  removeHead() {
    const removedHead = this.head; //1) hold onto reference
    if (!removedHead) return; //2) if !head, do nothing
    if (removedHead.next) {
      //3) if >1 node,
      this.head = removedHead.next; //3.1) new head was the next reference
      this.head.previous = null; //3.2) reset the previous of newHead
    } else {
      //4) no more nodes left
      this.head = null;
      this.tail = null;
    }
    return removedHead.value; //5) return value of removed
  }

  removeTail() {
    const removedTail = this.tail; //1) hold onto reference
    if (!removedTail) return; //2) if !tail, do nothing
    if (removedTail.previous) {
      //3) if >1 node,
      this.tail = removedTail.previous; //3.1) new tail was the previous reference
      this.tail.next = null; //3.2) reset the next of newTail
    } else {
      //4) no more nodes left
      this.head = null;
      this.tail = null;
    }
    return removedTail.value; //5) return value of removed
  }

  print() {
    console.log("Doubly linked list: ", this);
  }

  search(comparator) {
    let currentNode = this.head;

    //edge case: if given a string instead of a callback
    if (typeof comparator === "string") {
      const comparatorString = comparator;
      comparator = function(elementValue) {
        return comparatorString === elementValue;
      };
    }

    //if given a callback, go straight into finding node
    while (currentNode !== null) {
      if (comparator(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;
  }
}

let list = new LinkedList();
list.addToHead(1);
list.addToTail(4);
// list.addToHead(3);
// list.addToHead(4);
list.print();
// list.removeHead();
// list.removeHead();
// list.print();

//206
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let reversedVersion = new LinkedList(); //create a new LL to return
  reversedVersion.addToHead(head.value); //start off the LL with the head provided
  while (head.next) {
    //if there are any .nexts, then you:
    reversedVersion.addToHead(head.next.value); //add .nexts' val to the head
    head = head.next;
  }
  return reversedVersion;
};

let reversed = reverseList(list.head);
console.log("reversed: ", reversed);

//Linked list is all about holding onto references, even if its temporarily.

//Triple Stack //leetcode
class TripleStack {
  constructor() {
    this.stacks = [];
    this.length = [0, 0, 0];
  }
  getLength(stack) {
    return this.length[stack - 1];
  }
  push(stack, val) {
    let length = this.getLength(stack);
    let idx = length * 3 + stack - 1;
    this.stacks[idx] = val;
    this.length[stack - 1] += 1;
  }

  pop(stack) {
    let length = this.getLength(stack);
    if (length > 0) {
      let idx = length * 3 + stack - 1;
      let value = this.stack[idx];
      this.stack[idx] = undefined;
      this.length[stack - 1] -= 1;
      return value;
    }
  }
}

//LinkedList with duplicates
function removeLLDuplicates(head) {
  let set = {};
  while (head) {
    if (!set[head.value]) set[head.value] = true;
    else {
      //deletes reference to duplicate nodes
      head.value = head.next.value;
      head.next = head.next.next;
    }
    head = head.next;
  }
}

// 1 - 2 - |2| - 3 - 4
//head.value 3 = head.next.value;
//head.next 4 = head.next.next
//head.previous // dont need to rewire b/c its already good
