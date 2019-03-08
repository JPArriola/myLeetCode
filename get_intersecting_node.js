var getIntersectionNode = function (headA, headB) {
  let list1 = headA;
  let list2 = headB;
  let list1Length, list2Length;

  const getLength = (node) => {
    let length = 0;
    let currNode = node;
    while (currNode) {
      length += 1;
      currNode = currNode.next;
    }

    return length;
  }

  list1Length = getLength(list1);
  list2Length = getLength(list2);

  let difference = 0;
  let greater, smaller;

  if (list1Length > list2Length) {
    difference = list1Length - list2Length;
    greater = list1;
    smaller = list2;
  } else {
    difference = list2Length - list1Length;
    greater = list2;
    smaller = list1;
  }

  while (difference) {
    greater = greater.next;
    difference -= 1;
  }

  while (smaller || greater) {
    if (smaller === greater) {
      return smaller;
    } else {
      smaller = smaller.next;
      greater = greater.next;
    }
  }

  return null;
};