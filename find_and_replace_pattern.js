var findAndReplacePattern = function (words, pattern) {
  let result = [];

  for (let word of words) {
    if (validPermutation(word, pattern)) result.push(word);
  }

  return result;

  function validPermutation(word, pattern) {
    let wordHash = {};
    let patternHash = {};

    for (let i = 0; i < word.length; i++) {
      if (wordHash[word[i]] && wordHash[word[i]] !== pattern[i]) return false;
      if (patternHash[pattern[i]] && patternHash[pattern[i]] !== word[i]) return false;
      wordHash[word[i]] = pattern[i];
      patternHash[pattern[i]] = word[i];
    }

    return true;
  }
};