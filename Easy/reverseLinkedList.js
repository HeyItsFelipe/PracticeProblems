/*

https://leetcode.com/problems/reverse-linked-list/description/

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseListIterative = (head) => {
  let tempNode = null;
  let newHeadNode = null;

  while(head !== null){
    tempNode = head;
    head = head.next;
    tempNode.next = newHeadNode;
    newHeadNode = tempNode;
  }
  return newHeadNode;
};

const reverseListRecursive = (head) => {
  let tempNode = null;
  let newHeadNode = null;
  const recurse = (node) => {
    if(node === null) {
      return;
    }
    tempNode = node;
    node = node.next;
    tempNode.next = newHeadNode;
    newHeadNode = tempNode;
    recurse(node);
    return;
  }
  recurse(head);
  return newHeadNode;
};

let headNode = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

headNode.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


headNode = reverseListIterative(headNode);
console.log(headNode);
headNode = reverseListRecursive(headNode);
console.log(headNode);
