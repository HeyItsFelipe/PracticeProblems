/*

https://leetcode.com/problems/range-sum-of-bst/

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
 
Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const rangeSumBST = (root, L, R) => {
    let sum = 0;
    if (root === null) {
        return sum;
    }
    if (root.val >= L && root.val <= R) {
        sum += root.val;
    }
    sum += rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
    return sum;
};

let root = new TreeNode(10);
let branch1 = new TreeNode(5);
let branch2 = new TreeNode(15);
let branch3 = new TreeNode(3);
let branch4 = new TreeNode(7);
let branch5 = new TreeNode(18);
root.left = branch1;
root.right = branch2;
root.left.left = branch3;
root.left.right = branch4;
root.right.right = branch5;
console.log(rangeSumBST(root, 7, 15));

/*
A divide and conquer recursive approach is necessary for this Binary Search Tree problem.
We use this method to sum the node values from each branch that matches our specified condition.
*/