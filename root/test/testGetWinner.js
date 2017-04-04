var getWinner = require('../getWinner');
var assert = require('assert');

describe('getWinner Function', function() {
  describe('Test with a candidate array and a ballot matrix', function() {
    it('should return John Doe when these are ["John Doe", "Jane Smith", "Jane Austen"],[[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 2, 3], [3, 1, 2]]', function() {
      assert.equal(getWinner(["John Doe", "Jane Smith", "Jane Austen"],[[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 2, 3], [3, 1, 2]]), "John Doe");
    });
  });
  describe('Test with a tied candidates', function() {
    it('should return tie when these are ["John Doe", "Jane Smith", "Jane Austen"],[[1, 2, 3], [2, 1, 3],[3, 2, 1]]', function() {
      assert.equal(getWinner(["John Doe", "Jane Smith", "Jane Austen"],[[1, 2, 3], [2, 1, 3], [3, 2, 1]]), "tie");
    });
  });
});
