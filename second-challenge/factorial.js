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

function factorial(number) {

   return number <= 1 ?? number * factorial(number - 1);
}

module.exports = factorial;