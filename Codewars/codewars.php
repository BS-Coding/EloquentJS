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