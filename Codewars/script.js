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