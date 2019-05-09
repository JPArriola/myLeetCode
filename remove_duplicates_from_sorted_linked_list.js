var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let node = head.next;
  let prev = head;

  while (node) {
    if (node.val !== prev.val) {
      prev.next = node;
      prev = node;
    }
    node = node.next;
  }
  prev.next = null;
  return head
};