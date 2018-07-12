let f = function () {
    this.a = 1;
    this.b = 2;
 };

 let obj = new f(); // {a: 1, b: 2}
 
 // add properties in f function's prototype
 f.prototype.b = 3;
 f.prototype.c = 4;

 console.log(obj.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(obj.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited. 
// This is called "property shadowing."

console.log(obj.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(obj.d); // undefined




function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
        return this.name;
    }
};

Person.prototype.getAge = function() {
    return this.age;
};

let roy = new Person('roy', 28);
console.log(roy.getName());
console.log(roy.getAge());
console.log(roy.__proto__);
console.log(Object.getPrototypeOf(roy));
console.log(Object.getOwnPropertyNames(roy));
console.log(roy.hasOwnProperty('getName'));

roy.getName = function() {
    return "ROOOOOOY";
};
console.log(roy.getName());






const animal = {
    init: function(type) {
        this.type = type;
    },
    eat: "Eating"
}

animal.init('dog');
console.log(animal.eat);