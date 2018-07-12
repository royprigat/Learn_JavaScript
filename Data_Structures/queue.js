// SPECS
// Insertion/Deletion - O()
// Search/Access - O(n)


// IMPLEMENTATION
import LinkedList from './linkedList';

class Queue {
    constructor() {
        this.list = new LinkedList();
    }
    isEmpty() {
        this.list.tail ? false : true;
    }
    peek() {
        console.log(this.list.head ? this.list.head.data : null);
    }
    enqueue(value) {
        this.list.append(value);
    }
    dequeue() {
        this.list.removeHead();
    }
    toString() {
        this.list.toString();
    }
}

export default Queue;



// TESTING
let queue = new Queue();

// enqueue/dequeue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.toString();