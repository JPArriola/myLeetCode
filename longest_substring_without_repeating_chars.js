function lengthOfLongestSubstring(s) {
  //     const map = {};
  //     var left = 0;

  //     return s.split('').reduce((max, v, i) => {
  //         left = map[v] >= left ? map[v] + 1 : left;
  //         map[v] = i;
  //         return Math.max(max, i - left + 1);
  //     }, 0);

  const map = {};
  let max = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      j = Math.max(j, map[s[i]] + 1)
    }

    map[s[i]] = i;
    max = Math.max(max, (i - j) + 1);
  }

  return max;
}