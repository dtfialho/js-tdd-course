describe('Main', function() {
  context('Will not be executed', function() {
    it('It will pass', function() {

    });
  });

  context.only('Will be executed', function() {
    it.skip('Not this one', function() {

    });

    it('Should not pass', function() {
      throw new Error('You shall not pass!');
    });

    it('Should pass', function() {

    });
  })
});
