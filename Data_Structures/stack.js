// SPECS




// IMPLEMENTATION
import linkedList from './linkedList';

class Stack {
    constructor() {
        this.list = new linkedList();
    }
    isEmpty() {
        return !this.list.tail;
    }
    peek() {
        if (this.isEmpty()) {return null;}
        console.log(this.list.tail.data);
    }
    push(value) {
        this.list.append(value);
    }
    pop() {
        this.list.removeTail();
    }
    toString() {
        this.list.toString();
    }
}


// TESTING

// Push/Pop
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
stack.toString();

// Peek
stack.peek();