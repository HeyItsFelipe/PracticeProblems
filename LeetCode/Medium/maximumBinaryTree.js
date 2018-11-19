/*

https://leetcode.com/problems/maximum-binary-tree/

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

1. The root is the maximum number in the array.
2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1

Note:
The size of the given array will be in the range [1,1000].

*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const constructMaximumBinaryTree = (nums) => {
    if (nums.length === 0) {
        return null;
    }
    let node = new TreeNode(Math.max(...nums));
    let endIndex = nums.indexOf(node.val);
    node.left = constructMaximumBinaryTree(nums.slice(0, endIndex));
    node.right = constructMaximumBinaryTree(nums.slice(endIndex + 1, nums.length));
    return node;
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));

/*
The max value is determined by Math.max().
We also use the divide and conquer approach to construct the binary tree.
The argument to create each node is the nums array sliced at the appropriate indices.
*/