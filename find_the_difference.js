var findTheDifference = function (s, t) {
  let str1 = s.split("").sort()
  let str2 = t.split("").sort()

  for (let i = 0; i < str2.length; i++) {
    if (!str1[i] || str1[i] !== str2[i]) {
      return str2[i];
    }
  }
};