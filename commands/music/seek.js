const { noplayersEmbed, noArgsEmbed } = require("../../utils/embeds");
module.exports = {
  name: "seek",
  category: "music",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (!args.length) {
      return noArgsEmbed(Discord, message);
    }
    let seekTime = Number(args[0]);
    if (isNaN(seekTime)) {
    }
    if (seekTime > queue.songs[0].duration) {
      seekTime = queue.songs[0].duration - 1;
    }
    player.seek(message, seekTime);
    message.reply("Seekd");
  },
};
