const assert = require('assert');
const TVShow = require('../tv_show');
const Season = require('../season');

describe('TVShow', function () {

  let tvShow;

  beforeEach(function() {
    tvShow = new TVShow('Friends');
  });

  it('should have show name', function () {
    const result = tvShow.name;
    assert.strictEqual(result, 'Friends');
  });


  it('should start with no seasons', function () {
    const result = tvShow.seasons;
    assert.deepStrictEqual(result, []);
  });

  it('should have number of shows', function () {
    const result = tvShow.numberOfSeasons();
    assert.strictEqual(result, 0);
  });

  it('should be able to add a season', function () {
    tvShow.addSeason(1, 250);
    const result = tvShow.numberOfSeasons();
    assert.strictEqual(result, 1);
  });

  it('should calculate total duration of all its seasons', function() {
    const season1 = new Season(1, 250)
    const season2 = new Season(2, 300)
    tvShow.addSeason(season1);
    tvShow.addSeason(season2);
    const result = tvShow.calculateDuration();
    assert.strictEqual(result, 550);
  })

});
