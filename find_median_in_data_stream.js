var MedianFinder = function () {
  this.store = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let low = 0;
  let high = this.store.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (this.store[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return this.store.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.store.length % 2) {
    let mid = Math.floor(this.store.length / 2);
    return this.store[mid];
  } else {
    let mid = Math.floor(this.store.length / 2);
    return ((this.store[mid] + this.store[mid - 1]) / 2);
  }
};