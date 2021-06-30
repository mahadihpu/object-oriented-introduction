class Animal {
    #speed = 200;
    constructor(name){
        this.name = name;
        this.#speed = 250;
    }
    run(){
        console.log(`hello , i am ${this.name}, and i can run at a speed of ${this.#speed}`)
    }
}

const tiger = new Animal('tiger');

tiger.run();