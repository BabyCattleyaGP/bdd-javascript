describe("pow", function(){
  it("raises to n-th power", function(){
    assert.equal(pow(2,3), 8);
  });

  it("3 raised to power 4 is 81", function() {
    assert.equal(pow(3, 4), 81);
  });
});
