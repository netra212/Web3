// Inheritance in javascript. 
// Inheritance in JavaScript classes allows one class to inherit properties and methods from another class. This mechanism enables code reuse, making it easier to create new classes that are based on existing ones, without having to duplicate code.

// Assignment #1 - Create a Circle class

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    calculateArea(){
        const areaCirlce = this.radius * this.radius * Math.PI;
        const areaCircle2 = () => {
            circle2_area = this.radius * this.radius * Math.PI;
            console.log(`The area of circle 1 is ${circle2_area}`);
        }
        console.log(areaCircle2)
        return areaCirlce;
    }
    colorCircle(){
        console.log(`Color of Circle is : ${this.color}`);
    }
}

circle = new Circle(2, 'red');
const area = circle.calculateArea();
console.log(area);

// Assignment 2: Create a base shape class. 
// Base class. 
class Shape{
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
    area(){
        throw new Error('The area method must be implemented in the subclass');
    }
    getDescription(){
        return `A shape with color ${this.color}`;
    }
}

// Rectangle class. 
class Rectangle extends Shape{
    constructor(width, height, color){
        super(color); // Call the Parent class Constructor to set the color. 
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height; 
    }
    getDescription(){
        return `A rectangle with width ${this.width}, height ${this.height} and color ${this.color}`;
    }
}

// Circle class. 
class Circle1 extends Shape{
    constructor(radius, color){
        super(color);
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
    getDescription(){
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}
const cirlce = new Circle1(20);
console.log(cirlce.area())



