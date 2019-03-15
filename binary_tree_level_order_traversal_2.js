var levelOrderBottom = function(root) {
  if (!root) return [];
  let queue = [root];
  let result = [[root.val]];

  while (queue.length){
    let nextQ = [];
    let subArr = [];
    while(queue.length){
      let curr = queue.shift();
      if (curr.left) nextQ.push(curr.left);
      if (curr.right) nextQ.push(curr.right);
    }
    queue = nextQ;
    nextQ.forEach(node => subArr.push(node.val));
    if (subArr.length) result.unshift(subArr);
  }
  return result;
};