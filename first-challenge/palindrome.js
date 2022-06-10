/*
 * Difficulty: Low
 *
 * Write a program that prints a Boolean if a word or phrase is a palindrome or not.
 *
 * Samples:
 *              eye => TRUE
 *              car => FALSE
 *              murder for a jar of red rum => TRUE
 */

function palindrome(word) {

    let wordReverse;
    word = word.toLowerCase().replace(/ /g, '');
    wordReverse = word.split('').reverse().join('');

    return word === wordReverse;
}

module.exports = palindrome;