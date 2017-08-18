var expect = require('chai').expect;

var calc = require('../src/main.js');

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

});
