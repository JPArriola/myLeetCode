var isOneEditDistance = function (s, t) {
  let long = s;
  let short = t;
  let lengthDiff = long.length - short.length;
  let mistakes = 0;
  if (Math.abs(lengthDiff > 1)) {
    return false;
  } else if (lengthDiff < 0) {
    long = t;
    short = s;
  }

  let longP = 0,
    shortP = 0;
  while (longP < long.length) {
    if (long[longP] === short[shortP]) {
      longP++;
      shortP++;
    } else {
      mistakes++;
      longP++;
      if (!lengthDiff) shortP++;
    }
  }

  return mistakes === 1;
};