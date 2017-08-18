describe('Main', function() {
  before(function() {
    console.log('before');
  });

  beforeEach(function() {
    console.log('beforeEach');
  })

  after(function() {
    console.log('after');
  });

  afterEach(function() {
    console.log('afterEach');
  });

  it('test 1', function() {
    console.log('test 1');
  });

  it('test 2', function() {
    console.log('test 2');
  });
});
