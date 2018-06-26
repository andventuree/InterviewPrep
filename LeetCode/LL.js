// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/
//time: O(1)
//space: O(1)
var deleteNode = function(node) {
  if (!node || !node.next) throw new Error("invalid");
  node.val = node.next.val;
  node.next = node.next.next;
};

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var removeNthFromEnd = function(head, n) {
  let last = head;
  let beforeNth = head;
  for (let i = 0; i < n - 1; i++) {
    last = last.next;
  }

  while (last.next !== null) {
    last = last.next;
    beforeNth = beforeNth.next;
  }

  let nth = beforeNth.next;
  beforeNth.val = beforeNth.next.val;
  beforeNth.next = beforeNth.next.next;
  return head;
};

// removeNthFromEnd([1, 2, 3, 4, 5], 2); //[[1,2,3,5] //can't test here b/c you dont have the linked list

let LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(3);
LL.next.next.next = new ListNode(4);
LL.next.next.next.next = new ListNode(5);
// console.log(LL);
console.log(JSON.stringify(removeNthFromEnd(LL, 2)));
