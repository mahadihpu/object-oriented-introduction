class SmartDevice {
    constructor (name,price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating electrons and they are yummy');
    }
}
class Phone extends SmartDevice {
    constructor (name,price,camera){
        super(name,price);
        this.camera = camera;
    }
}
class Watch {
    constructor (name,price,distance){
        super(name,price);
        this.distance = distance;
    }
}
class Tablet {
    constructor (name,price,camera){
        super(name,price);
        this.isWifi = isWifi;
    }
}