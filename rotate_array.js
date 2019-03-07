var rotate = function (nums, k) {
  let count = k;

  while (count > 0) {
    let num = nums.pop()
    nums.unshift(num)

    count--;
  }

  return nums;
};