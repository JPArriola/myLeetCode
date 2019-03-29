var maxDepth = function (root) {
  if (!root) return 0;
  let max = 1;
  let queue = [root];
  let depthQueue = [1];
  let currentNode;

  while (queue.length) {
    currentNode = queue.shift();
    max = depthQueue.shift();
    if (currentNode.children.length) {
      for (let i = 0; i < currentNode.children.length; i++) {
        let child = currentNode.children[i];
        queue.push(child);
        depthQueue.push(max + 1);
      }
    }
  }

  return max;
};