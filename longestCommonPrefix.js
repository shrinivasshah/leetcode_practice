// var longestCommonPrefix = function (strs) {
//   return strs.reduce((prev, next) => {
//     let i = 0;
//     while (prev[i] && next[i] && prev[i] === next[i]) i++;
//     return prev.slice(0, i);
//   });
// };

function longestCommonPrefix(strs) {
  var res = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (i === s.length || s[i] !== strs[0][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
