_Interview Prep_

More details to come!


##Pro tips:

1. Not enough parameters
If given a problem and you're not allowed to change the parameters of the original function, make a helper then accepts more parameters.

```
function findClosestValueInBst(tree, target) {
  return findClosestHelper(tree, target, Infinity);
}
```
