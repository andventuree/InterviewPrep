/* Heaps - basically arrays that are not sorted.

Heap is a version of a tree that is NOT sorted!

min heap - only property is that the very root node is the smallest value.
max heap - largest value at the top
Complete and full - All children have 2 children with the exception of leaves that do not have children

Complexity:
  sift down & sift up - Time O(log n) b/c you can always eliminate part of the tree with each traversal.

  insertion & remove - Time O(log n) same as above b/c it essentially uses sift down & sift up to reorganize the tree as necessary

  build heap - Time O(n) - Strange b/c you'd think it would take O(n log n) b/c you gotta go to each node O(n) and you use `sift down` O(log n). But its b/c you dont need to traverse when you're on a leaf. You only traverse when there's a parent and given a value, you only need to sift so many times before the tree is constructed correctly. So you never really go more than the full array.

  When building a heap, its more optimal to use sift down than up.
  However, if you implement build heap with `sift up` instead, all the leaves have to move up to root (not the reverse) and that increases complexity to O(n log n).
*/

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  //time O(log n) | space O(1)
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2); //formula for finding parent
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      console.log(
        "heap[currentIdx], heap[parentIdx]: ",
        heap[currentIdx],
        heap[parentIdx]
      );
      //if value is less than parent, then swap its position?
      this.swap(currentIdx, parentIdx, heap);
      //swap position of parent b/c value is smaller and should be parent now
      currentIdx = parentIdx;
      //find new parent idx
      parentIdx = Math.floor((currentIdx - 1) / 2);
      console.log("change parentIdx to: ", parentIdx);
      //loop goes again
    }
    console.log(this.heap);
  }

  //time O(log n) | space O(1)
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1; //formula for first child
    while (childOneIdx <= endIdx) {
      //currentIdx * 2 + 2 = formula for other child
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  //time O(1) | space O(1)
  peak() {
    //only looks at first node
    return this.heap[0];
  }

  //time O(log n) | space O(1)
  insert(value) {
    //add value to back of array
    this.heap.push(value);
    //since its, at the back, it'll be the child of something,
    //so it'll need to shift up to necessary node
    this.siftUp(this.heap.length - 1, this.heap);
  }

  //time O(log n) | space O(1)
  remove() {
    //can only remove the root node so:
    //swap the first elem to last elemn then pop it off
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    //then rebalance tree
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  swap(i, j, heap) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

let testMinHeap = new MinHeap([
  48,
  12,
  24,
  7,
  8,
  -5,
  24,
  391,
  24,
  56,
  2,
  6,
  8,
  41
]);

testMinHeap.insert(5);
