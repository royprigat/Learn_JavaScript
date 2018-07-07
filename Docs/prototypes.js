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






function A(a) {
    this.varA = a;
};
  
  // What is the purpose of including varA in the prototype when A.prototype.varA will always be shadowed by
  // this.varA, given the definition of function A above?
  A.prototype = {
    varA: null,  // Shouldn't we strike varA from the prototype as doing nothing?
        // perhaps intended as an optimization to allocate space in hidden classes?
        // https://developers.google.com/speed/articles/optimizing-javascript#Initializing-instance-variables
        // would be valid if varA wasn't being initialized uniquely for each instance
    doSomething: function() {
      // ...
    }
  };
  
  function B(a, b) {
    A.call(this, a);
    this.varB = b;
  }

  B.prototype = Object.create(A.prototype, {
    varB: {
      value: null, 
      enumerable: true, 
      configurable: true, 
      writable: true 
    },
    doSomething: { 
      value: function() { // override
        A.prototype.doSomething.apply(this, arguments); // call super
      },
      enumerable: true,
      configurable: true, 
      writable: true
    }
  });

  B.prototype.constructor = B;
  
  var b = new B();
  b.doSomething();

  console.log(b);