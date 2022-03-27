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
