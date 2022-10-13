// var lengthOfLongestSubstring = function (s) {
//   let charSet = new Set();

//   let l = 0;
//   let res = 0;

//   for (let r = 0; r < s.length; r++) {
//     while (charSet.has(s[r])) {
//       charSet.delete(s[l]);
//       l++;
//     }

//     charSet.add(s[r]);
//     res = Math.max(res, r - l + 1);
//   }
//   console.log(res);
// };

function lengthOfLongestSubstring(s) {
  let map = {};
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    let rightChar = s[r];
    map[rightChar] = map[rightChar] + 1 || 1;

    while (map[rightChar] > 1) {
      let leftChar = s[l];
      if (map[leftChar] > 1) map[leftChar]--;
      else delete map[leftChar];
      l++;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
