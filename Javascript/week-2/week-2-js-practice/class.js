// Classes in JS

// Primitive Types. 
// 1. Number. 
// 2. String. 
// 3. Boolean. 

// Complex Types. 
// 1. Objects. 
// 2. Arrays.

// This is the Javascript Objects. 
const user = {
    name:"Netra kc",
    age:24
}

// Classes
class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2,4);
const area = rect.area();
console.log(area);

/*
 * 
Key Concepts:
Class Declaration:
You declare a class using the class keyword.
Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.
Constructor: A special method inside the class that is called when you create an instance (an object) of the class. It’s used to initialize the properties of the object.
Methods: Functions that are defined inside the class and can be used by all instances of the class.
Inheritance: Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.
Static Methods: Methods that belong to the class itself, not to instances of the class. You call them directly on the class.
Getters and Setters: Special methods that allow you to define how properties are accessed and modified.

 */






