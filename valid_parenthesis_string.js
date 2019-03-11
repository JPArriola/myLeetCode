var checkValidString = function (s) {
  let low = 0,
    high = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (curr === "(") {
      low++;
      high++;
    } else if (curr === ")") {
      if (low > 0) low--;
      high--;
    } else {
      if (low > 0) low--;
      high++;
    }

    if (high < 0) return false;
  }

  return low === 0;
};