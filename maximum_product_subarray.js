var maxProduct = function (nums) {
  let maxProduct = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currProduct = nums[i];
    maxProduct = Math.max(maxProduct, currProduct);

    for (let j = i + 1; j < nums.length; j++) {
      let currNum = nums[j];
      currProduct *= currNum;
      maxProduct = Math.max(maxProduct, currProduct);
    }
  }

  return maxProduct;
};