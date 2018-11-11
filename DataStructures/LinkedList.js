class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        if (value !== null) {
            this.head = new Node(value);
            this.length++;
        }
    }

    insert(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(value);
        }
        this.length++;
    }

    remove(value) {
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let previousNode;
            while (currentNode.value !== value) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                if (currentNode === null) {
                    console.log('Cannot delete! Value not found!');
                    return;
                }
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    getLength() {
        return this.length;
    }
}

let list = new LinkedList(3);
console.log(list);
list.insert(5);
list.insert(8);
console.log(list);
console.log(list.getLength());
list.remove(0);
console.log(list);
let list2 = new LinkedList(4);
list2.insert(1);
list2.insert(9);
console.log(list2);
console.log(list);