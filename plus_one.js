var plusOne = function (digits) {
  let i = digits.length - 1;
  let addOne = true;

  for (let i = digits.length - 1; i >= 0; i--) {
    let currNum = digits[i];
    if (addOne) {
      currNum = currNum + 1;
      addOne = false;
    }
    if (currNum === 10) {
      addOne = true
      digits[i] = 0
    } else {
      digits[i] = currNum
    }
  }

  if (!digits[0]) digits.unshift(1);

  return digits;
};