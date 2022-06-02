<?php

function hello($name = ''): string {
  //Edge cases where name is not given
  if($name == '' || $name == NULL){
    $name = 'world';
  }
  //Converts to lowercase name with first letter uppercase
  $lcName = ucfirst(strtolower($name));
  
  //Returns string
  return "Hello, $lcName!";
}

function otherAngle($a, $b) {
  return 180 - $a - $b;
}

function stairsIn20($arr) {
  return 20 * (array_sum($arr[0]) + array_sum($arr[1]) + array_sum($arr[2]) + array_sum($arr[3]) + array_sum($arr[4]) + array_sum($arr[5]) + array_sum($arr[6]));
}

function replace(string $s): string {
  $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  /*
  str_replace( (char to be replaced), (char to insert), string, count)
  */
  return str_replace($vowels, '!', $s);
}

function DNA_strand($dna) { // equals 'TTAG'
  $side2 = [];
  $dnaArray = str_split($dna); // equals [T,T,A,G]
  
  foreach($dnaArray as $base){
    if($base == 'T'){
      array_push($side2, 'A');
    } elseif ($base == 'A'){
      array_push($side2, 'T');
    } elseif ($base == 'C'){
      array_push($side2, 'G');
    } elseif ($base == 'G'){
      array_push($side2, 'C');
    }
  }
  
  return implode('', $side2); //[A,B,C] => 'ABC'
}

function solution($s, $n) {
  return str_repeat($s, intval($n));
}

function replaceAll($string) {
  $split = explode('#', $string);//explode( (char to split at), (string to split) )
  
  return $split[0];
}

function checkForFactor($base, $factor) {
  return ($base % $factor) == 0 ? true : false;
}

function twoDecimalPlaces($n) {
  return round($n, 2);
}

function removeEveryOther($array) {
  //Iterates over array, grabbing index and word
  foreach($array as $i => $w){
    
    //Test for even or odd
    if($i%2 !== 0){
      
      //If odd, it is removed from $array
      unset($array[$i]);
    }
  }
  return $array;
}

function apple($x) {
  return ($x ** 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

function findDifference($a, $b) {
  return abs( array_product($a) - array_product($b) );
}

function expressionMatter($a, $b, $c) {
  return max([
      $a+$b+$c,
      ($a+$b)*$c,
      $a*($b+$c),
      $a+$b*$c,
      $a*$b+$c,
      $a*$b*$c
  ]);
}
function sortArr($nums) {
  if( $nums === null ){
    return [];
  } elseif( $nums === [] ){
    return [];
  }else {
    sort($nums);
    return $nums;
  }
}