/*
https://practice.geeksforgeeks.org/problems/root-to-leaf-paths-sum/1
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(value) {
        this.head = new Node(value);
    }
    giveSum() {
        let total = 0;
        const recurse = (node, previousValue = 0) => {
            if (node === null) {
                return;
            }
            let sum = 0;
            sum = previousValue * 10 + node.value;
            if (node.left === null && node.right === null) {
                total += sum;
            } else {
                recurse(node.left, sum);
                recurse(node.right, sum);
            }
            return;
        }
        recurse(this.head);
        return total;
    }
}


let root = new Tree(6);
let node1 = new Node(3);
let node2 = new Node(5);
root.head.left = node1;
root.head.right = node2;
let node3 = new Node(2);
let node4 = new Node(5);
let node5 = new Node(4);
let node6 = new Node(7);
let node7 = new Node(4);
node1.left = node3;
node1.right = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
console.log(root.giveSum());

let root2 = new Tree(10);
let node8 = new Node(20);
let node9 = new Node(30);
let node10 = new Node(40);
let node11 = new Node(60);
root2.head.left = node8;
root2.head.right = node9;
node8.left = node10;
node8.right = node11;
console.log(root2.giveSum());

let root3 = new Tree(1);
let node12 = new Node(2);
let node13 = new Node(3);
root3.head.left = node12;
root3.head.right = node13;
console.log(root3.giveSum());

let root4 = new Tree(8);
console.log(root4.giveSum());

let root5 = new Tree(60);
let node14 = new Node(1);
root5.head.right = node14;
node14.left = new Node(0);
console.log(root5.giveSum());