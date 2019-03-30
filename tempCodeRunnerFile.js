class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(value);
        this.tail = node.next;
        this.length++;
    }

    prepend(value) {
        let oldHead = this.head;
        this.head = {
            value: value,
            next: oldHead
        }
        this.length++;
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
        
        let leader = this.traverseToIndex(index);
        let nodeAfter = leader.next;
        leader.next = new Node(value);
        leader.next.next = nodeAfter;
        this.length++;
    }

    traverseToIndex(index) {
        let counter = 1;
        let node = this.head;
        while (counter < index) {
            counter++;
            node = node.next;
        }
        return node;
    }

    remove(index) {

    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(10, 421);
console.log(myLinkedList.printList());
// 1 --> 10 --> 5 --> 16
// 1 --> 10 --> 99 --> 5 --> 16
