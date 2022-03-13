//Exercise 1
let blocks = "#"
for (let index = 0; index < 7; index++) {
    console.log(blocks);
    blocks += "#"
}

//Exercise 2
for (let index = 1; index <= 100; index++) {
    if( (index%3 === 0) && (index%5 === 0) ){
        console.log("FizzBuzz");
    } else if (index%3 === 0){
        console.log("Fizz");
    } else if (index%5 === 0){
        console.log("Buzz");
    } else {
        console.log(index)
    }
}
console.clear()

//Exercise 3
let chessboard = "";
let size = 8;
let choice = 1;

for (let index = 0; index <= size*size; index++) {
    if ((index%size === 0) && (choice === 1) && (index !== 0)){
        chessboard += "\n";
        chessboard += "#";
    } else if ((index%size === 0) && (choice === 2) && (index !== 0)){
        chessboard += "\n";
        chessboard += " ";
    } else if(choice === 1){
        chessboard += " ";
        choice = 2;
    }else if (choice === 2){
        chessboard += "#";
        choice = 1;
    }
}

console.log(chessboard)