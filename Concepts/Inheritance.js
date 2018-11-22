/*
Inheritance is the concept of an object gaining properties and/or behaviors of another object.
In this simple example, Basketball is inheriting from Ball.
*/

class Ball {
    constructor(size, color) {
        this._size = size;
        this._color = color;
    }

    getSize() {
        return this._size;
    }

    getColor() {
        return this._color;
    }
}

class Basketball extends Ball {
    constructor(size, color) {
        super(size, color);
    }
}

let aBall = new Ball(3, 'red');
console.log(aBall);
let aBasketball = new Basketball(2, 'blue');
console.log(aBasketball);
console.log(aBasketball.getSize());
console.log(aBasketball.getColor());