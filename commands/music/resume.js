const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "resume",
  aliases: ["res", "unhold", "continue"],
  category: "music",
  description: "Resume The Paused Music!",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (player.isPlaying(message) || !player.isPaused(message)) {
      const alreadyPlayingTheMusicEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription("Music Is Not Paused to Resume!");
      return message.channel.send(alreadyPlayingTheMusicEmbed);
    }
    message.react("▶️");
    player.resume(message);
    const resumedMusicEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription("Resumed The Music!");
    message.channel.send(resumedMusicEmbed);
  },
};
