const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "queue",
  aliases: ["que", "q", "songlist"],
  category: "music",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue || !queue.songs[0]) {
      return noplayersEmbed(Discord, message);
    }
  },
};
