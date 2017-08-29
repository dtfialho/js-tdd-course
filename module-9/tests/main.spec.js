const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcConverter = 'node ./src/main.js';

const pkg = require('../package.json');

describe('Main CLI', () => {

  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any corrency defined')).to.be.true;
      done();
    });
  });

});
