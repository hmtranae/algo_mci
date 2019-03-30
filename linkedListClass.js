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

    }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
// 1 --> 10 --> 99 --> 5 --> 16
console.log(myLinkedList);
