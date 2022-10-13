function twoSum(arr, k) {
  if (arr.length < 2) {
    return;
  }

  let differceSet = new Set();
  let output = new Set();
  for (let i = 0; i < arr.length; i++) {
    let difference = k - arr[i];
    if (differceSet.has(difference)) {
      output.add(Math.min(difference, arr[i]), Math.max(difference, arr[i]));
    } else {
      differceSet.add(arr[i]);
    }
  }
  return output;
}

twoSum([1, 2, 3, 4, 5, 6], 6);
