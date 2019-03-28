// reference type

// objects are reference types
// arrays are also reference types

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2; // true

object1 === object3; // false

object1.value = 15;

object2.value; // 15

object3.value; // 10

// -------------------------------------------------------------
// context vs scope
function b() {
    // inner scope
    let a = 4;
}
// global scope

// context tells you where you are in the object
console.log(this); // window object
// this refers to what object you are inside of
function a() {
    console.log(this); // still the window object
}

const object4 = {
    a: function() {
        console.log(this); // object4
    }
}

// -------------------------------------------------------------
// instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
