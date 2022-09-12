function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  if (target > arr[end] || target < arr[start]) {
    return "Number doesn't exist";
  }

  while (start < end || start == end) {
    let middle = start + Math.floor((end - start) / 2);
    console.log(
      `start: ${arr[start]} => end: ${arr[end]} => middle: ${arr[middle]}`
    );

    if (arr[middle] == target) {
      return arr[middle];
    }
    if (middle < target) {
      start = middle + 1;
    } else if (middle > target) {
      end = middle - 1;
    }
  }
}

const testArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
];

const result = binarySearch(testArr, 32);
console.log(result);
