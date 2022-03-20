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