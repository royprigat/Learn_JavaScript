// import specific variables
import { firstname, lastname } from './modules_1';
console.log(firstname, lastname);

// import everything as an object
import * as person from './modules_1';
console.log(person.firstname, person.lastname);

// import with aliases
import { firstname as foo } from  './modules_1';
console.log(foo);

// import default, no need for curly braces
import dog from  './modules_1';
console.log(dog);
