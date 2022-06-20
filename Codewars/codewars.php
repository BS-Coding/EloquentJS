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
function longest($a, $b) {
  $chars = array_unique(str_split($a . $b));
  sort($chars);
  return implode('', $chars);
}
function reverse($string) {
  //Split string into array
  $strArr = explode(" ", $string);
  //Reverse array
  $revArr = array_reverse($strArr);
  //Join string
  return implode(' ', $revArr);
}
function remove(string $s): string {
  // rtrim( (String), (char to trim from the end))
  return rtrim($s, "!");
}
function f($n=0) {
  if($n > 0 && gettype($n) === 'integer'){
    return array_sum(range(1, $n));
  } else {
    return false;
  }
}
function series_sum($n) {
  $sum = 0;
  
  for ($i = 0; $i <= ($n - 1); $i++) {
    $sum += (1 / (1 + (3*$i)));
  }
  
  return number_format($sum, 2, '.', '');
}
function array_double($x){
  return 2 * array_sum($x);
}
function stringCap($string){
  if($string == NULL || $string == ''){
    return "Invalid string.";
  } else {
    return ucfirst($string);
  }
}
function people_with_age_drink(int $old): string {
  if($old < 14){
    return "drink toddy";
  }else if($old < 18){
    return 'drink coke';
  }else if($old < 21){
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}
function isVow(array $a){
  for($x=0; $x<count($a); $x++){
    $charVal = chr($a[$x]);
    if($charVal === "a" || $charVal === "e" || $charVal === "i" || $charVal === "o" || $charVal === "u"){
      $a[$x] = $charVal;
    }
  }
  return $a;
}
function sumCubes($n) {
  $range = range(1, $n);
  
  foreach($range as &$num){
    $num = $num ** 3;
  }
  
  return array_sum($range);
}
function pillars($numberOfPillars, $dist, $width)
{
  return max(0, ($numberOfPillars-1)*($dist*100+$width)-$width);
}

function movie($card, $ticket, $perc) {
  $count = 0;
  $sys_a_price = 0;
  $sys_b_price = $card;
  
  while( ceil($sys_b_price) >= $sys_a_price ){
    $count++;
    $sys_a_price += $ticket;
    $sys_b_price += ($ticket * ($perc**$count));
  }
  
  return $count;
}
function fold_to($distance) {
  if($distance < 0){
    return null;
  } else {
    $folds = 0;
    $current_stack = 0.0001;
    
    while($current_stack < $distance){
      $folds++;
      $current_stack *= 2;
    }
    
    return $folds;
  }
}
function capitalize($s) {
  $even = [];
  $odd = [];
  $str_arr = str_split($s);
  
  foreach($str_arr as $ind=>$letter){
    if($ind%2 === 0){
      array_push($even, strtoupper($letter));
      array_push($odd, strtolower($letter));
    } else {
      array_push($odd, strtoupper($letter));
      array_push($even, strtolower($letter));
    }
  }
  
  return [implode('', $even), implode('', $odd)];
}
function finalGrade($exam, $projects) {
  if(($exam > 90) || ($projects > 10)){
    return 100;
  } elseif (($exam > 75) && ($projects >= 5)){
    return 90;
  } elseif (($exam > 50) && ($projects >= 2)){
    return 75;
  } else {
    return 0;
  }
}
function greet($name) {
  $formatted_name = ucfirst( strtolower($name));
  return "Hello {$formatted_name}!";
}
function dnaToRna($str) {
  return str_replace("T", "U", $str);
}
function fuel_price($litres, $price_per_litre) {
  if($litres < 2){
    return $litres * $price_per_litre;
  } elseif ($litres < 4){
    return $litres * ($price_per_litre - 0.05);
  } elseif ($litres < 6){
    return $litres * ($price_per_litre - 0.10);
  } elseif ($litres < 8){
    return $litres * ($price_per_litre - 0.15);
  } elseif ($litres < 10){
    return $litres * ($price_per_litre - 0.20);
  } else {
    return $litres * ($price_per_litre - 0.25);
  }
}

function orderedCount($text) {
  $list = [];
  $arr = array_count_values(str_split($text));
  
  foreach($arr as $letter=>$num){
    $list[] = [$letter, $num];
    //array_push($tuple, $list);
  }
  
  return empty($text) ? [] : $list;
}
function remainder($a, $b) {
  if($a === 0 || $b === 0){
    return null;
  } else {
    $c = max($a, $b);
    $d = min($a, $b);
    
    return ($c % $d) > 0 ? ($c % $d) : null;
  }
}
function calc($s) {
  $arr = str_split($s);
  
  foreach($arr as &$value){
    $value = ord($value);
  }
  
  $numStr = implode('', $arr);
  $numStrTwo = str_replace("7", "1", $numStr);
  
  return array_sum(str_split($numStr)) - array_sum(str_split($numStrTwo));
}
function XO($s) {
  $xoCount = array_count_values(str_split(strtolower($s)));
  
  if($xoCount["x"] === $xoCount["o"]){
    return true;
  }

  return false;
}
function seven($m) {
  $s = 0;
  while(strlen($m) > 2) {
    $s++;
    $m = (int)substr($m, 0,-1) - (2*(int)substr($m, -1));
  }
  return [$m,$s];
}
function cube_odd($a){
  var_dump($a);
  $sum = 0;
  $warning = true;
  foreach($a as &$value){
    if(gettype($value) !== 'integer'){unset($value);$warning = false;}
    elseif($value%2 == 0){unset($value);}
    else{$sum += ($value**3);}
  }
  return $warning == true? $sum : NULL;
}