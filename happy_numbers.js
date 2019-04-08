const isHappy = (num) => {
  const mySet = new Set();
  let currentNum = n;

  while (currentNum !== 1) {
    if (mySet.has(currentNum)) return false;
    mySet.add(currentNum);
    let numString = currentNum.toString().split('');

    currentNum = numString.reduce((acc, el) => {
      return acc + Math.pow(el, 2)
    }, 0);
  }

  return true;
};
