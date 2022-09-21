/* Reversing an integer means to reverse all its digits.

For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true 
if reversed2 equals num. Otherwise return false. */

var isSameAfterReversals = function (x) {
  var sign = x < 0;
  let num = Math.abs(x);
  reverseN = 0;
  reverseN2 = 0;
  while (num) {
    reverseN = reverseN * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  while (reverseN) {
    reverseN2 = reverseN2 * 10 + (reverseN % 10);
    reverseN = Math.floor(reverseN / 10);
  }
  let output = sign ? -reverseN2 : reverseN2;
  return x === output;
};

console.log(isSameAfterReversals(890));
