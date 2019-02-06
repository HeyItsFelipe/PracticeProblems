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
                return;
            } else {
                recurse(node.left, sum);
                recurse(node.right, sum);
            }
            return;
        };
        recurse(this.head);
        return total;
    }

    giveSum2() {
        const recurse = (node, previousValue = 0) => {
            let sum = 0;
            if (node === null) {
                return 0;
            }
            sum = previousValue * 10 + node.value;
            if (node.left === null && node.right === null) {
                return sum;
            } else {
                return recurse(node.left, sum) + recurse(node.right, sum);
            }
        };
        return recurse(this.head);
    }

}

/*
giveSum - Using Closure
A good way to see this is if you draw out the tree.
We use the depth first traversal logic to navigate through the tree.
For our base case, we check if the node is null.
If it is, we do not want to do any operations, so we return.
Our second base case is if the node we are on is the last node,
then we add it to our total closure variable and then return.
Going back to the first base case, the first base case is written as such 
because if we sum the previousValue variable to the total closure variable instead
of just returning, we would receive duplicate additions to the total closure variable.
Therefore, it is instead added when the node has no right or left children, which
is the second base case.
Our recursive cases just continues the process of getting the digits together
until totals are reached to add to the total closure variable. 
*/

/*
giveSum2 - Without Closure
This one is similar to the first function, but the total is added in a different manner.
A root node 1, has a left child 2 and a right child of 5, and that 2 node has one left 
child of 3 and a right child of 4.
The first function would add 123 + 124 + 15 to a total closure variable 
when end nodes are reached, resulting in 262.
This function would add 123 and 124, which results in 247 and is returned, and then 
add 247 is added to 15, which would then be returned as 262.
The results of the end nodes are returned back up the tree during rather than being added to 
a variable.
*/


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
console.log(root.giveSum2());  //13997

let root2 = new Tree(10);
let node8 = new Node(20);
let node9 = new Node(30);
let node10 = new Node(40);
let node11 = new Node(60);
root2.head.left = node8;
root2.head.right = node9;
node8.left = node10;
node8.right = node11;
console.log(root2.giveSum2());  //2630

let root3 = new Tree(1);
let node12 = new Node(2);
let node13 = new Node(3);
root3.head.left = node12;
root3.head.right = node13;
console.log(root3.giveSum2());  //25

let root4 = new Tree(8);
console.log(root4.giveSum2());  //8

let root5 = new Tree(60);
let node14 = new Node(1);
root5.head.right = node14;
node14.left = new Node(0);
console.log(root5.giveSum2());  //6010 