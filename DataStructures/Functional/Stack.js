function Stack(value) {
    this._storage = {};
    this._size = 0;
    if (value !== undefined) {
        this.push(value);
    }
}

Stack.prototype.push = function (value) {
    if (value === undefined) {
        console.log('Cannot push undefined value!');
        return;
    }
    this._storage[this._size] = value;
    this._size++;
};

Stack.prototype.pop = function () {
    if (this._size === 0) {
        console.log('Cannot pop from empty Stack!');
        return;
    }
    let popped = this._storage[this._size - 1];
    delete this._storage[this._size - 1];
    this._size--;
    return popped;
};

Stack.prototype.peek = function () {
    if (this._size === 0) {
        console.log('Peeked at empty Stack!');
    }
    return this._storage[this._size - 1];
};

Stack.prototype.getSize = function () {
    return this._size;
};

let s = new Stack();
s.push(3);
s.push(7);
console.log(s);
console.log(s.peek());
s.pop();
console.log(s);
let s2 = new Stack(4);
s2.push(7);
console.log(s2);
s2.pop();
s2.pop();
s2.pop();
s2.push();
console.log(s2.peek());
console.log(s2.getSize());