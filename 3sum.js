function threeSum(nums) {
  let res = [];
  //[-1, 0, 1, 2, -1, -4]
  nums.sort((a, b) => a - b);
  //[-4, -1, -1, 1, 0, 2]

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i]; // 1
    let [left, right] = [i + 1, nums.length - 1];
    // -1 , 2
    while (right > left) {
      let sum = nums[left] + nums[right]; //1
      if (sum > target) {
        right = right - 1; //
      } else if (sum < target) {
        left = left + 1; //
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        break;
      }
    }
  }
  return res;
}

console.log(threeSum([0, -1, 1, -3, 2, 1, 0, 9, 8]));
