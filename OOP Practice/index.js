// class Circle {
//     constructor(radius, locationX, locationY){
//         this.radius = radius;
//         this.location = {
//             x: locationX,
//             y: locationY,
//         }
//     }
//     draw = function(){
//         console.log("Draw")
//     }
// }

// let circle1 = new Circle(1, 1, 1);

class Stopwatch {
    constructor(){
        this.duration = 0;
        this.counting = false;
        this.startTime = null;
        this.endTime = null;
    }

    start = function(){
        if(this.counting == true){
            throw "Stopwatch already running!"
        }
        this.counting = true;
        this.startTime = new Date();
    }

    stop = function(){
        if(this.counting == false){
            throw "Stopwatch already stopped!"
        }
        this.coutning = false;
        this.endTime = new Date();

        const seconds = (this.endTime.getTime() - this.startTime.getTime()) /1000;
        this.duration += seconds;
    }

    reset = function(){
        this.counting = false;
        this.duration = 0;
        this.startTime = null;
        this.endTime = null;
    }

}

const sw = new Stopwatch();