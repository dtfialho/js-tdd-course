const sum = (number1, number2) => number1 + number2;
const sub = (number1, number2) => number1 - number2;
const mult = (number1, number2) => number1 * number2;
const div = (number1, number2) => (number2 === 0) ? 'It\'s not possible division by 0' : number1 / number2;

export { sum, sub, mult, div }
