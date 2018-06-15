/* Reading: ch 9 - Recursion

Use recursion when there are small sub problems. You can tell by:
"Design an algorithm to compute the nth..."
"Write code to list the first n..."
"Implement a method to compute all"

Approachs:
a) Bottom up
Builds up case by case

b) Top down
Divide problem into sub problems

Dynamic programming
Not asked too often b/c they're too difficult for 45 minutes.
If you do get one, solve it recursively and "cache" results for future reference. (I envision, passing it along with each recursive call as an arg)

Recursive vs iterative solutions
Recursive is very space in-efficient b/c if you have O(n) recursive calls, that implies O(n) space in memory. Builds up your call stack.

*/
