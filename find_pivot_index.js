var pivotIndex = function (arr) {
  let total = arr.reduce((acc, el) => acc + el, 0);
  let L = 0;
  let R = total;
  let index = 0;

  while (index < arr.length) {
    R = R - arr[index];
    if (L === R) return index;
    L += arr[index];
    index++;
  }

  return -1;
};