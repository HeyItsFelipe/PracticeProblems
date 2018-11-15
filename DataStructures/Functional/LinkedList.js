function Node(value) {
    if (value === undefined) {
        console.log('Cannot create Node from undefined!');
        return;
    }
    this._value = value;
    this._next = null;
}

function LinkedList(value) {
    this._head = null;
    this._length = 0;
    if (value !== undefined) {
        this.insert(value);
    }
}

LinkedList.prototype.insert = function (value) {
    if (value === undefined) {
        console.log('Cannot insert undefined value!');
        return;
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

LinkedList.prototype.remove = function (value) {
    if (value === undefined) {
        console.log('Cannot remove undefined value');
        return this;
    } else if (this._head === null) {
        console.log('Cannot remove from empty List!');
        return this;
    } else if (this._head._value === value) {
        this._head = this._head._next;
        this._length--;
        return this;
    } else {
        let currentNode = this._head;
        let prevNode;
        while (currentNode !== null) {
            if (currentNode._value === value) {
                prevNode._next = currentNode._next;
                this._length--;
                return this;
            }
            prevNode = currentNode;
            currentNode = currentNode._next;
        }
    }
    console.log(`Value ${value} not found!  Cannot remove!`);
    return this;
}

LinkedList.prototype.contains = function (value) {
    if (value === undefined) {
        console.log('Argument needed for contains!');
        return false;
    }
    let node = this._head;
    while (node !== null) {
        if (node._value === value) {
            return true;
        }
        node = node._next;
    }
    return false;
}

LinkedList.prototype.getLength = function () {
    return this._length;
}

let l = new LinkedList();
l.insert(12).insert(34).remove(3);
console.log(l);
console.log(l.contains(12));
console.log(l.getLength());
let l2 = new LinkedList();
console.log(l2.contains(2));
let l3 = new LinkedList(4);
l3.remove(4).insert(3);
console.log(l3);