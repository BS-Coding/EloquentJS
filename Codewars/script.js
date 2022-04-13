function findNb(m) {
    let number = 1;
    
    while(number <= m){
      m -= (Math.pow(number, 3))
      number++;
    }
    
    if (m == 0){
      return number - 1;
    } else {
      return -1;
    }
  }
/*function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}*/

function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}

function encode(string) {
  let answer = [] 
  string.split("")
    .forEach( (x) => {
      if(x === "a"){
        answer.push("1")
      } else if (x === "e"){
        answer.push("2")
      } else if (x === "i"){
        answer.push("3")
      } else if (x === "o"){
        answer.push("4")
      } else if (x === "u"){
        answer.push("5")
      } else {
        answer.push(x)
      }
    })
  return answer.join('')
}

function decode(string) {
  let answer = [] 
  string.split("")
    .forEach( (x) => {
      if(x === "1"){
        answer.push("a")
      } else if (x === "2"){
        answer.push("e")
      } else if (x === "3"){
        answer.push("i")
      } else if (x === "4"){
        answer.push("o")
      } else if (x === "5"){
        answer.push("u")
      } else {
        answer.push(x)
      }
    })
  return answer.join('')
}

function bouncingBall(h,  bounce,  window) {
  let motherCount = 0;
  
  if( (h > 0 ) && ((bounce > 0 ) && (bounce < 1)) && (window < h) ){
    motherCount = 1;
    h *= bounce;
    while(window < h){
      motherCount += 2;
      h *= bounce;
    }  
  } else {
    return -1;
  }
  
  return motherCount;
}

function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function solve(s) {
  //letter's value is equal to its index
  let values = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  //regexp for vowels
  let vowelRegex = /[aeiou]/g ;
  
  //splits into substrings 
  let substrings = s.split(new RegExp(vowelRegex))
  console.log(substrings)
  
  //replaces letters with number values
  let answer = substrings.map(letter => letter.split("").reduce((a,b) => a+values.indexOf(b),0))
  
  //returns largest of array values
  return Math.max(...answer);
};

function presses(phrase) {
  console.log(phrase)
  let entryPhrase = phrase.toLowerCase().split("")
  let singlePress = /[1*#adgjmptw\s]/;
  let doublePress = /[behknqux0]/;
  let triplePress = /[cfilrvyo]/;
  let quadPress = /[sz234568]/;
  let answer = 0;
  entryPhrase.forEach( (x,i) => {
    if(singlePress.test(x)){
      answer += 1;
    } else if (doublePress.test(x)){
      answer += 2;
    } else if (triplePress.test(x)){
      answer += 3;
    } else if (quadPress.test(x)){
      answer += 4;
    } else {
      answer+= 3;
    }
  })
  return answer
}

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let answer = [0,0];
  let newMonthSavings = savingperMonth;
  savingperMonth = 0;
  
  
  if(startPriceOld >= startPriceNew){
    answer[1] = Math.round(startPriceOld - startPriceNew);
    return answer;
    
  } else {
    while( (startPriceOld + savingperMonth) < startPriceNew){
      if (answer[0]%2 !== 0) {
        percentLossByMonth += 0.5;
      }
      answer[0]++;
      savingperMonth += newMonthSavings;
      startPriceOld *= ( (100 - percentLossByMonth) /100);
      startPriceNew *= ( (100 - percentLossByMonth) /100);
    }
  }
  answer[1] = Math.round(startPriceOld + savingperMonth - startPriceNew)
  return answer;
}

//Extensions of the Array practice
Array.prototype.square = function square(){return this.map(x => x*=x)};

Array.prototype.cube = function cube(){return this.map(x => x*=x*=x);};

Array.prototype.average = function average(){
  if(this === []){
    return NaN;
  } else {
    let number = this.reduce((accum, current) => accum+=current ,0);
    return number / this.length;
  }
};

Array.prototype.sum = function sum(){return this.reduce( (accum, current) => accum+current ,0)};

Array.prototype.even = function even(){return this.filter(x => (x%2 === 0))};

Array.prototype.odd = function odd(){return this.filter(x => (x%2 !== 0))};

Array.prototype.add1 = function add1(){return this.map(x => (x+=1))};

Array.prototype.half = function half(){return this.map(x => (x/=2))};

Array.prototype.quarter = function quarter(){return this.map(x => (x/=4))};

Array.prototype.logContents = function logContents(){this.forEach(x => (console.log(x)))};

function doubleInteger(i) {
  i*=2
  return i;
}

function twoSum(numbers, target) {
  for (var i=0; i < numbers.length-1; i++){
    for(var j = i+1; j < numbers.length; j++){
      if(numbers[i] + numbers[j] === target){
        return [i,j];
      }
    }
  }
}

function sortArray(array) {
  let odds = [];
  
  // Creates array of even numbers with empty spaces where odds were and pushes odds to a new array
  let evenArray = array.map((x) => {
    if(x%2 !== 0){
      odds.push(x)
      return '';
    } else {
      return x;
    }
  })

  // Sorts array of just odd numbers
  odds.sort((a,b) => a-b);
  
  // Starts loop which replaces empty array elements with odd numbers from sorted array
  let oddId = 0;
  for(let i=0;i<evenArray.length;i++){
    if(evenArray[i] === ''){
      evenArray[i] = odds[oddId];
      oddId++;
    }
  };
  
  return evenArray;
}

function bingo(ticket, win){
  let matches = 0;
  
  for(let i=0; i<ticket.length;i++){
    let currentCode = ticket[i][1];
    let currentStr = ticket[i][0];
    
    //Removes duplicates from currentStr for random test answers
    currentStr = currentStr.split('').filter(function(value, index, self) { 
      return self.indexOf(value) === index;
    }).join('');
    
    currentStr.split('').forEach((x,i) => {
      if(x.codePointAt(0) === currentCode){
        matches++;
      }
    })
  }
  return matches >= win ? 'Winner!' : 'Loser!'
}

var encryptThis = text =>
  text.split(' ').map(word => word
    .replace(/(^\w)(\w)(\w*)(\w$)/, '$1$4$3$2')
    .replace(/^\w/, word.codePointAt(0)))
  .join(' ');

  function sumDigPow(a, b) {
    let answer = [];
    
    for(let i=a; i<=b; i++){
      let sum = 0;
      let currentNum = i.toString().split('')
  
      for(let index=1; index<=currentNum.length; index++){
        if(currentNum[index-1] === 0){
          sum += 0;
        } else {
          sum += Math.pow(currentNum[index-1], index)
        }
      }
      if(sum === i){
        answer.push(i)
      }
    }
    
    return answer;
  }

function countSmileys(arr) {
  let smileyCount = 0;
  let smileyFaceTwo = /([;:])([)D])/;
  let smileyFaceThree = /([;:])([-~])([)D])/;
  if(arr === []){return 0};
  
  arr.forEach( face => {
    console.log(face)
    if(face.length === 2){
      if(smileyFaceTwo.test(face)){
        smileyCount++;
      }
    } else if (face.length === 3){
      if(smileyFaceThree.test(face)){
        smileyCount++
      }
    }
  });
  
  return smileyCount;
}

function descendingOrder(n){
  return parseInt( n.toString().split('').sort((a,b) => b-a).join('') );
}

function isTriangle(a,b,c){
  if (((a+b) > c) && ((b+c) > a) && ((c+a) > b)){
    return true;
  } else {
    return false;
  }
}