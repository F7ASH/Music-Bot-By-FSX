const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "pause",
  aliases: ["pse", "hold"],
  category: "music",
  description: "Pause The playing Music!",
  run: async (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    if (player.isPaused(message)) {
      const alreadyPausedTheMusicEmbed = new Discord.MessageEmbed()
        .setColor(client.embedColor)
        .setDescription("Already Paused The Music!");
      return message.channel.send(alreadyPausedTheMusicEmbed);
    }
    message.react("⏸️");
    player.pause(message);
    const pausedMusicEmbed = new Discord.MessageEmbed()
      .setColor(client.embedColor)
      .setDescription("Paused The Music!");
    message.channel.send(pausedMusicEmbed);
  },
};
