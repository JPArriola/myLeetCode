var isPalindrome = function (x) {
  let reversedNum = x.toString().split('').reverse().join('');
  return parseInt(reversedNum) === x;
};