const assert = require('assert');
const Season = require('../season.js');

describe('Season', function () {

let season;

  beforeEach(function() {
    season = new Season(1, 564);
  });

  it('should have a season number', function () {
    const result = season.number;
    assert.strictEqual(result, 1);
  });

  it('should have duration in minutes', function() {
    const result = season.duration;
    assert.strictEqual(result, 564);
  })

});
