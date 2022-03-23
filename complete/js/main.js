/* class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
} */



class Animal{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    speak(){
        console.log(`${this._name} makes a sound.`)
    }
}

class DomesticAnimal extends Animal{
    constructor(name, breed){
        super(name)
        this._breed = breed;
    }
    get breed(){
        return this._breed;
    }
}

class Dog extends DomesticAnimal{
    constructor(name, breed){
        super(name, breed);
    }
    speak(){
        console.log(`${this._name} barks!`)
    }
}

class Cat extends DomesticAnimal{
    constructor(name, breed){
        super(name, breed)
    }
    speak(){
        for(let i=0; i<5; i++){
            if(i === 3){
                console.log(`${this._name} seems hungry...even though her bowl if full...`)
            } else {
                console.log(`${this._name} meows!`);
            }
        }
    }
}

let simba = new Dog("Simba", 'Shepard')
let emmi = new Dog("Emmilou", "Pitbull Mix")
let chloe = new Cat("Chloe", "Tabby Mix")

let farm = [simba, emmi, chloe]

function farmRollCall(){
    for (a of farm){
        a.speak();
    }
}