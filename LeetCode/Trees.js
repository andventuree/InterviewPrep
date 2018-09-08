// Question making every node point to the node on their level to its right. If there is no node, it will be node.

// var connect = function(root) {
//   let queue = [root];
//   while (queue.length) {
//       let size = queue.length;
//       for (let i = 0; i < size; i++) {
//           let current = queue.shift();
//           if (current) {
//               current.next = i === size - 1 ? null : queue[0];
//               if (current.left) queue.push(current.left);
//               if (current.right) queue.push(current.right);
//           }
//       }
//   }
// };

// Question: get average of entire level
// https://leetcode.com/problems/average-of-levels-in-binary-tree/description/

// var connect = function(root) {
//   let averages = [];
//   let queue = [root];
//   while (queue.length) {
//     let size = queue.length;
//     let current = queue.shift();
//     if (current) {
//       if (current.left) queue.push(current.left);
//       if (current.right) queue.push(current.right);
//     }
//     averages.push(
//       (current.value +
//         queue.reduce((currentNode, total) => (total += currentNode.value))) /
//         size
//     );
//   }
// };
