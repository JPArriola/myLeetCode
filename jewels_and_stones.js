const numJewelsInStones = function (J, S) {
  let count = 0;
  for (var i = 0; i < J.length; i += 1) {
    let letter = J[i];

    for (var j = 0; j < S.length; j += 1) {
      let stone = S[j];

      if (letter === stone) {
        count += 1;
      }
    }
  }

  return count;
};