const findMedianSortedArrays = function (nums1, nums2) {
  let arr = merge(nums1, nums2);
  return findMedian(arr);


  function merge(arr1, arr2) {
    let result = [];

    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }

    if (arr1.length) {
      result.push(...arr1)
    } else {
      result.push(...arr2)
    }

    return result;
  }

  function findMedian(arr) {
    if (arr.length % 2) {
      return (arr[Math.floor(arr.length / 2)]);
    } else {
      return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2;
    }
  }
};