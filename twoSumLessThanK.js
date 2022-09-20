let twoSumLessThanK = (A, K) => {
  let [l, r] = [0, A.length - 1];
  let maxSum = -1;
  A.sort((a, b) => a - b);
  console.log(A.sort((a, b) => a - b));
  while (l < r) {
    let newSum = A[l] + A[r];
    console.log("left", A[l], "right", A[r], "total", newSum);

    if (newSum < K && newSum > maxSum) {
      //   console.log(newSum);
      maxSum = newSum;
    } else if (newSum >= K) {
      //   console.log("R--", newSum);
      r--;
    } else {
      //   console.log("L++", newSum);
      l++;
    }
  }
  return maxSum;
};

twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60);
