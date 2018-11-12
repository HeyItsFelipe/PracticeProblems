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
        if (value !== undefined) {
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
        return this;
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
                    console.log(`Cannot delete! Value ${value} not found!`);
                    return this;
                }
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return this;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
            if (currentNode === null) {
                return false;
            }
        }
        return true;
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
console.log(list.contains(0));
console.log(list.contains(1));
let list3 = new LinkedList();
console.log(list3);
list3.insert(7);
console.log(list3);
list3.remove(7);
console.log(list3);
list3.insert(1).insert(2).insert(3).remove(0).insert(4);
console.log(list3);