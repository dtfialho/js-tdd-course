const FizzBuzz = (num) => {
  if (num === 0) return 0;
  else if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';

  return num;
};

export default FizzBuzz;
