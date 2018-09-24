/*
https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//Good solution but not concise.
const maxDepth = (root) => {

  let currentMaxDepth = 0;
  let currentDepth = 0;

  if(root === null) {
    return currentDepth;
  }

  const getMaxDepth = (node) => {
    currentDepth++;
    if(currentDepth > currentMaxDepth) {
      currentMaxDepth = currentDepth;
    }
    if(node.left) {
      getMaxDepth(node.left);
    }
    if(node.right) {
      getMaxDepth(node.right);
    }
    currentDepth--;
    return;
  };
  getMaxDepth(root);
  return currentMaxDepth;
};

//A more concise solution.
const maxDepth2 = (root) => {
  if(root === null) {
    return 0;
  }
  let left = maxDepth2(root.left);
  let right = maxDepth2(root.right);
  return Math.max(left, right) + 1;
};

// Tree Builder Function
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Build a tree
let trunk = new TreeNode(3);
let branch9 = new TreeNode(9);
let branch20 = new TreeNode(20);
let branch15 = new TreeNode(15);
let branch7 = new TreeNode(7);
trunk.left = branch9;
trunk.right = branch20;
branch20.left = branch15;
branch20.right = branch7;

console.log(maxDepth(trunk));
console.log(maxDepth2(trunk));
