class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = {
            value: value,
            next: null
        }
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// 10 --> 5 --> 16
console.log(myLinkedList);
