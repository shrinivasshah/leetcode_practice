// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x
// causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (n) {
  var reverseN = 0;
  var sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseN = reverseN * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN);
  return reverseN > 0x7fffffff ? 0 : sign ? -reverseN : reverseN;
};

reverse(12345678967);
