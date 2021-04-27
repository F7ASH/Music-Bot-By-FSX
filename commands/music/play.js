const { getPreview } = require("spotify-url-info");
module.exports = {
  name: "play",
  aliases: ["p"],
  category: "music",
  run: async (message, args, client, Discord, player) => {
    const text = args.join(" ").toLowerCase();

    player.play(message, args.join(" "));
  },
};
