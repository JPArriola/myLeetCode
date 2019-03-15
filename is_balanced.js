var isBalanced = function (root) {
  return getHeight(root) !== -1;

  function getHeight(root) {
    if (!root) return 0;

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  }
};