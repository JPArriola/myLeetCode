var removeElements = function (head, val) {
  let dummy = new ListNode(0);
  let currNode = head
  dummy.next = currNode;
  let prev = dummy;

  while (currNode) {
    if (currNode.val === val) {
      prev.next = currNode.next;
      currNode = currNode.next;
    } else {
      prev = currNode;
      currNode = currNode.next
    }
  }

  return dummy.next
};