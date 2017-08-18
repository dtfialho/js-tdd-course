/************************************************************
** FizzBuzz Challenge
**
** Create a lib that receive a number and:
**
** If the number is divisible by 3, return 'Fizz'
** If the number is divisible by 5, return 'Buzz'
** If the number is divisible by 3 and 5, return 'FizzBuzz'
** Else return the given number
**
*************************************************************/

import { expect } from 'chai';

import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {

  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number given when is not a multiple of 3 or 5', () => {
    expect(FizzBuzz(13)).to.be.equal(13);
  });

});
