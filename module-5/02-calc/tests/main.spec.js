var expect = require('chai').expect;

var calc = require('../src/main.js');

var sum, sub, mult, div;

before(function() {

  sum = calc.sum;
  sub = calc.sub;
  mult = calc.mult;
  div = calc.div;

});

describe('Calc', function() {

  // smoke tests
  describe('Smoke tests', function() {

    it('should exists the calc lib', function() {

      expect(calc).to.exist;

    });

    it('should exists method `sum`', function() {

      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');

    });

    it('should exists method `sub`', function() {

      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');

    });

    it('should exists method `mult`', function() {

      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');

    });

    it('should exists method `div`', function() {

      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');

    });

  });

  describe('Sum', function() {
    it('should return 4 when `sum(2, 2)`', function() {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', function() {
    it('should return 4 when `sub(2, 2)`', function() {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Mult', function() {
    it('should return 4 when `mult(2, 2)`', function() {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', function() {
    it('should return 1 when `div(2, 2)`', function() {
      expect(div(2, 2)).to.be.equal(1);
    });

    it('should return `It\'s not possible division by 0` when dividing by 0', function() {
      expect(div(2, 0)).to.be.equal('It\'s not possible division by 0');
    });
  });

});
