class Rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area(){
        return Math.PI * Math.pow(this.radius,2) //circleRadius = pi * r^2
    }
}
class Triangle {
    constructor(base,height){
        this.base = base;
        this.height = height;
    }
    area(){
        return this.base * this.height/2;
    }
}

const shapes = [new Rectangle(4,6),new Circle(5),new Triangle(5,10)];

for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    console.log(shape.area())
}