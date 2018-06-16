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
