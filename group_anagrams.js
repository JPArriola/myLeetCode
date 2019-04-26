const groupAnagrams = function (strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let sorted = word.split('').sort().join('');

    if (!map[sorted]) {
      map[sorted] = []
    }

    map[sorted].push(word)
  }

  return Object.values(map);
};