const fizzBuzz = require('../../phase-one/third-challenge/fizz-buzz');

test('Evaluating 68', () => {
    expect(fizzBuzz()[67]).toBe(68);
});

test('Evaluating 83', () => {
    expect(fizzBuzz()[82]).toBe(83);
});

test('Evaluating 75', () => {
    expect(fizzBuzz()[74]).toBe('FizzBuzz');
});

test('Evaluating 85', () => {
    expect(fizzBuzz()[84]).toBe('Buzz');
});

test('Evaluating 69', () => {
    expect(fizzBuzz()[68]).toBe('Fizz');
});

test('Evaluating 101', () => {
    expect(fizzBuzz()[100]).toBe(undefined);
});