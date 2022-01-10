//function
console.log('functions')
function addTwoNumbers(x,y){
    return x + y;
}

//closure
console.log('closures')
let num = 0;
const closureFunc = ( function additionClosure(){
    
    return {

        add: function () {
            num += 1;
            console.log(num)
        },
        sub: function () {
            num-=1;
            console.log(num);
        }
    }
})();

closureFunc.add();
closureFunc.sub();



//Object
console.log('objects')
car = {
    name: 'customName',
    wheels: 3,
    color: 'customColor',
    capacity: 'customCapacity'
};

console.log(car);





//prototype
console.log('prototype')
function Car(name, wheels, color, capacity) {
    this.name = name,
    this.wheels = wheels,
    this.color - color,
    this.capacity = capacity
}

var new_car = new Car('car2', 4, 'yellow', 5);
console.log(new_car);

Car.prototype.transmission = "";
new_car.transmission = "Manual";
console.log(new_car)




//encapsulation
console.log('encapsulation')
class Product {
	constructor(fname, fprice){
        let name = fname;
        let price = fprice;
        
        this.getName = function() { return name; };
        this.getPrice = function() { return price; };
    }
 }


var milk = new Product('Milk', 50);
var bread = new Product('Bread', 50);

//console.log(milk.price)
console.log(milk.getName())





//inheritance
console.log('inheritance')
class Vehicle {
    constructor(name, wheels, color, capacity) {
        this.name = name;
        this.wheels = wheels;
        this.color = color;
        this.capacity = capacity;
    }
    getcapacity = function () {
        return this.capacity;
    }
}

class Bus extends Vehicle {
    constructor(name, wheels, color, capacity, model, year) {
        super(name, wheels, color, capacity);
        this.model = model;
        this.year = year;
    }
}

let bus = new Bus('School Bus', 12, 'Yellow', 56, 'Mitsubishi', 2019);
console.log(bus.getcapacity())




//strict mode
console.log('strict mode')

function strictDisplayX( x, x ) {
    "use strict";  
    console.log(x);     //throws an error
}

function normalDisplayX( x, x ) {
    console.log(x);     // No error
}




/*
function Product(_name, _price) {
    const name = _name;
    const price = _price;
  
    this.getName = function() {
      return name;
    };
    this.getPrice = function() {
      return price;
    };
}
  
  
var milk = new Product('Milk', 50);
var bread = new Product('Bread', 50);

console.log(milk.price)
*/


//Normal Function
hello = function() {
    return "Hello World!";
}

//Arrow Function
hello = () => {
    return "Hello World!";
}

//Arrow Function
hello = () => "Hello World!";
  