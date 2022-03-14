//Exercise 1
function mathMinRedo(x,y){
    if ((x-y) >= 0){
        return y;
    } else {
        return x
    }
}

//Exercise 2
function isEven(number){
    function checkEven(N){
        if (N === 0){
            return true;
        } else if (N === 1){
            return false;
        } else {
            return checkEven(N - 2);
        }
    }
    return checkEven(number)
}

//Exercise 3
function countBs(string){
   return countChar(string, "B");
}

function countChar(string, letter){
    let charCount = 0;
    for (let index = 0; index < string.length; index++) {
        if(string[index] === letter){
            charCount++;
        }
    }
    return charCount;
}