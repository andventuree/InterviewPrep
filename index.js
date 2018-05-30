// Leet code: 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

function altProduct(arr){
  const product = [];
  const left = [];
  for(let leftIdx = 0; leftIdx < arr.length; leftIdx++){
    if(leftIdx === 0){
      left.push(arr[leftIdx])
    } else {
      left.push(left[leftIdx-1] * arr[leftIdx])
    }
  }
  let tempRight = left.slice(0)
  const right = tempRight.reverse()
  console.log(left);
  console.log(right)

  for(let i = 0; i < arr.length; i++){
    if (i === 0){
      product.push(right[i])
    } else {
      product.push(left[i-1] * right[i+1])
    }
  }
  return product;
}

altProduct([1,2,3,4]) //[24,12,8,6]
