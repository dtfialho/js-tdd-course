const chai = require('chai');
const expect = require('chai').expect;

const convertBTC = require('../src/ConvertBTC.js');

describe('ConvertBTC', () => {

  it('should return USD as currency and 1 as amount default', () => {
    expect(ConvertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('should return BRL as currency and 10 as amount default', () => {
    expect(ConvertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });

});
