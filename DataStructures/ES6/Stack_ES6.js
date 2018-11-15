class Stack {
    constructor(value) {
        this._storage = {};
        this._size = 0;
        if (value !== undefined) {
            this.push(value);
        }
    }

    push(value) {
        if (value === undefined) {
            console.log('Cannot push undefined value!');
            return;
        }
        this._storage[this._size] = value;
        this._size++;
    }

    pop() {
        if (this._size === 0) {
            console.log('Empty Stack!  Cannot pop!');
            return;
        }
        let popped = this._storage[this._size - 1];
        delete this._storage[this._size - 1];
        this._size--;
        return popped;
    }

    peek() {
        if (this._size === 0) {
            console.log('Peeked at empty Stack!');
        }
        return this._storage[this._size - 1];
    }

    getSize() {
        return this._size;
    }
}

let s = new Stack();
s.push(12);
s.push(0);
s.push(4);
console.log(s);
s.pop();
s.pop();
console.log(s);
console.log(s.peek());
let s2 = new Stack(3);
s2.push(7);
s2.push(8);
s2.pop();
console.log(s2);