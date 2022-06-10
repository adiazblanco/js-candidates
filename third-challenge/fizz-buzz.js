/*
 * Difficulty: Low
 *
 * Write a program that return an array with the numbers from 1 to 100 both included and replace the following values:
 * - Values multiple of 3 will be replaced by "fizz".
 * - Values multiple of 5 will be replaced by "buzz".
 * - Values multiple of 3 and 5 will be replaced by "fizzbuzz".
 */


const array = []

function createArray() {
    for (let index = 0; index < 100; index++) {
        array.push(index + 1);
    }
}

createArray();

function isMultiple(number, multiple) {
    return (number % multiple) == 0;
}

function fizzBuzz() {
    for (let index = 0; index < array.length; index++) {

        if (isMultiple(array[index], 3) && isMultiple(array[index], 5)) {
            array[index] = 'FizzBuzz'
        } else if (isMultiple(array[index], 3)) {
            array[index] = 'Fizz'
        } else if (isMultiple(array[index], 5)) {
            array[index] = 'Buzz'
        }
    }

    return array;
}

module.exports = fizzBuzz;