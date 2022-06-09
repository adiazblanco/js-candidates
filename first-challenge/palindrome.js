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

function palindrome(text) {
    const cleanText = text.replaceAll(' ', '');
    const reverseText = cleanText.split('').reverse().join('');
    return cleanText === reverseText;
}

module.exports = palindrome;
