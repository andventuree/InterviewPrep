<?php
// Learning PHP! Comments are my observations

function removeDuplicates($nums) {
  $uniqueLength = 0;

  for( $i = 0; $i < count($nums); $i++) {
    $currentNum = $num[$i];
    if ($nums[$uniqueLength] !== $currentNum) { //if not the same, its unique, move unique index
      $uniqueLength++;
      // $a = $num[$i];
      // $b = $num[$umiqueLength];
      // $num[$umiqueLength] = $a;
      // $num[$i] = $b;
      swap($i, $uniqueLength, $nums);
    }
  }

  // var_dump($nums); // Doesn't need echo
  print_r($nums);

  return $uniqueLength + 1;
}

function swap($i, $j, &$arr) { //notice the &. Need to imply pass by reference
  $temp = $arr[$i];
  $arr[$i] = $arr[$j];
  $arr[$j] = $temp;
}

// echo removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

function rotate($nums, $k) {
  while ($k > 0) {
    $lastVal = array_pop($nums);

    // Docs - array_unshift ( array &$array [, mixed $... ] ) : int // note PBR & in declaration
    array_unshift($nums, $lastVal);
    $k--;
  }
  print_r($nums);
}

// echo rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

function maxProfit(array $prices) : string {
  $profit = 0;
  echo isset($profit);
  // print_r($prices[-1]); //undefined so it doesn't show anything
  for ($i = 1; $i < count($prices); $i++) {
    //php does not have an undefined data type
    if ($prices[$i] > $prices[$i - 1]) { //in php, if (7 > empty_value) is technically true, wouldn't be for JS
      $profit += ($prices[$i] - $prices[$i - 1]);
      echo $profit;
    }
  }
  return 'profit ' . $profit;
}

// echo maxProfit([7, 1, 5, 3, 6, 4]); //7

function containsDuplicates(array $nums) {
  $tracker = array();
  for ($i = 0; $i < count($nums); $i++){
    // if ($tracker[$nums[$i]]) return 'true';
    if ($tracker[$nums[$i]]) return TRUE; //terminal will show 1
    else $tracker[$nums[$i]] = true;
    // echo $i;
  }
  print_r($tracker); //prints only length of each index
  // var_dump($tracker); //shows you values of index
  // return 'false';
  return FALSE; //terminal will show nothing b/c false is falsy value. basically empty
}

// echo containsDuplicates([1,1,1,1,1]);
// echo containsDuplicates([1,2,3,4,5]);

// Learning: 
// 1) Assignment of associative object
// 2) echo true => 1 and false is a empty value!

function intersect(array $nums1, array $nums2) : array {
  $tracker = array();
  $intersection = array();

  foreach ($nums1 as $numa) {
    if ($tracker[$numa]) $tracker[$numa]++;
    else $tracker[$numa] = 1;
  }
  foreach($nums2 as $numb) {
    if ($tracker[$numb]) {
      $tracker[$numb]--;
      array_push($intersection, $numb);
    }
  }
  return $intersection;
}

// echo print_r(intersect([1, 2, 2, 1], [2, 2])); //[2,2]

function moveZeroes(array $nums) : array {
  $moves = 0;
  echo count($nums);
  for ($i = 0; $i < count($nums); $i++) {
    $j = $i;
    while ($nums[$i] === 0 && $j < count($nums)) {
      swap($j, $i, $nums); //& PBR implied
      $j++;
      $moves++;
    }
  }
  return $nums;
}

// echo print_r(moveZeroes([0, 0, 0, 0, 1, 2, 34, 5, 5, 12]));

function twoSum(array $nums, int $target) : array {
  $seen = array();
  for ($i = 0; $i < count($nums); $i++){
    $diff = $target - $nums[$i];
    print_r($seen);
    if(isset($seen[$diff])) { //checks if we've $seen the $diff, if so, return in new arr
      return [$diff, $nums[$i]];
    } else {
      $seen[$nums[$i]] = $i; //can assign values this way
    }
  }
  return array();
}

//returns index of values from $nums that would be the $target
// print_r(twoSum([2, 7, 11, 15], 9));
// print_r(twoSum([ 11, 15, 2, 7], 9));


//Still broken, need to convert number to string correctly
// Warning: A non-numeric value encountered in ...
function plusOne(array $digits) : array {
  $total = "";
  $carry = 0;
  $lastIdx = count($digits) - 1;
  for ($i = $lastIdx; i >= 0; $i--){
    $num = $digits[$i];
    $num += $carry;
    if ($i === $lastIdx) $num += 1;
    if ($num > 9){
      $carry = 1;
      $num -= 10;
    } else {
      $carry = 0;
    }
    $total = strval($num) + $total; //string concatenation actually
  }
  //handles last carry over beyond original count/num of digits
  if ($carry !== 0) $total = $carry + $total;
  $finalStrTotal = str_split($total);
  $finalIntArr = array_map('intConverter', $finalStrTotal);
  return $finalIntArr;
}

print_r(plusOne([1,1,1,1]));

function intConverter(string $strNum) {
  return (int)$strNum;
}

function dominantIdx(array $nums) : int {
  $largestTwo = array(null, null);
  $seen = array();
  foreach ($nums as $key => $value) {
    helper($largestTwo, $key, $value, $seen);
  };
  // without an unset($value), $value is still a reference to the last item: $arr[3]
  unset($value); //must destroy reference like this
}

function helper(array &$largestTwo, int $key, int $value, array &$seen) {
  if ($largestTwo[1] === null || $largestTwo[1] < $value) {
    $seen[$value] = $key;
    shiftRest($largestTwo, 1, $value);
  } else if ($largestTwo[0] === null || $largestTwo[0] < $value) {
    shiftRest($largestTwo, 0, $value);
  }
}

function shiftRest(array &$arr, int $i, int $val) {
  for( $i = 0; $i <= $idx; $i++) {
    if ($i === $idx) $arr[$i] = $val;
    else $arr[$i] = $arr[$i + 1];
  }
}

?>