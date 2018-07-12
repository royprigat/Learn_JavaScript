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
    toString() {
        let index = this.head;
        if(index) {console.log(index.data)}
        while(index.next) {
            console.log(index.next.data);
            index.next = index.next.next;
        }
    }
}

let list = new LinkedList();

list.append(4);
list.append(5);
list.append(6);
list.prepend(1);
list.toString();