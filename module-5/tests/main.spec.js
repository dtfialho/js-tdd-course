describe('Main', function() {
  var arr;

  before(function() {

  });

  beforeEach(function() {
    arr = [ 1, 2, 3 ];
  });

  after(function() {

  });

  afterEach(function() {

  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    console.log(arr.length);
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    console.log(arr.length);
  });

  it('should remove the value 3 when use pop in our array', function() {
    console.log(arr.pop() === 3);
  });
});
