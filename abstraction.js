class Animal {
    constructor(){

    }
    talk(){
       throw new Error('You must use the talk method')
    }
}
class Cat extends Animal {
    talk(){
        console.log("meaw meaw")
    }
}
class Dog extends Animal {
    talks(){
        console.log("woof woof")
    }
}

const myDog = new Dog();
myDog.talks();
