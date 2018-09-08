// 1. find loop in LL
//time: O(n)
//space: O(1)
function findLoop(head) {
  let fast = head;
  let slow = head;
  while (slow.next && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  slow = head; //reset head again
  while (slow !== fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}
