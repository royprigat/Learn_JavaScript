// SPECS
// Insertion/Deletion - O(1)
// Searc/Access - O(n) 



// IMPLEMENTATION
import LinkedList from './linkedList';

class Stack {
    constructor() {
        this.list = new LinkedList();
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

export default Stack;


// TESTING

// Push/Pop
// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.pop();
// stack.push(3);
// stack.toString();

// Peek
// stack.peek();