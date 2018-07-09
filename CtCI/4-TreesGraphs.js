/* Reading: ch4 - Trees and graphs

When given a tree problem, you must clarify the facts. Incorrectly assuming something will derail the problem.
Look out for these issues:

1. Binary Tree vs Binary Search Tree
BT simply implies the left children are all lower than or equal to current node. Not that there's just 2 children.

2. Balanced vs Unbalanced
    6
  4   10
 2 5 8  || <-a node should go here
1     9  <-not balanced

Unbalanced means height is uneven. Balancing it out would be to allocate nodes where possible so the height is minimized. If a ndoe doesn't have 2 children, fill up their children.
If your tree is not balanced, describe your algorithm in terms of worst case and average case.

3. Full and Complete
Implies that all nodes have 2 children with the exception of leaves.
Highly unlikely to meet this condition.

4. Binary Tree Traversal
Get good at implementing a) in-order, b) post-order c)pre-order

5. Tree Balancing
Very rare! You should be familiar with the runtime operations on balanced trees,
and vaguely familiar with how you might balance a tree.

6. Tries
Each path down the tree just makes a word.

*/
