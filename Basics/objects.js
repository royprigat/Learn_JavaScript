// an object constructor using a function
function Car(model, year) {
    this.model = model;
    this.year = year;
};

const Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function () { // Method which will display type of Animal
        return this.type;
    }
};

// Initialize a car instance
let mycar = new Car('Talon TSi', 1993);
console.log(Object.getOwnPropertyNames(mycar));

// Object.create() method

const dog = Object.create(Animal);
console.log(dog.displayType());


// primitives are auto converted to Objects(wrappers)


// property descriptors

// defineProperty()

// preventExtensions()

// object constant

