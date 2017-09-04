import { expect } from 'chai';

import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke tests', () => {

    it('should exists method `sum`', () => {

      expect(sum).to.exist;
      expect(sum).to.be.a('function');

    });

    it('should exists method `sub`', () => {

      expect(sub).to.exist;
      expect(sub).to.be.a('function');

    });

    it('should exists method `mult`', () => {

      expect(mult).to.exist;
      expect(mult).to.be.a('function');

    });

    it('should exists method `div`', () => {

      expect(div).to.exist;
      expect(div).to.be.a('function');

    });

  });

  describe('Sum', () => {
    it('should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(2, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Mult', () => {
    it('should return 4 when `mult(2, 2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 1 when `div(2, 2)`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return `It\'s not possible division by 0` when dividing by 0', () => {
      expect(div(2, 0)).to.be.equal('It\'s not possible division by 0');
    });
  });

});
