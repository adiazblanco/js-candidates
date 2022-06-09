/*
 * Difficulty: Low
 *
 * Write a program that calculate the factorial value from a number in a recursive function.
 *
 * Samples:
 *              3 => 6
 *              9 => 362880
 *              6 => 720
 */

function factorial(number, lastResult = 0) {
    const result = (lastResult === 0 ?
      (number * (number - 1)) : (lastResult * (number - 1)));
    if (number === 2) {
      return result;
    }
    factorial(number - 1, result);
}

factorial(6);

module.exports = factorial;
