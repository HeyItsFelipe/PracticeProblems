/*

https://leetcode.com/problems/middle-of-the-linked-list/description/

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:
The number of nodes in the given list will be between 1 and 100.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const middleNode = head => {
  let nodes = [];
  let node = head;
  while (node !== null) {
    nodes.push(node);
    node = node.next;
  }
  return nodes[Math.floor(nodes.length / 2)];
};

var middleNode2 = head => {
  let pointer = head;
  let pointerDouble = head;
  while (pointerDouble !== null && pointerDouble.next !== null) {
    pointer = pointer.next;
    pointerDouble = pointerDouble.next.next;
  }
  return pointer;
};

let head = new ListNode(1);
let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
let node4 = new ListNode(5);
let node5 = new ListNode(6);
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(middleNode(head));
console.log(middleNode2(head));

/*
Time complexity of the middleNode function is linear as it must iterate
through the entire linked list.  Also, there is the space complexity of
creating an array to consider.
Time complexity of the middleNode2 function is half the amount of the first
as it iterates through every other node to find its length.  Also, an array
to contain the nodes is not needed, therefore middleNode2 is more efficient.
*/
