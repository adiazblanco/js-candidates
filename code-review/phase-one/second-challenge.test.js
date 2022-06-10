const factorial = require('../../phase-one/second-challenge/factorial');

test('Evaluating 2', () => {
    expect(factorial(2)).toBe(2);
});

test('Evaluating 4', () => {
    expect(factorial(4)).toBe(24);
});

test('Evaluating 3', () => {
    expect(factorial(3)).toBe(6);
});

test('Evaluating 6', () => {
    expect(factorial(6)).toBe(720);
});

test('Evaluating 1', () => {
    expect(factorial(1)).toBe(1);
});