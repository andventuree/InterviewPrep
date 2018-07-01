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
  print() {
    let head = this.head;
    let values = [];
    while (head) {
      values.push(head.value);
      head = head.next;
    }
    return values;
  }
}

function removeDuplicatesSet(list) {
  if (!list) {
    return list;
  }

  let seen = new Set(),
    node = list;

  // add head
  seen.add(node.val); //add in first value
  while (node.next) {
    //if it has a next node, into Set
    if (seen.has(node.next.val)) {
      //skip if set has value,
      node.next = node.next.next;
    } else {
      //else add into Set
      seen.add(node.next.val);
      node = node.next;
    }
  }
}

//2.1
// * Iterate through list keeping a Set of all the values seen. If a seen value is
// * seen again in the list then skip over it.
//time: O(n) -> have to go through all nodes
//space: O(n) -> Set holds all values
function removeDups(list) {
  if (!list) return list;
  let seen = new Set();
  let node = list;
  while (node.next) {
    if (seen.has(node.next.value)) {
      node = node.next.next;
    } else {
      seen.add(node.next.value);
    }
  }
  return seen;
}

//2.2
// * Walk one pointer ahead k nodes first then create a second pointer to the
// * start of the list. Walk both pointers until the first one hits the end of the
// * list, at that point the second pointer will be pointing to the kth to last
// * node.

//time: O(n) -> must go through all nodes
//space: O(1) -> only holding to references
function kFromLast(list, k) {
  if (!list) return list; //edge case for errors
  let last = list;
  let kth = list;
  for (let i = 0; i < k; i++) {
    //this walks last up to kth node
    last = last.next;
    if (!last) throw new Error("list is not long enough"); //edge case
  }

  while (last.next) {
    //this is the counter
    last = last.next; //now move both pointers together
    kth = kth.next;
  }
  return kth.value;
}

//2.3
// Implement an algorithm to delete a node in the middle (i.e., any node but the  rst and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// lnput:the node c from the linked lista->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks likea->b->d->e- >f
//time: O(1) - don't need to see any other node
//space: O(1)
function deleteNode(node) {
  if (!node || !node.next) throw new Error("this is an invalid node");
  //to delete, you dont need to hold a reference to it
  //rather, the lack of reference will be like deleting it
  node.value = node.next.value;
  node.next = node.next.next;
  //dont need to try to reference the previous node, b/c this is singly linked,
  //you can't get to it
}

// 2.4
// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

function partition(list, val) {
  let node = list;
  let smallerHead = null;
  let smallerTail = null;
  let largerHead = null;
  let largerTail = null;

  while (node) {
    let next = node.next;
    node.next = null; //this is necessary b/c once this is reordered, you want to override the existing ref
    if (node.value >= val) {
      if (!largerTail) {
        //implies there's no node at all
        largerHead = node;
        largerTail = node;
        largerTail.next = null;
      } else {
        //basically with new node, add to head
        let formerHead = largerHead;
        largerHead = node;
        largerHead.next = formerHead;
        // largerTail.next = node; //circular //why do we need this???
        // largerTail = node;
      }
    } else if (node.value < val) {
      if (!smallerTail) {
        smallerHead = node;
        smallerTail = node;
      } else {
        // smallerTail = node;
        // smallerTail.next = node;
        let formerHead = smallerHead;
        smallerHead = node;
        smallerHead.next = formerHead;
      }
    }
    node = next;
  }

  if (smallerTail) {
    smallerTail.next = largerHead;
  }

  let finalLL = smallerTail !== undefined ? smallerHead : largerHead;
  let finalValues = [];
  while (finalLL) {
    finalValues.push(finalLL.value);
    finalLL = finalLL.next;
  }
  console.log("Partitioned LL order: ", finalValues);
  // return smallerHead || largerHead;
  return (
    console.log("smallerHead: ", smallerHead) ||
    console.log("largerHead: ", largerHead)
  );
  //catches edge cases, if given a value < all values of LL or > all values
}

let testLL = new LinkedList(); //class written above
testLL.addToHead(5);
testLL.addToHead(6);
testLL.addToHead(4);
testLL.addToHead(7);
testLL.addToHead(8);
testLL.addToHead(9);
testLL.addToHead(2);

console.log("Original order of LL: ", testLL.print());
partition(testLL.head, 5);

/*

Create two lists around val (given).
Look at current node
  hold onto reference to current node's next
    then clear current node's next so once reordered, it doesn't have next ref anymore
  if this node.val is >= val
    then look at if largerTail !exist, the whole list is this node
    else if largerTail exists, then add this value to the tail only
  else node.val < val
    then look at if smallerHead !exists, the whole is this node
    else if smallerHead exists, then add this value to the tail only
  then check the next node

if there's a smaller side, connect the 2 partitions
  smallerTail.next = largerHead

return smallerHead if it exists, otherwise, just largerHead

*/

// 2.8
// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
// Output: C
//time: O(n) -> must visit all nodes
//space: O(n) -> Set will store each node
function findTheStart(list) {
  let visited = new Set(); //O(1) access time, O(n) space
  let node = list;

  while (node) {
    if (!visited.has(node)) visited.add(node);
    else return node;
    node = node.next;
  }

  return null;
}

//keep a set to see if you've seen this node before
//then add nodes if you haven't seen them
//if you have seen the same node, then you can return

//time: O(n) must go through entire list
//space: O(1) only holding references, no value
function findStart(list) {
  if (!list) return null;

  let slow = list;
  let fast = list;

  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break; //found loop
  }

  if (!slow || slow !== fast) return null; //no loop!

  //need the below step b/c code doesn't know for sure which is the reason why it broke out of while loop,
  //any of slow.next, fast.next or fast.next.next may not exist, so it uses the conditional to confirm

  slow = list; //reset slow
  while (slow !== fast) {
    //go at same pace, when slow === fast, then you've found start of loop
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}

//2 runners
//1 slow 1 fast
//have it run until it has reached either nodes are null or its the same node
//then run them 1 by 1, then when fast and slow meet, you've got the fast one

function findStart(list) {
  if (!list) return list;

  let slow = list;
  let fast = list;
  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break; //found loop
  }

  if (!slow || slow !== fast) return null;

  slow = list;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}
