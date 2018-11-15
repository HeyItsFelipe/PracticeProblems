class Queue {
    constructor(value) {
        this._storage = {};
        this._size = 0;
        this._headIndex = 0;
        if (value !== undefined) {
            this.enqueue(value);
        }
    }

    enqueue(value) {
        this._storage[this._size + this._headIndex] = value;
        this._size++;
    }

    dequeue() {
        if (this._size === 0) {
            console.log('Empty Queue!  Cannot dequeue!');
            return;
        }
        let deq = this._storage[this._headIndex];
        delete this._storage[this._headIndex];
        this._headIndex++;
        this._size--;
        return deq;
    }

    peek() {
        if (this._size === 0) {
            console.log('Peeked at empty Queue!');
            return;
        }
        return this._storage[this._headIndex];
    }

    getSize() {
        return this._size;
    }
}

let q = new Queue();
q.enqueue(4);
q.enqueue(8);
q.enqueue(1);
console.log(q);
q.dequeue();
console.log(q);
q.enqueue(45);
console.log(q);
console.log(q.peek());
q.dequeue();
q.dequeue();
console.log(q);
q.dequeue();
q.dequeue();
console.log(q);
console.log(q.peek());
let q2 = new Queue(3);
q2.enqueue(8);
q2.enqueue(7);
q2.dequeue();
console.log(q2);