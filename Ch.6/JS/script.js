//Exercise 1
class Vec {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    get length(){
        return Math.sqrt( (this.x**2) + (this.y**2) )
    }
}
Vec.prototype.plus = function(vector){
    let newVector = new Vec((this.x + vector.x), (this.y + vector.y));
    return newVector;
}
Vec.prototype.minus = function(vector){
    let newVector = new Vec((this.x - vector.x), (this.y - vector.y));
    return newVector;
}
let vec1 = new Vec(1,2);
let vec2 = new Vec(3,4);


//Exercise 2
class Group {
    constructor() {
    }
    add = function(value){
        if (this.has(value)){
            alert(`${value} is already included in this group`)
        } else {
            this[`${value}`] = true;
        }
    };
    delete = function(value){
        if (!this.has(value)){
            alert(`${value} is not included in this group`)
        } else {
           delete this[`${value}`];
        }
    };
    has = function(value){
        return this[`${value}`]
    };
    static from(obj){
        let answer = new Group;
        for (let key of obj){
            answer.add(key)
        }
        return answer;
    }
}

let newGroup = new Group;
const iterable1 = {};
iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

//Exercise 3
Group[Symbol.iterator] = function* (){
    for(let key in Group){
        yield key;
    }
}

//Exercise 4

