_Interview Prep_

Pro tips:
1. Not enough parameters
If given a problem and you're not allowed to change the parameters of the original function, make a helper then accepts more parameters.

```
function findClosestValueInBst(tree, target) {
  return findClosestHelper(tree, target, Infinity);
}

function findClosestHelper(tree, target, closestValue){ /* some operation happens */ };
```

2. String concatenation
It may be tempting to use `str += letter` when asked to create a new string. But as an JS expert, you should know the inner workings of concatentation is an O(n) operation. This can add unnecessary complexity to your algorithm. Rather, create an array to store your characters and the desired order then join them at the end.

```
let newLetters = [];
newLetters.push( /* some operation to add new letters */ )
return newLetters.join(",");```
