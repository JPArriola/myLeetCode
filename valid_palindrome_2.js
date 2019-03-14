var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return (validPal(s.slice(i + 1, j + 1)) || validPal(s.slice(i, j)))
    }
  }

  return true;
};

const validPal = (s) => s === s.split('').reverse().join('');