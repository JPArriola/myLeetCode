const groupAnagrams = function (strs) {
  let map = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let sorted = sortWord(word);

    if (!map[sorted]) {
      map[sorted] = [word]
    } else {
      map[sorted].push(word)
    }
  }

  for (let key in map) {
    result.push(map[key]);
  }

  return result;


  function sortWord(word) {
    let letters = word.split('');
    letters.sort((a, b) => a > b)
    return letters.join('');
  }
};