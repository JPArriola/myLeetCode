var twoSum = function (nums, target) {
  var remainders = {};
  for (var i = 0; i < nums.length; i++) {
    if (remainders[target - nums[i]] !== undefined) {
      return [remainders[target - nums[i]], i];
    }
    remainders[nums[i]] = i;
  }
};