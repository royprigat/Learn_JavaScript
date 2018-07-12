// SPECS
// - Insertion O(1)
// - Find/Access O(N)
// - Peek O(1)


// IMPLEMENTATION
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
    toString() {
        return this.data ? this.data : null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) {this.tail = newNode;}
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    delete(value) {
        // Empty list, return null
        if (!this.head) {throw 'Cannot delete from empty list...';}

        // If head is to be deleted, make head the 2nd node
        if(this.head.data == value) {
            this.head = this.head.next;
            return
        }

        // Iterate list, find value and remove it
        let current = this.head;
        while (current.next) {
            if (current.next.data == value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    peek() {
        console.log(this.tail.data);
    }
    toString() {
        if(!this.head) {throw 'List is empty...';}
        this.tail = this.head;
        while(this.tail) {
            console.log(this.tail.data);
            if (this.tail.next) {this.tail = this.tail.next;}
            else {return;}
        }
    }
}



// TESTING
let list = new LinkedList();

// append, prepend
console.log("Prepend-Append:");
list.append(4);
list.prepend(1);
list.append(6);
list.prepend(10);
list.toString();

// delete
console.log("Delete:");
list.delete(10);
list.delete(5);
list.delete(4);
list.delete(1);
list.toString();

// peek
console.log("Peek");
list.peek();


