const palindrome = require('../../phase-one/first-challenge/palindrome');

test('Evaluating arepera', () => {
    expect(palindrome('arepera')).toBe(true);
});

test('Evaluating cristiano', () => {
    expect(palindrome('cristiano')).toBe(false);
});

test('Evaluating Dábale arroz a la zorra el abad', () => {
    expect(palindrome('Dábale arroz a la zorra el abad')).toBe(true);
});

test('Evaluating Atar a la rata', () => {
    expect(palindrome('Atar a la rata.')).toBe(true);
});

test('Evaluating Una aventura', () => {
    expect(palindrome('Una aventura')).toBe(false);
});