class Animal {
    static category = 'Dog';
    location = 'india';
    constructor(name,speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(animal1,animal2){
        if(animal1.speed > animal2.speed){
            return 'animal 1 is faster';
        }
        else{
            return 'animal 2 is faster';
        }
    }
}

const myRat = new Animal('rat',25);
const myDog = new Animal('dog',35);
console.log(myRat.category);
console.log(myRat.location);
console.log(Animal.category);
console.log(Animal.location);


console.log(Animal.compare(myRat,myDog))