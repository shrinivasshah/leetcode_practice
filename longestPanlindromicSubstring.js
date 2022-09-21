var longestPalindrome = function (s) {
  if (s.length === 0 || s === null) return "";
  let largest = "";
  for (let i = 0; i < s.length; i++) {
    let evenPalindrome = expandFromCenter(s, i - 1, i);
    let oddPalindrome = expandFromCenter(s, i, i);

    if (evenPalindrome.length > largest.length) largest = evenPalindrome;
    if (oddPalindrome.length > largest.length) largest = oddPalindrome;
  }

  return largest;
};

function expandFromCenter(str, left, right) {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;
  return str.slice(left - i, right + i + 1); //first inclusive, last exclusive
}

longestPalindrome("abba");
