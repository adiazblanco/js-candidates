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
    word = word.toLowerCase().replace(/ /g, '').replace('.', '');
    word = word.normalize('NFD')
        .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
        .normalize();
    wordReverse = word.split('').reverse().join('');

    return word === wordReverse;
}

module.exports = palindrome;