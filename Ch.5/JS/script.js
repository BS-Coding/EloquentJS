//Exercise 1
function flatten(arr){
    return arr.reduce( (total, current) => total.concat(current) )
}
//console.log(flatten([ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]))


//Exercise 2
function loop(value, test, update, body){
    if(!test(value)){
        return;
    } else {
        body(value);
        update(value);
        loop(value, test, update, body);
    }
}

//Exercise 3
function every(array, func){
    for (let index = 0; index < array.length; index++){
       if(func(array[index]) === false) {
            return false;
       }
    }
    return true;
}

//console.log(every([1,2,3,6], function(x){x < 5}))

//Exercise 4
//Needed code from website, not getting anything.