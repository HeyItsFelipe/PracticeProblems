/*
Polymorphism is the concept of overiding properties or methods of the inherited object.
In this simple example, Dog initially inherits properties and methods from Animal.
The Dog class has its own this._legs property and also overides the makeSound method with it's own.
The Dog class still uses the getName method.
The Dog class also has access to Animal's makeSound method using the super keyword.
*/

class Animal {
    constructor(name) {
        this._name = name;
    }

    makeSound() {
        console.log('An animal sound!');
    }

    getName() {
        return this._name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this._legs = 4;
    }

    makeSound() {
        //super is used to show Dog still has access to 
        //parent's makeSound method.
        super.makeSound();
        console.log('Woof woof!');
    }

    getLegs() {
        return this._legs;
    }
}

let a = new Animal('joe');
a.makeSound();
console.log(a.getName());

let d = new Dog('spike');
d.makeSound();
console.log(d.getName());
console.log(d.getLegs());