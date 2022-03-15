console.log("Good news, everyone!")
console.clear();

//Exercise 1
function range(start, end){
    let answer = [];
    for(let index = start; index <= end; index++) {
        answer.push(index);
    }
    return answer;
};

function sum(arr){
    return arr.reduce((total, next) => total + next);
};

let test1 = range(1,10);
console.log(sum(test1));


console.clear();

//Exercise 2
function reverseArray(arr){
    let newArr = []
    for(let index = arr.length - 1; index >= 0; index--) {
        newArr.push(arr[index])
    }
    return newArr;
}
console.log(reverseArray([1,2,3,4,5]));


function reverseArrayInPlace(arr){
    let length = arr.length;
    for(let index = length-1; index >= 0; index--){
        let current = arr[index];
        arr.push(current);
    }
    length = arr.length;
    let spliceLength = length/2;
    arr.splice(0,spliceLength);
    return arr;
}
console.log(reverseArrayInPlace([1,2,3,4,5]));

console.clear();

//Exercise 3
function arraryToList(arr){
    for(let index = arr.length-1; index>=0; index--){
        var list = {value: arr[index], rest: list}
    }
    return list;
}

function listToArray(list){
    let results = [];
    for (let listItem = list; listItem; listItem = listItem.rest) {
        results.push(listItem.value)
    }
    return results;
}


function prepend (elem, list){
    var newList = {value: elem, rest: list};
    return newList;
}

function nth (list, num){
    if (!list){
        return undefined;
    } else if (num === 0){
        return list.value;
    } else {
        return nth(list.rest, num-1);
    }
}

console.clear();

//Exercise 4
function deepEqual(val1, val2){
    if(val1 === val2){
        return true;
    } else if (typeof val1 === "object" && typeof val2 === "object"){
        return objectEqual(val1,val2);
    } else{
        return false;
    }

    function objectEqual(val1, val2){
        let val1Keys = Object.keys(val1);
        let val1values = Object.values(val1);
        let val2Keys = Object.keys(val2);
        let val2values = Object.values(val2);
        
        let answer;
        for(let i = 0; i < val1Keys.length; i++){
            if((val1Keys[i] === val2Keys[i]) && (val1values[i] === val2values[i])){
                answer = true;
            } else {
                answer = false;
            }
        }
        return answer;
    }
};