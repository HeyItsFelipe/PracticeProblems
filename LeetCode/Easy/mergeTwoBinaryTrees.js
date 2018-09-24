/*

https://leetcode.com/problems/merge-two-binary-trees/description/

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
  Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7

Output:
Merged tree:
       3
      / \
     4   5
    / \   \
   5   4   7

Note: The merging process must start from the root nodes of both trees.

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTrees = (t1, t2) => {
  let newTree = new TreeNode();
  let recurse = (tree, t1, t2) => {
    if (!t1) {
      return t2;
    }
    if (!t2) {
      return t1;
    }
    tree.val = t1.val + t2.val;
    tree.left = recurse(new TreeNode(), t1.left, t2.left);
    tree.right = recurse(new TreeNode(), t1.right, t2.right);
    return tree;
  };
  return recurse(newTree, t1, t2);
};

let treeRootA = new TreeNode(1);
let treeBranchA3 = new TreeNode(3);
let treeBranchA2 = new TreeNode(2);
let treeBranchA5 = new TreeNode(5);
treeRootA.left = treeBranchA3;
treeRootA.right = treeBranchA2;
treeBranchA3.left = treeBranchA5;

let treeRootB = new TreeNode(2);
let treeBranchB1 = new TreeNode(1);
let treeBranchB3 = new TreeNode(3);
let treeBranchB4 = new TreeNode(4);
let treeBranchB7 = new TreeNode(7);
treeRootB.left = treeBranchB1;
treeRootB.right = treeBranchB3;
treeBranchB1.right = treeBranchB4;
treeBranchB3.right = treeBranchB7;

console.log(mergeTrees(treeRootA, treeRootB));

/*
A merge sort approach was taken to solve this problem.
Because of this approach, time complexity is O(n * log(n)).
*/
