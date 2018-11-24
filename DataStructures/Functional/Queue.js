function Queue(value) {
    this._storage = {};
    this._size = 0;
    this._headIndex = 0;
    if (value !== undefined) {
        this.enqueue(value);
    }
}

Queue.prototype.enqueue = function (value) {
    if (value === undefined) {
        console.log('Cannot enqueue undefined value!');
        return;
    }
    this._storage[this._size + this._headIndex] = value;
    this._size++;
};

Queue.prototype.dequeue = function () {
    if (this._size === 0) {
        console.log('Cannot dequeue from empty Queue!');
        return;
    }
    let deq = this._storage[this._headIndex];
    delete this._storage[this._headIndex];
    this._headIndex++;
    this._size--;
    return deq;
};

Queue.prototype.peek = function () {
    if (this._size === 0) {
        console.log('Peeked at empty Queue!');
        return;
    }
    return this._storage[this._headIndex];
};

Queue.prototype.getSize = function () {
    return this._size;
};

let q = new Queue();
q.enqueue(4);
q.enqueue(7);
q.enqueue(9);
console.log(q);
q.dequeue();
console.log(q.peek());
console.log(q.getSize())
let q2 = new Queue(2);
q2.enqueue(4);
console.log(q2);
q2.dequeue();
q2.dequeue();
q2.dequeue();
console.log(q2);
q2.enqueue(6);
console.log(q2);