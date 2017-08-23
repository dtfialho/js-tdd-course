import { expect } from 'chai';

import convertTime from '../src/ConvertTime';

describe('ConvertTime', () => {

  it('should exist', () => {
    expect(convertTime).to.exist;
  });

  it('should receive 0ms and convert to "0:00"', () => {
    expect(convertTime(0)).to.be.equal('0:00');
  });

  it('should receive 1000ms and convert to "0:01"', () => {
    expect(convertTime(1000)).to.be.equal('0:01');
  });

  it('should receive 11000ms and convert to "0:11"', () => {
    expect(convertTime(11000)).to.be.equal('0:11');
  });

  it('should receive 60000ms and convert to "1:00"', () => {
    expect(convertTime(60000)).to.be.equal('1:00');
  });

});
