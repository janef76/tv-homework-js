const TVShow = function(name, seasons) {
  this.name = name;
  this.seasons = [];
}

TVShow.prototype.numberOfSeasons = function () {
  return this.seasons.length;
}

TVShow.prototype.addSeason = function (season) {
  this.seasons.push(season)
}

TVShow.prototype.calculateDuration = function () {
  let duration = 0;
  for (let i = 0; i < this.numberOfSeasons(); i++) {
    const season = this.seasons[i]
    duration += season.duration;
  }
  return duration;
  // const index = this.seasons.indexof(duration);
}

module.exports = TVShow;
