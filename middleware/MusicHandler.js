const filters = require("../configs/filters.json");
const Distube = require("distube");
module.exports = (client, Discord) => {
  client.player = new Distube(client, {
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,
    youtubeDL: true,
    emitNewSongOnly: true,
    updateYouTubeDL: true,
    customFilters: filters,
  });
  client.playerStatus = (queue, type) => {
    const statusOptions = {
      volume: queue.volume,
      filter: queue.filter || "None",
      loop: queue.repeatMode
        ? queue.repeatMode == 2
          ? "Queue"
          : "Track"
        : "None",
      autoplay: queue.autoplay ? "On" : "Off",
    };
    const statusText = `**Volume  :**  ${statusOptions.volume} | **Filters  :**  ${statusOptions.filter} | **Loop  :**  ${statusOptions.loop} | **Autoplay  :**  ${statusOptions.autoplay}`;
    return type ? statusOptions : statusText;
  };
};
