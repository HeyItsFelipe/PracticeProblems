class Node {
    constructor(value) {
        if (value === undefined) {
            console.log('Cannot create Node from undefined!');
            return;
        }
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
        if (value === undefined) {
            console.log('Argument needed for insert!');
            return this;
        } else if (this.head === null) {
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
        if (value === undefined) {
            console.log('Argument needed for remove!');
            return this;
        } else if (this.head === null) {
            console.log(`Cannot remove! List is empty!`);
            return this;
        } else if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return this;
        } else {
            let currentNode = this.head;
            let previousNode;
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    previousNode.next = currentNode.next;
                    this.length--;
                    return this;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        console.log(`Cannot delete! Value ${value} not found!`);
        return this;
    }

    contains(value) {
        if (value === undefined) {
            console.log('Argument needed for contains!');
            return false;
        } else {
            let node = this.head;
            while (node !== null) {
                if (node.value === value) {
                    return true;
                }
                node = node.next;
            }
            return false;
        }
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
list.remove();
console.log(list);
let list2 = new LinkedList(4);
list2.insert(1);
list2.insert(9);
console.log(list2);
console.log(list);
console.log(list.contains());
console.log(list.contains(5));
let list3 = new LinkedList();
console.log(list3);
list3.insert(7);
console.log(list3);
list3.remove(7);
console.log(list3);
list3.insert(1).insert(2).insert(3).remove(0).insert(4);
console.log(list3);
let list4 = new LinkedList();
console.log(list4);
list4.remove(3);
console.log(list4.contains(3));
list4.insert(3);
console.log(list4);