class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value) {
        this.root = null;
        if (value !== undefined) {
            this.addNode(value);
        }
    }

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            const addingNode = node => {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                        return;
                    } else {
                        return addingNode(node.left);
                    }
                } else if (value > node.value) {
                    if (node.right === null) {
                        node.right = new Node(value);
                        return;
                    } else {
                        return addingNode(node.right);
                    }
                } else {
                    return;
                }
            }
            addingNode(this.root);
        }
        return this;
    }
}

let bst = new BinarySearchTree();
bst.addNode(5);
bst.addNode(3);
bst.addNode(8);
bst.addNode(1);
console.log(bst);
console.log(bst.root.left);
let bst2 = new BinarySearchTree(10);
bst2.addNode(13).addNode(14);
console.log(bst2);