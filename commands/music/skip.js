const { noplayersEmbed } = require("../../utils/embeds");
module.exports = {
  name: "skip",
  aliases: ["next"],
  category: "music",
  description: "Skips the current song in queue.",
  run: (message, args, client, Discord, player, queue) => {
    if (!queue) {
      return noplayersEmbed(Discord, message);
    }
    message.react("⏭️");
    player.skip(message);
    const stoppedPlayingEmbed = new Discord.MessageEmbed()
      .setDescription(`Skipped [${queue.songs[0].name}](${queue.songs[0].url})`)
      .setColor(client.embedColor);
    message.channel.send(stoppedPlayingEmbed);
  },
};
