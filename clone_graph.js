var cloneGraph = function (node) {
  let cache = {};
  return recur(node);

  function recur(node) {
    if (!node) return;
    if (!cache[node.val]) {
      cache[node.val] = new Node(node.val);
      cache[node.val].neighbors = node.neighbors.map(neighbor => recur(neighbor));
    }

    return cache[node.val];
  }
};