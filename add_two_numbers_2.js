var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let sum = 0;
  let tailNode = new ListNode(0);
  while (stack1.length || stack2.length) {
    if (stack1.length) sum += stack1.pop();
    if (stack2.length) sum += stack2.pop();
    tailNode.val = sum % 10;
    let newNode = new ListNode(Math.floor(sum / 10));
    newNode.next = tailNode;
    tailNode = newNode;
    sum = Math.floor(sum / 10);

  }

  return tailNode.val === 0 ? tailNode.next : tailNode;
};