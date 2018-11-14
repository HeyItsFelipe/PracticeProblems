class Node {
    constructor(value) {
        if (value === undefined) {
            console.log('Cannot create Node from undefined!');
            return;
        }
        this._value = value;
        this._next = null;
    }
}

class LinkedList {
    constructor(value) {
        this._head = null;
        this._length = 0;
        if (value !== undefined) {
            this._head = new Node(value);
            this._length++;
        }
    }

    insert(value) {
        if (value === undefined) {
            console.log('Argument needed for insert!');
            return this;
        } else if (this._head === null) {
            this._head = new Node(value);
        } else {
            let node = this._head;
            while (node._next !== null) {
                node = node._next;
            }
            node._next = new Node(value);
        }
        this._length++;
        return this;
    }

    remove(value) {
        if (value === undefined) {
            console.log('Argument needed for remove!');
            return this;
        } else if (this._head === null) {
            console.log(`Cannot remove! List is empty!`);
            return this;
        } else if (this._head._value === value) {
            this._head = this._head._next;
            this._length--;
            return this;
        } else {
            let currentNode = this._head;
            let previousNode;
            while (currentNode !== null) {
                if (currentNode._value === value) {
                    previousNode._next = currentNode._next;
                    this._length--;
                    return this;
                }
                previousNode = currentNode;
                currentNode = currentNode._next;
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
            let node = this._head;
            while (node !== null) {
                if (node._value === value) {
                    return true;
                }
                node = node._next;
            }
            return false;
        }
    }

    getLength() {
        return this._length;
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