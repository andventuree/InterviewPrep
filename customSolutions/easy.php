<?php 

function sumTwoNumbers(array $arr, int $desiredSum) {
  for ($left = 0; $left < count($arr); $left++) {
    $currentSum = 0;
    for ($right = count($arr); $right > $left; $right--) {
      $currentSum = $arr[$left] + $arr[$right];
      if ($currentSum === $desiredSum) {
        $unsortedArr = [$arr[$left], $arr[$right]];
        return sort($unsortedArr); //ascending by default
      }
    }
  }
  return [];
}

print_r(sumTwoNumbers([1, 2, 3, 4, 5], 8));

?>  