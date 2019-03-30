class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null 
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        
        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);

        let leader = this.traverseToIndex(index - 1);
        let follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader; 
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    }

    traverseToIndex(index) {
        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            counter++;
            node = node.next;
        }
        return node;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let leader = this.traverseToIndex(index - 1);
        leader.next = this.traverseToIndex(index + 1);
        this.length--;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList.prepend(1));
// myLinkedList.insert(2, 99);
// myLinkedList.insert(10, 421);
// myLinkedList.remove(1);
console.log(myLinkedList.printList());
// 1 --> 10 --> 5 --> 16
// 1 --> 10 --> 99 --> 5 --> 16
// 1 --> 10 --> 99 --> 5 --> 16 --> 421
// 1 --> 99 --> 5 --> 16 --> 421