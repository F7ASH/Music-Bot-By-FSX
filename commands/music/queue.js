const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "queue",
  aliases: ["que", "q", "songlist"],
  category: "music",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    let songlist = "";

    queue.songs.forEach((song, index) => {
      songlist += `${index + 1} - ${song.name}\n`;
    });
    message.channel.send(songlist);
  },
};
