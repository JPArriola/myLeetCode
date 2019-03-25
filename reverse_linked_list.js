var reverseList = function(head) {
  if (!head) return null;
  let currentNode = head;
  let next = currentNode.next;
  let prev = ListNode(0);
  
  while(currentNode){
    next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  
  return prev;
};